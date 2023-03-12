import React, { useState } from 'react';
import { Testimonial } from '../interface';
const Previous = require('../assets/images/previous.png');
const Next = require('../assets/images/next.png');

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial = [
    {
      title: 'Over 35 years experience designing handmade kitchens',
      description:
        'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
      author: 'Jane, Dundee',
    },
    {
      title: 'Amazing craftsmanship and customer service',
      description:
        'The quality of the workmanship in my new kitchen is outstanding. Ben and his team really know their stuff, and it shows in the finished product. I have received so many compliments on my new kitchen, and I’m always happy to recommend Ben’s Kitchens to anyone looking for a top-quality kitchen.',
      author: 'Michael, Edinburgh',
    },
    {
      title: 'Exceptional customer service',
      description:
        'From my first contact with Ben’s Kitchens, I knew I was in good hands. They were so responsive and attentive to all my questions and concerns. They made the whole process so easy and stress-free, and I’m thrilled with the end result. Thank you so much!',
      author: 'Julia, Stirling',
    },
    {
      title: 'Transformed my home into a beautiful place',
      description:
        'My new kitchen has completely transformed the look and feel of my home. It’s now the heart of the house, and I couldn’t be happier. Ben and his team were so professional and knowledgeable, and they really listened to what I wanted. The end result is beyond my wildest dreams!',
      author: 'David, Aberdeen',
    },
  ];

  const length = testimonials.length - 1;

  return (
    <section className='testimonials'>
      <div className='testimonials_content'>
        <div className='testimonials_content_heading'>
          What Our Customers Say
        </div>
        {testimonials.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex
                ? 'testimonials_content_body testimonials_content_body-active'
                : 'testimonials_content_body-inactive'
            }`}
          >
            <div className='testimonials_content_title'>{slide.title}</div>
            <div className='testimonials_content_description'>
              {slide.description}
            </div>
            <div className='testimonials_content_author'>{slide.author}</div>
          </div>
        ))}

        <img
          className='testimonials_content_previous'
          src={Previous}
          alt='previous'
          onClick={() =>
            setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
          }
        />
        <img
          className='testimonials_content_next'
          src={Next}
          alt='next'
          onClick={() =>
            setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
          }
        />
        <a href='#' className='testimonials_content_button'>
          frequently asked questions
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
