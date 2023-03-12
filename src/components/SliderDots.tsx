import React from 'react';

const SliderDots = ({ activeIndex, setActiveIndex, carouselContent }: any) => {
  return (
    <div className='header_carousel_dots'>
      {carouselContent.map((slide: any) => (
        <span
          key={slide.id}
          className={`${
            activeIndex === slide.id
              ? 'header_carousel_dot header_carousel_dot-active'
              : 'header_carousel_dot'
          }`}
          onClick={() => {
            setActiveIndex(slide.id);
          }}
        ></span>
      ))}
    </div>
  );
};

export default SliderDots;
