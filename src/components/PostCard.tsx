import { Link } from "react-router-dom"
import databaseService from "../appwrite/database"

export default function PostCard({
    $id,
    title,
    featuredImage,
    ...props
}) {



  return (
    <div>
        <Link to={`/post/${$id}`}>
            <div className="w-[300px] rounded-md border">
                <img
                    src={databaseService.getFilepreview(featuredImage)}
                    alt={title}
                    className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                    <h1 className="text-lg font-semibold">{title}</h1>
                </div>
            </div>
        </Link>
    </div>
  )
}
