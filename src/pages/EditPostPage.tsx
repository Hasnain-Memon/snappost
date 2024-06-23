import databaseService from "../appwrite/database"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PostForm from "../components/Post-Form/PostForm";

export function EditPostPage() {

    const [post, setPost]: any = useState(null);
    const navigate = useNavigate();
    const {slug} = useParams();

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug)
                .then((post) => {
                    if(post) {
                        setPost(post);
                    }
                })
                .catch((error) => {
                    console.log("Error in get post in edit post page:", error);
                    throw error;
                })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className="w-full">
            <PostForm post={post}/>
        </div>
    ) : null

}