
import PropTypes from 'prop-types'

export default function ImageGalleryItem({ item, handleImageClick }) {
   
    const {webformatURL, largeImageURL, tags,} = item
    
        return (
           <li className="ImageGalleryItem" >
   <img src={webformatURL} alt={tags}  onClick ={() => handleImageClick(largeImageURL)} className="ImageGalleryItem-image" />
 </li> 
        )
    
};




ImageGalleryItem.propTypes = {
    item: PropTypes.shape({
        webformatURL: PropTypes.string,    
        largeURL: PropTypes.string,
        tags: PropTypes.string,
    }),
    handleImageClick: PropTypes.func.isRequired,
}