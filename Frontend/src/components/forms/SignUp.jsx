import React, { useState } from "react";
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
    email: "",
    password: "",
    otp: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      dateOfBirth: `${formData.year}-${formData.month}-${formData.day}`,
      email: formData.email,
      password: formData.password,
      otp: formData.otp,
    };

    console.log("Payload being sent:", payload);

    try {
      const response = await fetch(
        "https://new-cura.onrender.com/api/patients/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        throw new Error(
          errorData.message || "Failed to sign up. Please try again."
        );
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      alert("Signup successful!");
      navigate("/complete-profile");
    } catch (err) {
      console.error("Error details:", err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="signup-wrapper">
        <section className="signup-container">
          <div className="action-btn">
            <div className="return">
              <a href="/">
                <img src="/src/assets/CaretLeft.png" alt="A left arrow icon" />
              </a>
            </div>
          </div>
          <h3 className="title">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>When is your birthday?</legend>
              <div className="dob">
                <input
                  type="number"
                  id="dayInput"
                  name="day"
                  min="1"
                  max="31"
                  placeholder="Day"
                  value={formData.day}
                  onChange={handleChange}
                />
                <select
                  id="monthInput"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Month
                  </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <input
                  type="number"
                  id="yearInput"
                  name="year"
                  min="1900"
                  max="2100"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
              <p className="undertext">
                Your birthday won't be shown publicly.
              </p>
            </fieldset>
            <div className="email-tag">
              <label htmlFor="email">Email</label>
              <p onClick={() => navigate("/signup-phone")}>
                Sign up with Phone
              </p>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="number"
              id="otp"
              name="otp"
              placeholder="Enter 6 digit code"
              value={formData.otp}
              onChange={handleChange}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Next"}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/signin")}>Log in</span>
          </p>
        </section>
      </section>
    </>
  );
};

export default SignUp;
