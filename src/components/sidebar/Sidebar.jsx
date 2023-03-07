import "./sidebar.css"
import pic from "/Users/inishbashyal/Desktop/REACT/blog/src/assets/images/IMG_4263.jpeg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img 
        src={pic}
        alt=""
        />
        <p>
            Hello, My name is Inish Bashyal. I am currently studying IT in Softwarica College of IT and E-Commerce. I live in Kalopul, Kathmandu. But my permanent adress is Butwal, Rupandehi.
        </p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Travel</li>

        </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>    
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i> 
            </div>
        </div>

    </div>
  )
}
