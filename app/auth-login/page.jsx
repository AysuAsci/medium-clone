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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        
        <button type="submit" name="login">Log in</button>
        <button type="submit" name="signup">Sign up</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Hata mesajını göster */}
    </div>
  );
}