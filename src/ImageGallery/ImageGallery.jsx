// import PropTypes from 'prop-types'
import { Component } from 'react'
import pixabayAPI from '../Services/pixabayAPI'
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import Loader from "react-loader-spinner";
const picsearch = new pixabayAPI();
export default class ImageGallery extends Component {
    
    state = {
        searchResults: [],
        serchHits:null,
        status: "init",
        largeURL: "",
        errorMessage: "",
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({ status: "pending" });
            picsearch.resetPage();
            picsearch.searchQuery = this.props.searchQuery;
            picsearch.search()
                .then(searchResults => {
                    if (searchResults.hits.length > 0) {
                        console.log(searchResults);
                        this.setState({ searchResults : searchResults.hits, serchHits: searchResults.total,  status: 'success' });
                    }
                    else {
                        this.setState({ status: 'error' })
                    }
                });
                
                
        }
    };
    

    handleImageClick = (value) => {
        this.setState({
            largeURL: value,
            status: 'modal',
        })
    }
    onModalClose = () => {
        this.setState({
            status: 'success',
        })
    }
    handleClick = (e) => {
        this.setState({ status: "pending" });
            
        picsearch.page = 1;
        picsearch.search()
        .then(searchResults => {
        this.setState(prev => ({
          searchResults: [...prev.searchResults, ...searchResults.hits],
          status: 'success',
        }));
        window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});    

                    
        }
        
);
        
    }

 render() {
    if (this.state.status === 'init') {
      return <h1>Hello! Search something</h1>;
    }
    if (this.state.status === 'pending') {
      return <Loader
        type="TailSpin" color="#00BFFF" height={180} width={180}
        timeout={3000} //3 secs
      />
    }
    if (this.state.status === 'success') {
      return (
          <>
              <ul className="ImageGallery">
                  {this.state.searchResults.map(el => (
                      
                    < ImageGalleryItem key ={el.id} item={el} handleImageClick = {this.handleImageClick} />)                                      
                   
                )}
            </ul>
              {(this.state.serchHits > 15) && <button type="button" id='more' onClick={this.handleClick}>
                  load more
              </button>}
          
        </>
      );
     }
     if (this.state.status === 'modal') {
         return <Modal largeImageURL={ this.state.largeURL} onModalClose = {this.onModalClose} />
     }
    if (this.state.status === 'error') {
      return <h1>ALARMA!!!</h1>;
    }
  }

    // render() {
    //     if (this.state.status === "init") {
    //         return <p>Please type your request</p>
    //     }
    //     if (this.state.status === "success") {
    //         return <p>Success</p>
    //     }
            // return <ul className="ImageGallery">
            //     {this.state.searchResults.hits.map(el => {
            //         return( < ImageGalleryItem item={el} />)                                      
                   
            //     })}
            // </ul>
    //     // }
    // }
}
           
