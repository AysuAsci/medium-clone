"use client"; // Burası önemli 
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import "./[id].css"; // CSS dosyasını import et

export default function PostLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar açılıp kapanması için state
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // Sayfa yüklendiğinde herhangi bir işlem yapmak gerekirse burada yazılabilir
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Sidebar açılma/kapanma durumunu değiştir
  };

  return (
    <div className="layout">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/">For you</a></li>
          <li><a href="/">Following</a></li>
          <li><a href="/">Gaming</a></li>
          <li><a href="/">Docker</a></li>
          <li><a href="/">AWS</a></li>
        </ul>
        <div className="profile-menu">
          <span onClick={toggleSidebar}>Profile ▼</span>
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/library">Library</a></li>
            <li><a href="/stories">Stories</a></li>
            <li><a href="/stats">Stats</a></li>
            <li><a href="/logout">Sign out</a></li>
          </ul>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="content">
        {children} {/* Sayfa içeriği */}
      </div>
    </div>
  );
}