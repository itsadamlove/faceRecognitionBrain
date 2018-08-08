import React from 'react'
import Particles from 'react-particles-js'
import './ParticlesBackground.css'

const ParticlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
          color: "#3CA9D1",
          blur: 5
      }
    }
  }
}

const ParticlesBackground = () => {
  return (
    <Particles className="ParticlesBackground"
      params={ParticlesOptions}
    />

  )
}

export default ParticlesBackground;
