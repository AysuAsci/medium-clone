'use client';

import { useState } from 'react';
import { login, signup } from './action';
import './aut-login.css'; 


export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const action = event.nativeEvent.submitter.name; // Hangi butona basıldığını kontrol et

    let response;

    if (action === 'login') {
      response = await login(formData);
    } else {
      response = await signup(formData);
    }

    if (response && response.error) {
      setErrorMessage(response.error); // Hata mesajını ayarla
    } else {
      setErrorMessage(''); // Hata yoksa mesajı temizle
    }
  };

  return (
    <div className="login-container">
    <h1>Welcome back.</h1>
    <button className="provider-button">Sign in with Google</button>
    <button className="provider-button">Sign in with Facebook</button>
    <button className="provider-button">Sign in with Apple</button>
    <button className="provider-button">Sign in with X</button>
    
    <form onSubmit={handleSubmit}>
       <label htmlFor="email">Email:</label>
       <input id="email" name="email" type="email" required />
        
       <label htmlFor="password">Password:</label>
       <input id="password" name="password" type="password" required />
        
        <button type="submit" name="login">Log in</button>
        <button type="submit" name="signup">Sign up</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Hata mesajını göster */}

      <p>Forgot email or trouble signing in? Get help.</p>
      <p>Click “Sign in” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
    </div>
  );
}