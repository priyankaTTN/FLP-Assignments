"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormField from './FormField';

export default function EditTopicForm({ id, title, content, author, publishedDate }) {
  const [formData, setFormData] = useState({
    newTitle: title,
    newContent: content,
    newAuthor: author,
    newPublishedDate: publishedDate,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
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
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <FormField
          name="newTitle"
          value={formData.newTitle}
          onChange={handleChange}
          type="text"
          placeholder="Blog Title"
        />
        <FormField
          name="newContent"
          value={formData.newContent}
          onChange={handleChange}
          type="textarea"
          placeholder="Blog Content"
        />
        <FormField
          name="newAuthor"
          value={formData.newAuthor}
          onChange={handleChange}
          type="text"
          placeholder="Post Author"
        />
        <FormField
          name="newPublishedDate"
          value={formData.newPublishedDate}
          onChange={handleChange}
          type="date"
          placeholder="Post Published Date"
        />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}
