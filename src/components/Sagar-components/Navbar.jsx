import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets/webLogo2.png";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged Out !");
    logout()
      .then(() => {
        navigate("/"); // Redirect to home page after logout
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <nav>
      <div className="navbar-list container">
        <div className="space">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" width={"200px"} />
          </Link>
        </div>
        <div className="space">
          {user ? (
            <>
              <Link to="/articles">Articles</Link>
              <Link to="/about">About</Link>
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <>
              <Link to="/articles">Articles</Link>
              <Link to="/about">About</Link>
            </>
          )}
          <div className="auth space">
            {user ? (
              <>
                <span className="text-warning">Hey, {user.username}</span>
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
