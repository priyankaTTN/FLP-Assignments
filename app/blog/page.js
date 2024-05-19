'use client'

import React, { useState, useEffect } from 'react'
import Card from '@/components/card';

const page = () => {
  const [blog, setBlogList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyapi.online/api/blogposts');
        const result = await res.json();
        setBlogList(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData only once when the component mounts
    if (blog.length === 0) {
      fetchData();
    }
  }, [blog]);
  
  return (
    <div className='blogList'>
      <ul>
         {(blog || []).map((item, idx) => {
            return ( <li key= {`${idx}`}>
               <Card {...item} />
             </li>
            )
         } )}
      </ul>
    </div>
  )

}

export default page;