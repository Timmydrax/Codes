import React from "react";
import { Button } from "@/components/ui/button";
import styles from "../../styles/landingcss/getstarted.module.css"; // Import your landing page styles here
import patients from "../../assets/forpatients.svg";
import pharmacies from "../../assets/phamacare.svg";
import { useNavigate } from "react-router-dom";

const GetStartedSection = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup-email");
  };

  const handlePharmacy = () => {
    navigate("/pharmacy-signup");
  };

  const userTypes = [
    {
      title: "For Patients",
      description:
        "Access medication information, compare prices, and connect with local pharmacies all in one place.",
      image: patients,
      buttonText: "Sign Up as Patient",
      onClick: handleSignUp,
      points: [
        "Search for prescription and OTC medications",
        "Compare prices across multiple pharmacies",
        "Securely upload prescriptions",
        "Choose online payment or in-store pickup",
      ],
    },
    {
      title: "For Pharmacies",
      description:
        "Join our network to reach more patients and streamline your prescription fulfillment process.",
      image: pharmacies,
      buttonText: "Partner with Us",
      onClick: handlePharmacy,
      points: [
        "Increase your visibility to local patients",
        "Manage inventory and prescription requests",
        "Process payments through our secure platform",
        "Access analytics and reporting tools",
      ],
    },
  ];

  return (
    <section id="getStarted" className={styles.getStartedSection}>
      <div className={styles.container}>
        <h2>Get Started with CuraMap</h2>

        <div className={styles.gridContainer}>
          {userTypes.map((userType, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={styles.cardImage}>
                <img
                  src={userType.image}
                  alt={userType.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{userType.title}</h3>
                <p>{userType.description}</p>
                <ul className={styles.pointsList}>
                  {userType.points.map((point, i) => (
                    <li key={i}>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className={styles.btn1} onClick={userType.onClick}>
                  {userType.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className={styles.ctaContainer}>
          <p className="text-gray-600 mb-6">
            Ready to transform your medication experience?
          </p>
          <Button className={styles.button}>Create Your Free Account</Button>
        </div> */}
      </div>
    </section>
  );
};

export default GetStartedSection;
