import React, { useState } from "react";
import styles from "../../styles/signup.module.css";
import { useNavigate } from "react-router-dom";

const InputField = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  invalid,
}) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={invalid ? styles.invalid : ""}
  />
);

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: "",
    validId: "",
    conditions: "",
  });

  const [isCompleteVisible, setIsCompleteVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [invalidFields, setInvalidFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear invalid field if it becomes valid
    setInvalidFields((prev) => ({
      ...prev,
      [name]: value.trim() === "" ? true : false,
    }));
  };

  const handleNext = () => {
    setIsCompleteVisible(true);
  };

  const handleBack = () => {
    setIsCompleteVisible(false);
  };

  const validateFields = () => {
    const newInvalidFields = {};
    if (!formData.fullName.trim()) newInvalidFields.fullName = true;
    if (!formData.phoneNumber.trim() || !/^\d{10}$/.test(formData.phoneNumber))
      newInvalidFields.phoneNumber = true;
    if (!formData.validId.trim()) newInvalidFields.validId = true;
    if (!formData.conditions.trim()) newInvalidFields.conditions = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newInvalidFields.email = true;
    if (formData.password !== formData.confirmPassword)
      newInvalidFields.password = true;

    setInvalidFields(newInvalidFields);
    return Object.keys(newInvalidFields).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateFields()) {
      setError("Please correct the highlighted fields.");
      return;
    }

    setLoading(true);

    const payload = {
      dateOfBirth: `${formData.year}-${formData.month}-${formData.day}`,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      validId: formData.validId,
      conditions: formData.conditions,
    };

    try {
      const response = await fetch(
        // "https://new-cura.onrender.com/api/patients/signup",
        `${import.meta.env.VITE_API_URL}/patients/signup`,

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
        throw new Error(
          errorData.message || "Failed to sign up. Please try again."
        );
      }

      const data = await response.json();
      alert("Signup successful!");
      navigate("/findmeds");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
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
                  <InputField
                    id={styles.dayInput}
                    name="day"
                    type="number"
                    placeholder="Day"
                    value={formData.day}
                    onChange={handleChange}
                    invalid={invalidFields.day}
                  />
                  <select
                    id={styles.monthInput}
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    className={invalidFields.month ? styles.invalid : ""}
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
                  <InputField
                    id={styles.yearInput}
                    name="year"
                    type="number"
                    placeholder="Year"
                    value={formData.year}
                    onChange={handleChange}
                    invalid={invalidFields.year}
                  />
                </div>
                <p className={styles.undertext}>
                  Your birthday won't be shown publicly.
                </p>
              </fieldset>
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                invalid={invalidFields.email}
              />
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                invalid={invalidFields.password}
              />
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                invalid={invalidFields.password}
              />
              {error && <p className={styles.error}>{error}</p>}

              <button
                type="button"
                className={styles.signupbtn}
                onClick={handleNext}
              >
                Next
              </button>
            </form>
          </section>

          {/* Complete Profile Section */}
          <section className={`${styles.signupcontainer} ${styles.complete}`}>
            <h1 className={styles.profileheading}>Complete your Profile</h1>
            <form className={styles.profileform} onSubmit={handleSubmit}>
              <div className={styles.namebox}>
                <label htmlFor="fullName">Full Name</label>
                <InputField
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Name as shown on Valid ID"
                  value={formData.fullName}
                  onChange={handleChange}
                  invalid={invalidFields.fullName}
                />
              </div>
              <div className={styles.phone}>
                <p className={styles.phoneNo}>Phone No</p>
                <div className={styles.numberbox}>
                  <span>+234</span>
                  <InputField
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="80* *** ****"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    invalid={invalidFields.phoneNumber}
                  />
                </div>
              </div>
              <div className={styles.idbox}>
                <label htmlFor="validId">Valid ID</label>
                <InputField
                  id="validId"
                  name="validId"
                  type="text"
                  placeholder="Valid means of ID"
                  value={formData.validId}
                  onChange={handleChange}
                  invalid={invalidFields.validId}
                />
              </div>
              <div className={styles.conditionsbox}>
                <InputField
                  id="conditions"
                  name="conditions"
                  type="text"
                  placeholder="Any Pre-existing condition?"
                  value={formData.conditions}
                  onChange={handleChange}
                  invalid={invalidFields.conditions}
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
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Finish"}
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
