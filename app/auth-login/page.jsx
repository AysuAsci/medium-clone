"use client";

import { useState } from 'react';
import { login, signup } from './action';
import { useRouter } from 'next/navigation'; // Yönlendirme için useRouter'i ekle
import './auth-login.css'; 

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Kayıt olma durumunu takip et
  const router = useRouter(); // useRouter'i çağır

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

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp); // Kayıt olma formunu aç/kapat
  };

  const handleEmailSignIn = () => {
    router.push('/email-signin'); // Email ile giriş sayfasına yönlendir
  };

  return (
    <div className="login-container">
      {isSignUp ? (
        <>
          <h1>Join Medium</h1>
          <button className="provider-button">Sign up with Google</button>
          <button className="provider-button">Sign up with Facebook</button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />

            <button type="submit" name="signup" className="provider-button">Sign up</button>
            <p>
              Already have an account? <button type="button" onClick={toggleSignUp} className="create-account-button">Sign in</button>
            </p>
          </form>
        </>
      ) : (
        <>
          <h1>Welcome back.</h1>
          <button className="provider-button">Sign in with Google</button>
          <button className="provider-button">Sign in with Facebook</button>
          <button className="provider-button">Sign in with Apple</button>
          <button className="provider-button" onClick={handleEmailSignIn}>Sign in with Email</button> {/* Yönlendirme butonu */}
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" required className="input-field" />

              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" required className="input-field" />

              <button type="submit" name="login" className="provider-button">Log in</button>
              <p className="toggle-account">
                No account? <button type="button" onClick={toggleSignUp} className="create-account-button">Create one</button>
              </p>
            </form>
          </div>
        </>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Hata mesajını göster */}
    </div>
  );
}