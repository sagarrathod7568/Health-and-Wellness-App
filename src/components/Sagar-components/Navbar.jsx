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
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed">
      <div className="container">
        <Link to="/" className="navbar-brand py-2">
          <img src={Logo} alt="Logo" width="200px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/articles" className="nav-link px-4">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-4">
                About
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link to="/profile" className="nav-link px-4 ">
                  Profile
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text text-warning me-3 ps-4">
                  Hey, {user.username}
                </span>
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-success me-3 px-4 mx-4">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-warning px-4">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
