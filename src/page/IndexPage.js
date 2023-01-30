import { useEffect, useState } from "react";
import Post from "../layout/Post";

export default function IndexPage(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => {
        response.json().then(post => {
          setPosts(post);
        })
      })
  },[]);
  console.log(posts);
  return(
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} key={post._id} />
      ))}
    </>
  )
}