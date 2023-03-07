import "./single.css"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
export default function Single() {
  return (
    <div className="single">
        <SinglePost />
      <Sidebar/>
    </div>
  )
}
