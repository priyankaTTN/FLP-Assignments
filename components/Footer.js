import React, { memo } from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/blog'>Blog</Link></li>
      </ul>
      <p>© All rights reserved</p>
    </footer>
  );
};

export default memo(Footer);
