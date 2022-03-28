import logo from "./../../img/whie_logo.png";
import homeIcon from "./../../icons/home.svg";
import boardsIcon from "./../../icons/boards.svg";
import infoIcon from "./../../icons/info.svg";
import userIcon from "./../../icons/user.svg";
import logOutIcon from "./../../icons/logOut.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav_wrapper">
      <img src={logo} alt="Logo" className="logo"/>
      <ul className="nav_items">
        <li className="item"><img src={homeIcon} alt="Home Icon" className="icon"/>Home</li>
        <li className="item"><img src={boardsIcon} alt="Boards Icon" className="icon"/>Boards</li>
        <li className="item"><img src={infoIcon} alt="About Icon" className="icon"/>About</li>
        <li className="item"><img src={userIcon} alt="User Icon" className="icon"/>Profile</li>
        <li className="item"><img src={logOutIcon} alt="Log Out Icon" className="icon"/>Log Out</li>
      </ul>
    </nav>
  );
}