// import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import pixabayAPI from '../Services/pixabayAPI'
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import MyLoader from '../Loader/Loader'
import { Notification } from 'react-pnotify'
import PropTypes from 'prop-types'



const picsearch = new pixabayAPI();

export default function ImageGallery({searchQuery}) {
    
  const [searchResults, setSearchResults ] = useState([]);
  const [searchHits, setSearchHits ] = useState(null);
  const [status, setStatus ] = useState("init");
  const [largeURL, setLargeURL ] = useState("");
  const [errorMessage, setErrorMessage ] = useState("");

    
  useEffect(() => {
    if (searchQuery === "") {
      return      
    };
    setStatus("pending");
    picsearch.resetPage();
    picsearch.searchQuery = searchQuery;
    picsearch.search()
      .then(searchResults => {
        if (searchResults.hits.length > 0) {
          setSearchResults(searchResults.hits);
          setSearchHits(searchResults.total);
          setStatus("success");         
        }
        else {
          setErrorMessage("Nothing found!");
          setStatus("error");          
        }
      });      
  }, [searchQuery]);    
    

    const handleImageClick = (value) => {
      setLargeURL(value);
      setStatus("modal"); 
     
  }
  
    const onModalClose = () => {
        setStatus("success"); 
  }
  
   const handleClick = (e) => {            
      picsearch.page = 1;
      picsearch.search()
        .then(searchResults => {
          setSearchResults((prev)=>[...prev, ...searchResults.hits]);
          setStatus("success"); 
          
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
        })
        .catch((er) => {
          setErrorMessage(er);
          setStatus("error");          
        });        
    }  
   
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
                      
                    < ImageGalleryItem key ={el.id} item={el} handleImageClick = {handleImageClick} />)                                      
                   
                )}
            </ul>
              {(searchHits > 15) && <button className ="Button" type="button" id='more' onClick={handleClick}>
                  load more
              </button>}
          
        </>
      );
     }
     if (status === 'modal') {
         return <Modal largeImageURL={ largeURL} onModalClose = {onModalClose} />
     }
   if (status === 'error') {
      
      return <Notification
        type='Error'
        title='Error'
        text={errorMessage}
       
      />
  }
  

  
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
}
           
