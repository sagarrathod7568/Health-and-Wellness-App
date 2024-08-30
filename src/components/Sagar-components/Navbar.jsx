import { Link } from "react-router-dom";
import Logo from "./assets/webLogo2.png";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  let navigate=useNavigate();
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
            <Link to="/articles">Articles</Link>
            <Link to="/profile">Profile</Link>
            <div className="authspace">
              
              <button onClick={()=>navigate("/login")}>Login</button>
              <button onClick={()=>navigate("/signup")}>SignUp</button>
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
