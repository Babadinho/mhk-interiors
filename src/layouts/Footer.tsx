import React from 'react';
const FooterImage = require('../assets/images/footer.png');
const Facebook = require('../assets/images/facebook.png');
const Twitter = require('../assets/images/twitter.png');
const Instagram = require('../assets/images/instagram.png');
const Logo = require('../assets/images/logo.png');

const Footer = () => {
  return (
    <section className='footer'>
      <img src={FooterImage} alt='footer_image' className='footer_image' />
      <div className='footer_heading'>
        <span className='footer_heading_border'></span>
        <a className='footer_heading_logo' href='/'>
          <img src={Logo} alt='logo' />
        </a>
        <span className='footer_heading_border'></span>
      </div>
      <div className='footer_items'>
        <div className='footer_item'>
          <h3 className='footer_item_heading'>about</h3>
          <a href='#'>shop</a>
          <a href='#'>plan my kitchen</a>
          <a href='#'>about us</a>
          <a href='#'>gallery</a>
        </div>
        <div className='footer_item'>
          <h3 className='footer_item_heading'>services</h3>
          <a href='#'>faq</a>
          <a href='#'>contact</a>
          <a href='#'>how to buy</a>
          <a href='#'>downloads</a>
        </div>
        <div className='footer_item'>
          <h3 className='footer_item_heading'>info</h3>
          <a href='#'>delivery</a>
          <a href='#'>terms</a>
          <a href='#'>privacy</a>
        </div>
        <div className='footer_item'>
          <h3 className='footer_item_heading'>follow</h3>
          <div className='footer_item_socials'>
            <a href='#'>
              <img src={Facebook} alt='facebook' />
            </a>
            <a href='#'>
              <img src={Twitter} alt='twitter' />
            </a>
            <a href='#'>
              <img src={Instagram} alt='instagram' />
            </a>
          </div>
        </div>
      </div>
      <div className='footer_copyright'>
        <span>
          Copyright Online MTC Home Kitchens 2023 - All rights reserved. <br />
          Responsive website design, Development by Donald Iloekwe.
        </span>
      </div>
      <span className='footer_bottom-border'></span>
    </section>
  );
};

export default Footer;
