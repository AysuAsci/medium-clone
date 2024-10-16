'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
   console.log(error);
   return; // yani kullanıcıyı login etmesin
  }
  //kayıt ol ve giriş yap sayfası farklı olsun
  //role ekliycez admin paneli yapıcaz 
  //ad soyad dogum tarihi bilgileri hepsi olsun
  //formstate kullanıcaz o yüzden ayrı error sayfası yapmıycaz 

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
   console.log(error);
   return;
  }

  revalidatePath('/', 'layout')// anasayfayı kaplayan tüm layout sayfasını yenile
  redirect('/')
}

export async function signOut() {
  const supabase = createClient(); // "supabse" yerine "supabase" olacak
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    return; // Hata durumunda bir şey yapma
  }

  revalidatePath("/", "layout");
  redirect("/");
}