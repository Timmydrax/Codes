import styles from "../styles/pharmacyOtp.module.css";

const PharmacyOtp = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <h2>Input Patient OTP</h2>

          <div className={styles.inputBox}>
            <label htmlFor="otp"></label>
            <input
              className={styles.input}
              type="text"
              id="otp"
              placeholder="Enter OTP"
            />
          </div>

          <button className={styles.btn}>Next</button>
        </section>
      </div>
    </>
  );
};

export default PharmacyOtp;
