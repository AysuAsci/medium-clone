import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";
import "./[id].css"; // CSS dosyasını import et

export default function Post() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts") // Burada "articles" yerine "posts" kullanıyoruz
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
      <p>{post.content}</p> {/* description yerine content kullanıldı */}
      <div className="post-info">
        <span>Likes: {post.likes} • Comments: {post.comments}</span>
      </div>
    </div>
  );
}