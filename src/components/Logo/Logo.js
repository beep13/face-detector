import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.jpg'
import './Logo.css';

const Logo = () => {
  return (
    <Tilt className='logo br2 ma2 shadow-4' style={{ height: '100px', width:'100px'}}>
      <div>
        <img alt="logo" src={logo}/>
      </div>
    </Tilt>
  )
}

export default Logo;
