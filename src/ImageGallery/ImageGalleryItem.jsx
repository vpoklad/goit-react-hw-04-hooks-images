import PropTypes from 'prop-types'
export default function ImageGalleryItem({ item, handleImageClick }) {
    const { webformatURL, id, } = item;
        return(
        <li className="ImageGalleryItem">
  <img src={webformatURL} alt="" id= {id} onClick ={() => handleImageClick(id)} className="ImageGalleryItem-image" />
</li>
    )
};


ImageGalleryItem.propTypes = {
    item: PropTypes.shape({
        webformatURL: PropTypes.string,
        id: PropTypes.string,
    }),
    handleImageClick: PropTypes.func.isRequired,
}