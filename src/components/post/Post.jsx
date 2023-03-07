import "./post.css"
import pic from "/Users/inishbashyal/Desktop/REACT/blog/src/assets/images/IMG_4300.jpeg"
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <Link className="link" to="/post">
    <div className="post">
      <img className="postImg"
      src={pic}
      alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Travel</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet       Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet

      </p>
    </div>
    </Link>
  )
}
