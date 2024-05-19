'use client '

import React from 'react';
import { useRouter } from 'next/navigation'



const card = (props) => {
  const router = useRouter()

  // Function to handle click event and navigate to detail page
  const handleClick = () => {
    // Navigate to the detail page using React Router
    router.push(`/blog/${props.id}`); // Replace '/detail' with your actual detail page route
  };

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className='cards' >
        <div className='content'>
           <h3>{props.title}</h3>
           <p>{truncateText(props.content, 20)} <span  onClick={handleClick}> read more</span></p>
           <span>{props.date_published}</span>
        </div>
        <div className='authorDetail'>
            {props.author}
        </div>
    </div>
  );
};

export default card;
