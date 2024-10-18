"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import "./Home.css"; // Ana sayfa için CSS

const supabase = createClient(); // Supabase istemcisini oluştur

export default function HomePage() {
  const [posts, setPosts] = useState([]); // Postları tutan state
  const router = useRouter();

  useEffect(() => {
    fetchPosts(); // Sayfa yüklendiğinde postları getir
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*"); // Tüm postları getir

    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data); // Gelen verileri state'e at
    }
  };

  const handlePostClick = (id) => {
    router.push(`/posts/${id}`); // Posta tıklandığında post detay sayfasına yönlendir
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Medium</div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button className="search-btn">🔍</button>
        </div>
      </header>
      <div className="top-nav">
        <button>For you</button>
        <button>Following</button>
        <button>Gaming</button>
        <button>Docker</button>
        <button>AWS</button>
      </div>
      <div className="content">
        <aside className="sidebar">+ Write</aside>
        <main className="posts">
          {posts.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => handlePostClick(post.id)}
            >
              <h2>{post.title}</h2>
              <p>{post.content.slice(0, 100)}...</p>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
              <div className="post-stats">
                <span>{post.likes || 0} Likes</span>
                <span>{post.comments || 0} Comments</span>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}