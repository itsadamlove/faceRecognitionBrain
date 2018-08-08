import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl}) => {

  return (!imageUrl.length)?
    (
      <div className="ImageContainer--blank">
      </div>
    ) :
    (
      <div className="ImageContainer">
        <img src={imageUrl} alt="sample" />
      </div>
    )
}

export default FaceRecognition
