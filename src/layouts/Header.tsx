import React from 'react';
const Hero = require('../assets/images/hero2.png');

const Header = () => {
  return (
    <div className='header'>
      <div className='header_hero-img'>
        <img src={Hero} alt='hero' />
      </div>
    </div>
  );
};

export default Header;
