import React, { useState } from "react";
import styles from "../../styles/signup.module.css";
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
    fullName: "",
    phoneNumber: "",
    validId: "",
    conditions: "",
  });

  const [isCompleteVisible, setIsCompleteVisible] = useState(false); // State to toggle between sections
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setIsCompleteVisible(true); // Show the .complete section
  };

  const handleBack = () => {
    setIsCompleteVisible(false); // Show the .signUp section
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      dateOfBirth: `${formData.year}-${formData.month}-${formData.day}`,
      email: formData.email,
      password: formData.password,
      otp: formData.otp,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      validId: formData.validId,
      conditions: formData.conditions,
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
      navigate("/findmeds");
    } catch (err) {
      console.error("Error details:", err);
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <section className={styles.signupwrapper}>
        <div
          className={`${styles.wrapper} ${
            isCompleteVisible ? styles.active : ""
          }`}
        >
          {/* Sign Up Section */}
          <section className={`${styles.signupcontainer} ${styles.signUp}`}>
            <h3 className={styles.title}>Sign Up</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <legend>When is your birthday?</legend>
                <div className={styles.dob}>
                  <input
                    type="number"
                    id={styles.dayInput}
                    name="day"
                    min="1"
                    max="31"
                    placeholder="Day"
                    value={formData.day}
                    onChange={handleChange}
                  />
                  <select
                    id={styles.monthInput}
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
                    id={styles.yearInput}
                    name="year"
                    min="1900"
                    max="2100"
                    placeholder="Year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                <p className={styles.undertext}>
                  Your birthday won't be shown publicly.
                </p>
              </fieldset>
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
              <button
                type="button"
                className={styles.signupbtn}
                onClick={handleNext}
              >
                Next
              </button>
              {error && <p className={styles.error}>{error}</p>}
            </form>
          </section>

          {/* Complete Profile Section */}
          <section className={`${styles.signupcontainer} ${styles.complete}`}>
            <h1 className={styles.profileheading}>Complete your Profile</h1>
            <form
              className={styles.profileform}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.namebox}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Name as shown on Valid ID"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.phone}>
                <p className={styles.phoneNo}>Phone No</p>
                <div className={styles.numberbox}>
                  <span>+234</span>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="80* *** ****"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.idbox}>
                <label htmlFor="validId">Valid ID</label>
                <input
                  type="text"
                  id="validId"
                  name="validId"
                  placeholder="Valid means of ID"
                  value={formData.validId}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.conditionsbox}>
                <input
                  name="conditions"
                  id="conditions"
                  value={formData.conditions}
                  onChange={handleChange}
                  placeholder="Any Pre-existing condition?"
                  type="text"
                />
              </div>
              {error && <p className={styles.error}>{error}</p>}
              <div className={styles.btnbox}>
                <button
                  className={styles.backbtn}
                  type="button"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  className={styles.finishbtn}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Finish
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default SignUp;
