import React from 'react';
import '../../App.css';
import './ImgDisp.css';

const ImgDisp = ({ imgUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='center absolute mt2' >
        <img id='inputimage' alt='' src={imgUrl} width='500px' height='auto'/>
        <div
          className='bounding-box'
          style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
        </div>
      </div>
    </div>
  )
}

export default ImgDisp;
