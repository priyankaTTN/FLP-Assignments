import React from 'react'
import Link from 'next/link'

 const Header = () => {
  return (
    <nav className='header'>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/blog'}>Blog</Link></li>
        <li><Link href={'/product'}>Product</Link></li>
        </ul>

    </nav>
  )
}

export default Header
