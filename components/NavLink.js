'use client'

// components/NavLink.js
import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
