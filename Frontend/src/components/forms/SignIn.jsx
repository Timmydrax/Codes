import React from "react";
import { useState } from "react";
import styles from "../../styles/signin.module.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    // Prevent Default submission
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://new-cura.onrender.com/api/patients/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authtoken", data.token);
        navigate("/findmeds");
      } else if (response.status === 401) {
        const data = await response.json();
        setError(data.message || "Invalid email or password.");
      } else if (response.status === 404) {
        setError("Account not found. Please check your email.");
      } else {
        setError(data.message || "Sign-in failed. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
      console.error("Sign-in error:", error);
    }
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup-email");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.backButton}>
          <a href="/">
            <img src="/src/assets/CaretLeft.png" alt="" />
          </a>
        </div>

        <h2 className={styles.loginText}>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.options}>
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

          <button
            type="submit"
            className={styles.signinButton}
            onClick={handleSignIn}
          >
            Sign in
          </button>

          <button className={styles.googleButton}>
            Or sign in with Google
          </button>

          {/* Error message */}
          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBlockStart: "1rem",
              }}
            >
              {error}
            </p>
          )}
        </form>

        <p className={styles.signupText}>
          Don't have an account?{" "}
          <a href="#" onClick={handleSignUp}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
