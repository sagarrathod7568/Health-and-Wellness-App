import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
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

      // Fetch user data
      const { data } = await axios.get(URL);
      const user = data[userId];

      if (user) {
        // Update the password in the database
        await axios.patch(`${URL}/${userId}.json`, { password: newPassword });

        setMessage("Password updated successfully. Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Redirect after 2 seconds
      } else {
        setMessage("User not found.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setMessage("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="p-4 w-25 login">
        <h1 className="px-4">Reset Password</h1>
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Reset Password
          </button>
        </form>
        {message && <p className="mt-3">{message}</p>}
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
