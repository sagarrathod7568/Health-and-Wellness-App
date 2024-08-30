import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const URL =
    "https://health-is-wealth-4239a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(URL);
      const existingUsers = data || {};
      const user = Object.values(existingUsers).find(
        (user) => user.email === email && user.mobile === mobile
      );

      if (user) {
        setIsVerified(true);
        alert("Email and Mobile Verified, Now you can Reset your password ");
      } else {
        alert("Invalid email or mobile number. Please try again.");
      }
    } catch (error) {
      console.error("Verification failed:", error);
      alert("Failed to verify. Please try again.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      const { data } = await axios.get(URL);
      const existingUsers = data || {};
      const userKey = Object.keys(existingUsers).find(
        (key) =>
          existingUsers[key].email === email &&
          existingUsers[key].mobile === mobile
      );

      if (userKey) {
        const updatedUser = {
          ...existingUsers[userKey],
          password: newPassword,
        };

        await axios.put(
          `https://health-is-wealth-4239a-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userKey}.json`,
          updatedUser
        );

        alert(
          "Password reset successful! You can now log in with your new password."
        );
        navigate("/login");
      } else {
        alert("Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Password reset failed:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="p-4 w-25 forgot-password login">
        <h1 className="px-4">Forgot Password</h1>
        {!isVerified ? (
          <form className="px-4 py-3" onSubmit={handleVerify}>
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
                placeholder="1234567890"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-warning mt-1">
              Verify
            </button>
          </form>
        ) : (
          <form className="px-4 py-3" onSubmit={handleResetPassword}>
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
            <button type="submit" className="btn btn-warning mt-2">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
