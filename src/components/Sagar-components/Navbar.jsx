import { Link } from "react-router-dom";
import Logo from "./assets/webLogo2.png";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-list container">
          <div className="space">
            <Link to="/">
              <img className="logo" src={Logo} alt="" width={"200px"} />
            </Link>
          </div>
          <div className=" space">
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <div className=" auth space">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
