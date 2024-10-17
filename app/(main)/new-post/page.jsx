import { useState } from "react";
import { SavePost } from "./action"; // action.js dosyasından SavePost fonksiyonunu import et
import "./new-post.css"; // CSS dosyasını import et

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    
    // SavePost fonksiyonunu çağır
    await SavePost(formData);
    
    // Formu sıfırla
    setTitle("");
    setContent("");
  };

  return (
    <div className="new-post-form">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}