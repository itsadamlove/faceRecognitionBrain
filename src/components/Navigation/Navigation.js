import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
      <nav className="Navigation__container">
        <p onClick={() => onRouteChange("signout")} className='Navigation__link'>Log Out</p>
      </nav>
    )
  } else {
    return (
      <nav className="Navigation__container">
        <p onClick={() => onRouteChange("login")} className='Navigation__link'>Log In</p>
        <p onClick={() => onRouteChange("Register")} className='Navigation__link'>Register</p>
      </nav>
    )
  }
}

export default Navigation;
