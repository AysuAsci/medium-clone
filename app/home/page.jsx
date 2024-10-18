'use client';
import './home.css'; // Stil dosyası

export default function HomePage() {
  const handleGetStarted = () => {
    window.location.href = '/auth-login';
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">Medium</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Our story</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Write</a></li>
            <li><a href="/auth-login">Sign in</a></li>
            <li><button className="get-started-button" onClick={handleGetStarted}>Get started</button></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <h1>Human stories & ideas</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <button className="start-reading-button" onClick={handleGetStarted}>Start reading</button>
      </main>

      
      <img src="/images/4_SdjkdS98aKH76I8eD0_qjw.webp" alt="Human Stories and Ideas" className="right-image" />

      <footer className="footer">
        <ul>
          <li><a href="#">Help</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Teams</a></li>
        </ul>
      </footer>
    </div>
  );
}