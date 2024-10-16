"use server"
export async function SavePost(formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const supabse = createClient();

  const { data : {user}} = supabase.auth.getUser();

  if(!user) {
    redirect("/login")
  }

  const { data, error } = await supabase
    .from('posts')
    .insert({ title,content,user_id: user.id})
    .select()
    .single()

    if(error){
      console.log(errror); 
    }
    redirect ('/posts/${data.id}')
}