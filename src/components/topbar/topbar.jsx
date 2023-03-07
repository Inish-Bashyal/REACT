import { Link } from "react-router-dom";
import "./topbar.css"
import pic from "/Users/inishbashyal/Desktop/REACT/blog/src/assets/images/IMG_3872.jpeg"

export default function topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook" ></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>    
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">CONTACT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>

            </li>
            <li className="topListItem">
              {user && <Link className="link" to="/login">LOGOUT</Link>
}
            </li>

        </ul>
        </div>
      <div className="topRight">
        { user ?(
          <Link to="/settings">
          <img className="topImg"
          src={pic}
          alt=""
          />
          </Link>
          ):(
            <ul className="topList">
              <li className="topListItem">
          <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/register">REGISTER</Link>
          </li>
          </ul>
          )
        }
        </div>
    </div>
  )
}
