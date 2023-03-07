import React from 'react';
const Image = require('../assets/images/about.png');

const About = () => {
  return (
    <section>
      <div className='about'>
        <div className='about_image'>
          <img src={Image} alt='about' />
        </div>
        <div className='about_content'>
          <h3 className='about_content_heading'>
            Quality Craftmanship from build to delivery
          </h3>
          <h3 className='about_content_subheading'>
            Discover the beauty of a handmade kitchen
          </h3>
          <p className='about_content_description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <a href='#' className='about_content_button'>
            about us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
