import React from 'react';

const SliderDots = ({ activeIndex, onclick, carouselContent }: any) => {
  return (
    <div className='header_carousel_dots'>
      {carouselContent.map((slide: any, index: React.Key) => (
        <span
          key={index}
          className={`${
            activeIndex === index
              ? 'header_carousel_dot header_carousel_active-dot'
              : 'header_carousel_dot'
          }`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
};

export default SliderDots;
