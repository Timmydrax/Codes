import styles from "../styles/otp-confirmed.module.css";

const OtpConfirmed = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
          <p>OTP Confirmed</p>
        </section>
      </div>
    </>
  );
};

export default OtpConfirmed;
