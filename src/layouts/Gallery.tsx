import React from 'react';
const Image1 = require('../assets/images/image1.png');
const Image2 = require('../assets/images/image2.png');
const Image3 = require('../assets/images/image3.png');
const Image4 = require('../assets/images/image4.png');

const Gallery = () => {
  return (
    <section className='gallery'>
      <h2 className='gallery__heading'>customer gallery</h2>
      <div className='gallery__images'>
        <div className='gallery__image'>
          <img src={Image1} alt='image' />
        </div>
        <div className='gallery__image'>
          <img src={Image2} alt='image' />
        </div>
        <div className='gallery__image'>
          <img src={Image3} alt='image' />
        </div>
        <div className='gallery__image'>
          {' '}
          <img src={Image4} alt='image' />
        </div>
      </div>
      <a href='#' className='gallery__button'>
        view more
      </a>
    </section>
  );
};

export default Gallery;
