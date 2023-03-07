import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
  FaBars,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
const Logo = require('../assets/images/logo.png');

const Navbar = () => {
  const [toggelMobileNav, setToggelMobileNav] = useState(false);
  return (
    <div className='header_nav'>
      <div className='header_nav_left'>
        <div className='header_nav_socials'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
        <div className='header_nav_menu_left'>
          <a href='#'>shop</a>
          <a href='#'>plan my kitchen</a>
        </div>
      </div>

      <a className='header_nav_logo' href='/'>
        <img src={Logo} alt='logo' />
      </a>

      <div className='header_nav_right'>
        <div className='header_nav_menu_right'>
          <a href='#'>about us</a>
          <a href='#'>gallery</a>
        </div>

        <div className='header_nav_button'>
          <a href='#'>
            <span>my order</span>
            <FaShoppingCart />
          </a>
        </div>
      </div>

      <div
        className='header_nav_toggle_button'
        onClick={() => setToggelMobileNav(!toggelMobileNav)}
      >
        {toggelMobileNav ? <AiOutlineClose /> : <FaBars />}
      </div>

      <div
        className={`header_nav_dropdown_menu ${
          toggelMobileNav && 'header_nav_dropdown_menu-active'
        }`}
      >
        <a href='#'>shop</a>
        <a href='#'>plan my kitchen</a>
        <a href='#'>about us</a>
        <a href='#'>gallery</a>
        <a href='#'>
          <div className='header_nav_dropdown_menu_button'>
            <span>my order</span>
            <FaShoppingCart />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
