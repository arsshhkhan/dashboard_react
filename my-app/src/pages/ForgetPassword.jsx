import React, { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import "../styles/ForgetPassword.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for password reset
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Background" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Forgot Password?</h2>
            <p>Enter your email address and we will send you a link to reset your password.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="register-center-buttons">
                <button type="submit">Send Reset Link</button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Remembered your password? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
