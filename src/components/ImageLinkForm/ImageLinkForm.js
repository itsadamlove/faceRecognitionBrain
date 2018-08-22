import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ImageLinkForm__container">
      <p className="Caption">
        {`This Magic Brain will detect faces in your pictures. Give it a try.`}
      </p>
      <div className="FormContainer">
        <div className="FormWrapper">
          <input className='Form__input' type="text" onChange={onInputChange}/>
          <button
            className='Form__button'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
