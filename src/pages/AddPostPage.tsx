import Container from "../components/Container";
import PostForm from "../components/Post-Form/PostForm";
// import RTE from "../components/RTE";


export default function AddPostPage() {
  return (
    <div className="py-8 w-full h-screen">
      <Container>
        <PostForm post={''}/>
      </Container>
    </div>
  )
}
