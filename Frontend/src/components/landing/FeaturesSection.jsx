import React from "react";
import styles from "../../styles/landingcss/features.module.css";
import pickup from "../../assets/card-3-img.svg";
import payment from "../../assets/payment-options.jpg";
// import prescription from "../../assets/prescription1.webp";
import prescription from "../../assets/Prescription2.jpg";

const FeaturesSection = () => {
  const features = [
    {
      title: "Medication Search",
      description:
        "Search for both over-the-counter and prescription medications with detailed information on pricing and availability.",
      icon: (
        <svg
          className={styles.svg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      image: pickup,
    },
    {
      title: "Prescription Upload",
      description:
        "Securely upload your prescriptions to search for prescription-only medications and compare availability across pharmacies.",
      icon: (
        <svg
          className={styles.svg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M9 12h6"></path>
          <path d="M12 9v6"></path>
        </svg>
      ),
      image: prescription,
    },
    {
      title: "Payment Options",
      description:
        "Choose your preferred payment method - pay online for a quicker pickup experience or select the pay at pickup option.",
      icon: (
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
      ),
      image: payment,
    },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2>How CuraMap Works</h2>
        <p>
          We're revolutionizing how you access medications with innovative
          features designed around your needs.
        </p>

        <div className={styles.featureContainer}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.featureCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.cardImage}>
                <img
                  className={styles.image}
                  src={feature.image}
                  alt={feature.title}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.content}>
                  <div className={styles.contentIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
