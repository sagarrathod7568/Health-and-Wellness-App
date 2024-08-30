import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import CryptoJS from "crypto-js"; // Use crypto-js for hashing

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState(""); // New state for mobile number
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const URL =
    "https://health-is-wealth-4239a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const userObject = jwtDecode(credentialResponse.credential);

      const { data } = await axios.get(URL);
      const existingUsers = data || {};
      const emailExists = Object.values(existingUsers).some(
        (user) => user.email === userObject.email
      );

      if (!emailExists) {
        await axios.post(URL, {
          name: userObject.name,
          email: userObject.email,
          password: null, // No password for Google signup
          mobile: null, // No mobile number for Google signup
        });
      }

      navigate("/");
    } catch (error) {
      console.error("Failed to decode token:", error);
      alert("Failed to sign up with Google. Please try again.");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google sign up failed:", error);
    alert("Failed to sign up with Google. Please try again.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !mobile) {
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
        // Hashing password
        console.log("Form submitted:", {
          name,
          email,
          password,
          mobile, // Include mobile number
        });

        await axios.post(URL, {
          name,
          email,
          password,
          mobile, // Include mobile number
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
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="123-456-7890"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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
          <span className="mx-3 text-center">or</span>
          <div className="my-4 mb-0">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              text="signup_with"
              useOneTap
            />
          </div>
        </form>
        <div className="dropdown-divider"></div>

        <Link className="dropdown-item px-4 py-0" to="/login">
          Have already Account? <b className="text-warning">Log in</b>
        </Link>
      </div>
    </div>
  );
};