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
        <a href='#' className='header_carousel_button'>
          order now
        </a>
      ),
    },
    {
      id: 2,
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header_carousel_button'>
          order now
        </a>
      ),
    },
    {
      id: 3,
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header_carousel_button'>
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
        <div className='header_carousel_container'>
          <img src={Hero} alt='hero-image' className='header_image' />
          {carouselContent.map((slide) => (
            <div
              key={slide.id}
              className={`${
                slide.id === activeIndex
                  ? 'header_carousel header_carousel_active'
                  : 'header_carousel_inactive'
              }`}
            >
              <div className='header_carousel_content'>
                <h2 className='header_carousel_title'>{slide.title}</h2>
                <h2 className='header_carousel_description'>
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
