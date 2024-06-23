import logoImage from "../assets/logo.png"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import databaseService from "../appwrite/database"
import { useAppSelector } from "../store/hooks"
import Button from "../components/Button"
import parse from "html-react-parser"


export default function PostPage() {

  const navigate = useNavigate();
  const [post, setPost]: any = useState(null);
  const {slug} = useParams();

  const userData = useAppSelector(state => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if(slug) {
      databaseService.getPost(slug)
      .then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigate('/');
          }
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])


  const deletepost  = async() => {
    databaseService.deletePost(post.$id)
    .then((status: any) => {
      if (status) {
        databaseService.deleteFile(post.featuredIamge);
        navigate('/');
      }
    })
  }

  return post ? (
      <div className="w-full flex items-center justify-center">
        <div className="w-[70%] bg-gray-500/25 my-8 h-full flex flex-col justify-around gap-4">
          <div className="flex justify-between">
            <div className="pt-4 pl-4 h-full">
              <img src={databaseService.getFilepreview(post.featuredIamge)} alt={post.title}/>
            </div>
            <div className="pt-4 pr-4 space-x-5">
              {isAuthor && (
                <>
                  <Link to={`/edit-post/:${post.$id}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button onClick={deletepost}>Delete</Button>
                </>
              )}
            </div>
          </div>
          <div id="text-info" className="w-full flex flex-col gap-4 px-4">
            <div id="title">
              <h2 className="text-3xl font-bold">{post.title}</h2>
            </div>
            <div id="content" className="mb-6">
              <p>{parse(post.content)}</p>
            </div>
          </div>
        </div>
      </div>
  ) : null;
}
