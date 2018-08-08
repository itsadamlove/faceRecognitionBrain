import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import chip from './chip.png'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="ChipLogo__container Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 140, width: 140 }} >
        <div className="Tilt-inner">
          <img src={chip} alt="Brain Chip Logo" />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;
