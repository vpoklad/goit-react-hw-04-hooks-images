import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types'
const modalRoot = document.querySelector('#modal-root');


export default function Modal({ largeImageURL, onModalClose }){
  
  useEffect(() => {
    window.addEventListener('keydown', handleEscKey)
    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  });
  

  const handleOverlayclick = (e) => {
   
  if (e.target === e.currentTarget) {
    onModalClose()
  }
  }
  const handleEscKey = (e) => {
    if (e.code === "Escape") {
      onModalClose()
    }
  };

    
            return( createPortal(   <div className="Overlay" onClick ={handleOverlayclick}>
  <div className="Modal" >
    <img src={largeImageURL} alt="" />
  </div>
</div>, modalRoot))    
    
};

Modal.propTypes = {
  largeImageURL : PropTypes.string,
  onModalClose: PropTypes.func.isRequired,
}