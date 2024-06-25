// components/Header.js
import React, { memo } from 'react';
import NavLink from './NavLink';


const Header = () => {
  return (
    <nav className='header'>
      <ul>
        <li><NavLink href='/'>Home</NavLink></li>
        <li><NavLink href='/about'>About</NavLink></li>
        <li><NavLink href='/blog'>Blog</NavLink></li>
        <li><NavLink href='/product'>Product</NavLink></li>
      </ul>
    </nav>
  );
};

export default memo(Header);
