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
    <div className='header-nav'>
      <div className='header-nav__left'>
        <div className='header-nav__socials'>
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
        <div className='header-nav__menuLeft'>
          <a href='#'>shop</a>
          <a href='#'>plan my kitchen</a>
        </div>
      </div>

      <a className='header-nav__logo' href='/'>
        <img src={Logo} alt='logo' />
      </a>

      <div className='header-nav__right'>
        <div className='header-nav__menuRight'>
          <a href='#'>about us</a>
          <a href='#'>gallery</a>
        </div>

        <div className='header-nav__button'>
          <a href='#'>
            <span>my order</span>
            <FaShoppingCart />
          </a>
        </div>
      </div>

      <div
        className='header-nav__toggleButton'
        onClick={() => setToggelMobileNav(!toggelMobileNav)}
      >
        {toggelMobileNav ? <AiOutlineClose /> : <FaBars />}
      </div>

      <div
        className={`header-nav__dropdown ${
          toggelMobileNav && 'header-nav__dropdown--active'
        }`}
      >
        <a href='#'>shop</a>
        <a href='#'>plan my kitchen</a>
        <a href='#'>about us</a>
        <a href='#'>gallery</a>
        <a href='#'>
          <div className='header-nav__dropdownButton'>
            <span>my order</span>
            <FaShoppingCart />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
