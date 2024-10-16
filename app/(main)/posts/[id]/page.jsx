import {createClient} from "@/utils/supabse/server"
import { notFound } from "next/navigation";

export default async function PostDetailPage ({ params }) {
  const supabse = crreateClient();
  const { data,error } = await supabase.from("posts")
   .select()
   .eq("id" , params.id)
   .single();

   if(!data) return notFound();
   return(
    <div>
      <h1>Yazı Başlığı</h1>
    </div>
   )
}