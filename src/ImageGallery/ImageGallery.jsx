// import PropTypes from 'prop-types'
import { Component } from 'react'
import pixabayAPI from '../Services/pixabayAPI'
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import MyLoader from '../Loader/Loader'
import { Notification } from 'react-pnotify'



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
                
                this.setState({ searchResults: searchResults.hits, serchHits: searchResults.total, status: 'success' });
              }
              else {
                this.setState({ status: 'error', errorMessage: "Nothing found!"})
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
        // this.setState({ status: "pending" });
            
      picsearch.page = 1;
      picsearch.search()
        .then(searchResults => {
          this.setState(prev => ({
            searchResults: [...prev.searchResults, ...searchResults.hits],
            status: 'success'}));
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
        })
        .catch((er) => { this.setState({ status: 'error', errorMessage: er }) });
        
    }

  render() {
   const {status, searchResults, serchHits, largeURL, errorMessage } = this.state
    if (status === 'init') {
      return <h1 className="title">Hello! Search something</h1>;
    }
   if (status === 'pending') {
     return <ul className="ImageGallery">
       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15].map((el) => <MyLoader key={el} />)}
     </ul>}
    if (status === 'success') {
      return (
        <>
              <ul className="ImageGallery">
                  {searchResults.map(el => (
                      
                    < ImageGalleryItem key ={el.id} item={el} handleImageClick = {this.handleImageClick} />)                                      
                   
                )}
            </ul>
              {(serchHits > 15) && <button className ="Button" type="button" id='more' onClick={this.handleClick}>
                  load more
              </button>}
          
        </>
      );
     }
     if (status === 'modal') {
         return <Modal largeImageURL={ largeURL} onModalClose = {this.onModalClose} />
     }
   if (status === 'error') {
      
      return <Notification
        type='Error'
        title='Error'
        text={errorMessage}
       
      />
    }
  }

   
}
           
