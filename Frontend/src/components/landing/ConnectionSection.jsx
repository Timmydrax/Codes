import React from "react";
import styles from "../../styles/landingcss/connection.module.css"; // Import your landing page styles here

const ConnectionSection = () => {
  return (
    <section className={styles.connectionSection}>
      <div className={styles.container}>
        <h2>Search, Select and Pay for Medications with Ease</h2>

        <div className={styles.gridWrapper}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <svg
                className={styles.svg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3>Upload Prescriptions</h3>
            <p>
              Easily upload your prescriptions to search for prescription
              medications and compare prices.
            </p>
          </div>

          <div className={styles.card} style={{ animationDelay: "0.2s" }}>
            <div className={styles.cardImage}>
              <svg
                className={styles.svg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Pharmacy Selection</h3>
            <p>
              Find and select nearby pharmacies based on your location,
              availability, and pricing.
            </p>
          </div>

          <div className={styles.card} style={{ animationDelay: "0.4s" }}>
            <div className={styles.cardImage}>
              <svg
                className={styles.svg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Flexible Payment</h3>
            <p>
              Choose to pay for your medications online in advance or select the
              pay at pickup option for convenience.
            </p>
          </div>
        </div>

        <div className={styles.bottomText}>
          <a href="#learn-more">
            Learn how it works
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
