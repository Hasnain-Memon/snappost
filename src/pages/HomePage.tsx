import databaseService from "../appwrite/database"
import { useState, useEffect } from "react"
import PostCard from "../components/PostCard";

export default function HomePage() {

  const [posts, setPosts]: any = useState([]);

  useEffect( () => {
    databaseService.getAllPost()
    .then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-extrabold ">login to read posts</h1>
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex flex-wrap">
      {posts.map((post: any) => (
        <div className="w-full">
          <PostCard {...post}/>
        </div>
      ))}
    </div>
  )

}
