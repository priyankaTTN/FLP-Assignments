// components/AddBlogForm.js
import { useState } from "react";

const AddBlogForm = ({ router }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/blog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, content, publishedDate, author }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container blogForm">
      <h2>Add Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Blog Title"
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Blog Content"
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="Post author"
        />
        <input
          onChange={(e) => setPublishedDate(e.target.value)}
          value={publishedDate}
          type="date"
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlogForm;
