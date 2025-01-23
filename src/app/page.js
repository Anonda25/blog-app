import Postcard from "./postcard/page";


export default async function Home() {

  

  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  const posts =await data.json()
  // console.log(post);
  return (
   <div>
      <div className="grid grid-cols-3 gap-4 w-full max-w-7xl mx-auto mt-28">

        {
          posts.map(post => <Postcard key={post.id} post={post}></Postcard>)
        }
      </div>
   </div>
  );
}
