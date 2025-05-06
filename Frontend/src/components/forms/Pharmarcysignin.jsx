import React, { useState } from "react";
import styles from "../../styles/pharmacysignin.module.css";
import caretleft from "../../assets/CaretLeft.png";
import cancelicon from "../../assets/X.png";
import { useNavigate } from "react-router-dom";

const Pharmarcysignin = () => {
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
        // "https://new-cura.onrender.com/api/pharmacies/signin",
        `${import.meta.env.VITE_API_URL}/pharmacies/signin`,

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
        navigate("/dashboard");
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
      <section className={styles.signupSection}>
        <div className={styles.headerNav}>
          <img src={caretleft} alt="go back" className={styles.backIcon} />
          <h1 className={styles.headerText}>Log In</h1>
          <img src={cancelicon} alt="close" className={styles.closeIcon} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.options}>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <a className={styles.forgot} href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className={styles.signupbtn}
            onClick={handleSignIn}
          >
            Sign In
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
        <div className={styles.redirectLink}>
          <p>Don't have an account?</p>
          <a onClick={handleSignUp}>Sign up</a>
        </div>
      </section>
    </div>
  );
};

export default Pharmarcysignin;
