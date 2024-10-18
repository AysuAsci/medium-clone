"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; 
import { useParams } from "next/navigation"; 
import "./post.css"; // CSS dosyasını import et

const supabase = createClient(); 

export default function PostLayout({ children }) {
  const [post, setPost] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    if (id) fetchPost(); 
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
    } else {
      setPost(data);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="post-info">
        <span>{post.likes || 0} Likes</span>
        <span>{post.comments || 0} Comments</span>
      </div>
      {children}
    </div>
  );
}