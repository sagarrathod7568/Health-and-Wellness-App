import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const URL =
    "https://health-is-wealth-4239a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const userObject = jwt_decode(credentialResponse.credential);
      console.log(userObject);
      navigate("/");
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google sign up failed:", error);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const { data } = await axios.get(URL);
      const existingUsers = data || {};
      const emailExists = Object.values(existingUsers).some(
        (user) => user.email === email
      );

      if (emailExists) {
        alert("Email already exists. Redirecting to login.");
        navigate("/login");
      } else {
        console.log("Form submitted:", { name, email, password });

        await axios.post(URL, {
          name,
          email,
          password,
        });

        alert("Sign up successful! Redirecting to Login.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center bg">
      <div className="p-4 w-25 login">
        <h1 className="px-4">Signup</h1>
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="User Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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

          <button type="submit" className="btn btn-warning mt-2">
            Sign up
          </button>
          <span className=" mx-3 text-center">or</span>
          <div className="my-4 mb-0"> </div>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            text="signup_with"
            useOneTap
          />
        </form>
        <div className="dropdown-divider"></div>

        <Link className="dropdown-item px-4 py-0" to="/login">
          Have already Account? <b className="text-warning">Log in</b>
        </Link>
      </div>
    </div>
  );
};
