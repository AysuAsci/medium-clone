"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // İstemciyi içe aktar
import { useRouter } from "next/navigation"; // Router'ı import et
import "./[id].css"; // CSS dosyasını import et

const supabase = createClient(); // İstemciyi oluştur

export default function Post() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

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
        <span>Likes: {post.likes || 0} • Comments: {post.comments || 0}</span>
      </div>
    </div>
  );
}