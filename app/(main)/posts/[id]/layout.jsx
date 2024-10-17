"use client"; // Burası önemli

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // Supabase istemcisini import et
import { useRouter } from "next/navigation"; // next/navigation kullan
import "./[id].css"; // CSS dosyasını import et

export default function PostLayout({ children }) {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router; // Burada params içinden id alıyoruz
  const supabase = createClient(); // Supabase istemcisini oluştur

  useEffect(() => {
    if (id) fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts") // Burada "articles" yerine "posts" kullanmalısınız.
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
        <span>Likes: {post.likes} • Comments: {post.comments}</span>
      </div>
      {children}
    </div>
  );
}