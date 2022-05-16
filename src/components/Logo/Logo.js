import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div className='ma4'>
    <Tilt className='br2 shadow-4' style={{ height: '100px', width:'100px'}}>
      <div>
        <h1>R</h1>
      </div>
    </Tilt>
    </div>
  )
}

export default Logo;
