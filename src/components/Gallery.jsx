import React from 'react';
import Carousel from './Carousel';

const Gallery = () => {

  return (

    <div className='flex flex-col items-center mt-5'>
        <h1 className='font-bold text-2xl'>Gallery</h1>

        <Carousel />
    </div>


  )
}

export default Gallery;