import { Component } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector('#modal-root');


export default class Modal extends Component{
    componentDidMount() {

    }

    componentWillUnmount() {
        
    }
    
    render() {
        const { largeImageURL } = this.props.item
            return createPortal(   <div className="Overlay" >
  <div className="Modal">
    <img src={largeImageURL} alt="" />
  </div>
</div>, modalRoot)
     
    }
}