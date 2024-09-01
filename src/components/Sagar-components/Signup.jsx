import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initAOS from "./assets/aos";

export const Signup = () => {
  useEffect(() => {
    initAOS();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
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
          password: null,
          mobile: null,
        });
      }

      toast.success("Sign up Successful with Google!");
      setTimeout(() => {
        alert("Sign up Successful with Google!");
      }, 500);
      navigate("/");
    } catch (error) {
      console.error("Failed to decode token:", error);
      toast.error("Failed to sign up with Google. Please try again.");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google sign up failed:", error);
    toast.error("Failed to sign up with Google. Please try again.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !mobile) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const { data } = await axios.get(URL);
      const existingUsers = data || {};
      const emailExists = Object.values(existingUsers).some(
        (user) => user.email === email
      );

      if (emailExists) {
        toast.warn("Email already exists. Please login.");
        alert("Email already exists. Please login.");
        navigate("/login");
      } else {
        await axios.post(URL, {
          name,
          email,
          password,
          mobile,
        });

        toast.success("Sign up Successful! Redirecting to Login.");
        setTimeout(() => {
          alert("Sign up Successful! Now you can Login.");
        }, 1000);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg min-vh-100">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="p-4 login"
      >
        <h1 className="px-4 text-center text-md-start">Signup</h1>
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

          <button type="submit" className="btn btn-warning mt-3 w-100">
            Sign up
          </button>
          <span className="d-block text-center p-2">or</span>
          <div className="my-0 mb-0 d-flex justify-content-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              text="signup_with"
              useOneTap
            />
          </div>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item px-4 py-0 text-center" to="/login">
          Have an account already? <b className="text-warning">Log in</b>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};
