import './new-post.css';
import { SavePost } from "./action";

export default function NewPost() {
  return (
    <div className="new-post-container">
      <h2 className="new-post-title">Yeni Yazı Oluştur</h2>
      <form action={SavePost} method="post">
        <input 
          type="text" 
          name="title" 
          placeholder="Yazı Başlığı" 
          className="new-post-input"
          required
        />
        <textarea 
          name="content" 
          placeholder="Yazı İçeriği" 
          rows="10"
          className="new-post-textarea"
          required
        />
        <button type="submit" className="new-post-button">
          Yazıyı Paylaş
        </button>
      </form>
    </div>
  );
}