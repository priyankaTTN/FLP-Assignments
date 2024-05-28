'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Page = ({ params }) => {
    const [blogDetail, setBlogDetail] = useState({});
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/blog/${id}`);
                const result = await res.json();
                console.log(result, 'result')
                setBlogDetail(result.blog);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call fetchData only once when the component mounts
        if (!blogDetail._id) {
            fetchData();
        }
    }, []); // <-- empty dependency array means this effect runs only once when the component mounts

    const handleDelete = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/blog`, {method: 'DELETE'},  {
            cache: "no-store",
          });
      
          if (!res.ok) {
            throw new Error("Failed to delete blog");
          }
      
          return res.json();
        } catch (error) {
          console.log(error);
        }
    
    
      }

    return (
        <div className='blogData'>
            <Link href= {'/blog'}>Back</Link>
            <span onClick= {handleDelete}>Delete</span>
            <div className='content'>
                <h1>{blogDetail.title}</h1>
                <p>{blogDetail.content}</p>
                <span>{blogDetail.date_published}</span>
            </div>
            <div className='authorDetail'>
                {blogDetail.author}
            </div>
        </div>
    );
}

export default Page;
