import React, { useState } from "react";
import styles from "../../styles/newpharmacysignup.module.css";
import caretleft from "../../assets/CaretLeft.png";
import cancelicon from "../../assets/X.png";

const InputField = ({ id, name, type, placeholder, value, onChange }) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

const NewPharmarcySignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phone ||
      !formData.address
    ) {
      setError("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/pharmacies/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      const data = await response.json();
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.signupSection}>
        <div className={styles.headerNav}>
          <img src={caretleft} alt="go back" className={styles.backIcon} />
          <h1 className={styles.headerText}>Create Account</h1>
          <img src={cancelicon} alt="close" className={styles.closeIcon} />
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            id="name"
            name="name"
            type="text"
            placeholder="Pharmacy Name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <InputField
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234 800-123-4567"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            maxLength="13"
          />
          <InputField
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>Sign up successful!</p>}

          <button type="submit" className={styles.signupbtn} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className={styles.redirectLink}>
          <p>Already have an account?</p>
          <a href="/pharmacy-signin">Log in</a>
        </div>
      </section>
    </div>
  );
};

export default NewPharmarcySignUp;
