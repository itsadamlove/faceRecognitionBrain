import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {

  return (!imageUrl.length)?
    (
      <div className="ImageContainer--blank">
      </div>
    ) :
    (
      <div className="ImageContainer__wrapper">
        <div className="ImageContainer">
          <img id='inputimage' src={imageUrl} alt="sample" width='500px' height='auto'/>
          <div className='BoundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
      </div>
    )
}

export default FaceRecognition
