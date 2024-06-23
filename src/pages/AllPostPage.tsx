import databaseService from '../appwrite/database'
import PostCard from '../components/PostCard'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Mode } from 'react-hook-form';


export default function AllPostPage() {

  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    databaseService.getAllPost([])
    .then((posts) => {
      if (posts) setPosts(posts.documents);
    })
  }, [setPosts, posts])

  

  return (
    <div className='w-full h-screen'>
      <div className='flex flex-wrap'>
        {
          posts.map((post: any) => (
            <div className='p-2' key={post.$id}>
              <PostCard {...post}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
