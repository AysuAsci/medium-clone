"use client";
import { useState } from 'react';
import { createClient } from '../../../utils/supabase/client'; // İstemciyi içe aktar

const supabase = createClient(); // İstemciyi oluştur


const NewPostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handlePublish = () => {
      // Burada yazıyı yayınlama işlemi yapılacak.
      console.log("Title:", title);
      console.log("Body:", body);
  };

  return (
      <div className="new-post-container">
          <input 
              type="text" 
              className="new-post-title" 
              placeholder="Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
          />
          <textarea 
              className="new-post-body" 
              placeholder="Tell your story..." 
              value={body} 
              onChange={(e) => setBody(e.target.value)} 
          />
          <button className="publish-button" onClick={handlePublish}>
              Publish
          </button>
      </div>
  );
};

export default NewPostPage;