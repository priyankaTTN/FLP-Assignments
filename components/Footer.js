import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer'>
        <ul>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/blog'}>Blog</Link></li>  
        </ul>
        <a>copy right, All right served</a>
    </footer>
  )
}
 export default Footer