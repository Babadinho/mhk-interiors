import React, { useEffect, useState } from 'react';
const Hero = require('../assets/images/hero2.png');
const Hero2 = require('../assets/images/hero.png');
import SliderDots from '../components/SliderDots';
import { Carousel } from '../interface';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselContent: Carousel = [
    {
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header_carousel_button'>
          order now
        </a>
      ),
      image: Hero,
    },
    {
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header_carousel_button'>
          order now
        </a>
      ),
      image: Hero2,
    },
    {
      title: 'design and order your new kitchen today',
      description: 'bespoke & made to measure handmade kitchen design',
      button: (
        <a href='#' className='header_carousel_button'>
          order now
        </a>
      ),
      image: Hero,
    },
  ];

  const length = carouselContent.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 10000);
  }, [activeIndex]);

  return (
    <section>
      <div className='header'>
        <div className='header_carousel_container'>
          {carouselContent.map((slide, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex
                  ? 'header_carousel header_carousel_active'
                  : 'header_carousel_inactive'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className='header_carousel_image'
              />
              <div className='header_carousel_content'>
                <h2 className='header_carousel_title'>{slide.title}</h2>
                <h3 className='header_carousel_description'>
                  {slide.description}
                </h3>
                {slide.button}
              </div>
            </div>
          ))}
        </div>
        <SliderDots
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          carouselContent={carouselContent}
          onclick={(activeIndex: number) => setActiveIndex(activeIndex)}
        />
      </div>
    </section>
  );
};

export default Header;
