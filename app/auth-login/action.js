'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function login(formData) {
  const supabase = createClient();

  // Email ve şifreyi formdan alıyoruz
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // Giriş yapma denemesi
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    return; // Hata varsa kullanıcıyı giriş yaptırma
  }

  revalidatePath('/', 'layout');
  redirect('/account');
}

export async function signup(formData) {
  const supabase = createClient();

  // Form verilerini alıyoruz
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    full_name: formData.get('full_name'), // Ad Soyad
    birthdate: formData.get('birthdate'), // Doğum tarihi
  };

  // Kayıt işlemi
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (error) {
    console.log(error);
    return;
  }

  await supabase.from('profiles').insert({
    email: data.email,
    full_name: data.full_name,
    birthdate: data.birthdate,
    role: 'user', // Varsayılan rol olarak 'user' ekleniyor
  });

  revalidatePath('/', 'layout'); // Anasayfayı yeniden doğrula
  redirect('/'); // Başarıyla kayıt olduysa anasayfaya yönlendir
}

export async function signOut() {
  const supabase = createClient();

  // Çıkış yapma işlemi
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    return; // Hata varsa çıkış yaptırma
  }


  revalidatePath("/", "layout");
  redirect("/");
}