'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Page = ({ params }) => {
    const [blogDetail, setBlogDetail] = useState({});
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyapi.online/api/blogposts/${id}`);
                const result = await res.json();
                setBlogDetail(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call fetchData only once when the component mounts
        if (!blogDetail._id) {
            fetchData();
        }
    }, []); // <-- empty dependency array means this effect runs only once when the component mounts

    return (
        <div className='blogData'>
            <Link href= {'/blog'}>Back</Link>
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
