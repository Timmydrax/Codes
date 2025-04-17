import React from "react";
import { useState } from "react";
import "../../styles/signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="back-btn">
          <a href="/">
            <img src="/src/assets/CaretLeft.png" alt="a left arrow icon" />
          </a>
        </div>

        <h2 className="login-text">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>

          <button className="google-signin">
            Or sign in with Google
          </button>
        </form>

        <p class="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
