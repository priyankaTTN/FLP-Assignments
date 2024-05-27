"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, content, author, publishedDate }) {
  const [newTitle, setTitle] = useState(title);
  const [newContent, setContent] = useState(content);
  const [newAuthor, setAuthor] = useState(author);
  const [newPublishedDate, setPublishedDate] = useState(publishedDate)

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newContent, newPublishedDate, newAuthor }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div className="container blogForm">
    <h2>Edit blog</h2>
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Blog Title"
      />

      <input
        onChange={(e) => setContent(e.target.value)}
        value={newContent}
        type="textarea"
        placeholder="Blog Content"
      />

      <input
        onChange={(e) => setAuthor(e.target.value)}
        value={newAuthor}
        type="text"
        placeholder="Post author"
      />

    <input
        onChange={(e) => setPublishedDate(e.target.value)}
        value={newPublishedDate}
        type="date"
        placeholder="Post Published Date"
      />

      <button
        type="submit"
      >
        Update Blog
      </button>
    </form>
    </div> 
  );
}