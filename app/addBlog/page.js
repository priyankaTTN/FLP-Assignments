'use client'

import AddBlogForm from '@/components/AddBlogForm';
import { useRouter } from 'next/navigation';

const AddBlog = () => {
  const router = useRouter();

  return (
    <div>
      <AddBlogForm router={router} />
    </div>
  );
};

export default AddBlog;
