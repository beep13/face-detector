import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
      <div className='w-50 center'>
        <p className='f3'>
          {'This Magic Brain will detect faces in your pictures. Give it a try.'}
        </p>
        <div>
          <div className='pa4 br3 shadow-5 inputBox'>
            <input
              className='f4 pa2 w-90 ma2' type='text'
              onChange={onInputChange}/>
            <button
              className=' grow f4 link ph3 pv2 dib white bg-light-purple'
              onClick={onButtonSubmit}
            >Detect></button>
          </div>
        </div>
      </div>
  )
}

export default ImageLinkForm;
