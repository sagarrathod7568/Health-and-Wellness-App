import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/LoginSignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import initAOS from "./assets/aos";

export const Login = () => {
  useEffect(() => {
    initAOS();
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const URL =
    "https://health-is-wealth-4239a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const { data } = await axios.get(URL);
      const existingUsers = data || {};
      const user = Object.values(existingUsers).find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        login({ username: user.name, email: user.email });
        navigate("/");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to log in. Please try again.");
    }
  };

  const handleGoogleLogin = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      const user = {
        name: decoded.name,
        email: decoded.email,
      };

      login({ username: user.name, email: user.email });
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Failed to log in with Google. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="p-4 login "
      >
        <h1 className="px-4 text-center text-md-start">Login</h1>
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="input-group-text"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-warning">
              Log in
            </button>
          </div>
          <div className="text-center p-2">or</div>
          <div className=" d-flex justify-content-center ">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.error("Google login failed");
              }}
              useOneTap
            />
          </div>
        </form>

        <div className="dropdown-divider"></div>
        <a className="dropdown-item px-4" href="/signup">
          New around here? <b className="text-warning">Sign up</b>
        </a>
        <a className="dropdown-item px-4 pb-2" href="/forgotPassword">
          Forgot password?
        </a>
      </div>
    </div>
  );
};
