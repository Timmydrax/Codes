import React from "react";
import styles from "../../styles/pharmacysignup.module.css";
import caretleft from "../../assets/CaretLeft.png";
import cancelicon from "../../assets/X.png";
const PhamarcySignUp = () => {
  return (
    <div className={styles.pharmacySignupContainer}>
      <div className={styles.directionHeader}>
        <img src={caretleft} alt="caretleft" />
        <img src={cancelicon} alt="caretleft" />
      </div>
      <form>
        <label htmlFor="email">
          <input type="email" placeholder="email" />
        </label>
        <label htmlFor="password">
          <input type="password" placeholder="Password" />
        </label>

        <label htmlFor="phone">
          <input
            type="tel"
            pattern="[0-9]"
            inputMode="numeric"
            maxLength="10"
            placeholder="800-123-4567"
          />
        </label>
        <button>Sign Up</button>
      </form>
      <div className={styles.redirectLink}>
        {" "}
        <p>Already have An Account</p>
        <a href="">Login in</a>
      </div>
    </div>
  );
};

export default PhamarcySignUp;
