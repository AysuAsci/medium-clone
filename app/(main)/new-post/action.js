"use server";
import { supabase } from '../../../utils/supabase/client';
import { redirect } from 'next/navigation';

export async function SavePost(formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  // Kullanıcı bilgilerini aldık
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
  
    redirect("/login");
  }

  // Post verilerini kaydet
  const { data, error } = await supabase
    .from('posts')
    .insert({ title, content, user_id: user.id })
    .select()
    .single();

  if (error) {
    console.log("Error:", error); // error mesajını düzelt
    return;
  }

  // Başarılı olursa, postun detay sayfasına yönlendir
  redirect(`/posts/${data.id}`);
}