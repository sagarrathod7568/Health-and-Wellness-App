import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const navigate = useNavigate();

  const URL =
    "https://health-is-wealth-4239a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const userId = localStorage.getItem("resetPasswordUserId");

      if (!userId) {
        setMessage("User not found.");
        return;
      }

      const { data } = await axios.get(URL);
      const user = data[userId];

      if (user) {
        await axios.patch(`${URL}/${userId}.json`, { password: newPassword });

        setMessage("Password updated successfully. Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage("User not found.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage("Failed to update password. Please try again.");
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4  login">
        <h1 className="px-4 text-center text-md-start">Reset Password</h1>
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <div className="input-group">
              <input
                type={showNewPassword ? "text" : "password"}
                className="form-control"
                id="newPassword"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="input-group-text"
                onClick={toggleNewPasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="input-group-text "
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-warning w-100 mt-3">
            Reset Password
          </button>
        </form>
        {message && <p className="mt-3 text-center">{message}</p>}
        <div className="dropdown-divider"></div>
        <a
          className="dropdown-item text-center text-md-start px-4"
          href="/login"
        >
          Back to <b className="text-warning">Login</b>
        </a>
        <a
          className="dropdown-item text-center text-md-start px-4 pb-2"
          href="/signup"
        >
          New around here? <b className="text-warning">Sign up</b>
        </a>
      </div>
    </div>
  );
};
