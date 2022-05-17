import React from 'react';

const ImageLinkForm = () => {
  return (
      <div className='w-50 center'>
        <p className='f3'>
          {'This Magic Brain will detect faces in your pictures. Give it a try.'}
        </p>
        <div>
          <div className='pa4 br3 shadow-5'>
            <input className='f4 pa2' type='text' />
            <button className=' grow f4 link ph3 pv2 dib white bg-light-purple'>Detect></button>
          </div>
        </div>
      </div>
  )
}

export default ImageLinkForm;
