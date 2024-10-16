import { SavePost } from "./action";

export default function NewPost () {
  return(
    <div>
      <form action={SavePost}>
        <input type="text" name="title" placeholder="Yazı Başlığı"/>
        <br />
        <textarea name="content" id="" placeholder="Yazı İçeriği"></textarea>
        < br />
        <button>Yazıyı Paylaş</button>
      </form>
    </div>
  )
  // yazılar sayfasını nerede acıcagımızı biz seçicez anasayfada da olabilir yada sayfalar diye ayrı bir sayfamızda olabilir.
  

}