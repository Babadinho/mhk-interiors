import React, { useEffect, useState } from 'react';
const Hero = require('../assets/images/hero2.png');
import SliderDots from '../components/SliderDots';
import { Carousel } from '../interface';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const carouselContent: Carousel = [
    {
      id: 1,
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header-carousel__button'>
          order now
        </a>
      ),
    },
    {
      id: 2,
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header-carousel__button'>
          order now
        </a>
      ),
    },
    {
      id: 3,
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header-carousel__button'>
          order now
        </a>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);

      if (activeIndex === carouselContent.length) {
        setActiveIndex(1);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <section>
      <div className='header'>
        <div className='header-carousel__container'>
          <img src={Hero} alt='hero-image' className='header__image' />
          {carouselContent.map((slide) => (
            <div
              key={slide.id}
              className={`${
                slide.id === activeIndex
                  ? 'header-carousel header-carousel--active'
                  : 'header-carousel--inactive'
              }`}
            >
              <div className='header-carousel__content'>
                <h2 className='header-carousel__title'>{slide.title}</h2>
                <h2 className='header-carousel__description'>
                  {slide.description}
                </h2>
                {slide.button}
              </div>
            </div>
          ))}
        </div>
        <SliderDots
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          carouselContent={carouselContent}
        />
      </div>
    </section>
  );
};

export default Header;
