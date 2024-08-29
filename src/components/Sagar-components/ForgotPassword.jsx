import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State for feedback message
  const [showEditButton, setShowEditButton] = useState(false); // State for showing the edit button
  const navigate = useNavigate();

  const URL =
    "https://health-is-wealth-4239a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      const { data } = await axios.get(URL);
      const existingUsers = data || {};
      const user = Object.entries(existingUsers).find(
        ([key, user]) => user.email === email
      );

      if (user) {
        const [userId] = user; // Extract userId from the array
        setMessage("Email verified. You can reset your password now.");
        setShowEditButton(true);
        localStorage.setItem("resetPasswordUserId", userId); // Store userId
      } else {
        setMessage("Email not found. Please check the email address.");
        setShowEditButton(false);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setMessage("Failed to check email. Please try again.");
    }
  };

  const handlePasswordReset = () => {
    navigate("/resetPassword"); // Redirect to reset password page
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="p-4 w-25 login">
        <h1 className="px-4">Forgot Password</h1>
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
          <button type="submit" className="btn btn-warning">
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-3">{message}</p>}
        {showEditButton && (
          <button className="btn btn-info mt-2" onClick={handlePasswordReset}>
            Edit Password
          </button>
        )}
        <div className="dropdown-divider"></div>
        <a className="dropdown-item px-4" href="/login">
          Back to Login
        </a>
        <a className="dropdown-item px-4 pb-2" href="/signup">
          New around here? Sign up
        </a>
      </div>
    </div>
  );
};
