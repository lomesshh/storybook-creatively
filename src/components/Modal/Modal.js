import React, { useState } from 'react'
import './Modal.css'

const Modal = () => {
    
  const [display, setDisplay] = useState ('none')

  return (
    <div>
        <button id="myBtn" className="btn " onClick={() => display === 'none' ? setDisplay('block') : setDisplay('none') } >Open Modal</button>
        <div id="myModal" className="modal" style={{display : display}}>
        <div className="modal-content">
            <span className="close" onClick={() =>  display === 'none' ? setDisplay('block') : setDisplay('none')}><i className="fas fa-times"></i></span>
            <h3>This is demo modal</h3>
            <p>Lorem Ipsum is simply dummy text.</p>
        </div>
        </div>     
    </div>                                                                                                                                                                                                                                  
  )
}

export default Modal