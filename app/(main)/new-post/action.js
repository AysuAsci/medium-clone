"use server";
import { supabase } from '../../../utils/supabase/client';
import { redirect } from 'next/navigation';

export async function SavePost(formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  // Kullanıcı bilgilerini Supabase üzerinden alıyoruz
  const { data: { user } } = await supabase.auth.getUser();

  // Eğer kullanıcı oturum açmamışsa login sayfasına yönlendir
  if (!user) {
    redirect("/login");
    return; // Yönlendirme sonrası fonksiyonu durdur
  }

  // Postu Supabase'deki 'posts' tablosuna kaydediyoruz
  const { data, error } = await supabase
    .from('posts')
    .insert({ 
      title, 
      content, 
      user_id: user.id // Postu o anki kullanıcıya bağla
    })
    .select()
    .single();

  // Eğer bir hata oluştuysa hatayı göster ve işlemi durdur
  if (error) {
    console.error("Error:", error); // Hata mesajını güncelledik
    return;
  }

  // Başarılı olursa, postun detay sayfasına yönlendiriyoruz
  redirect(`/posts/${data.id}`);
}