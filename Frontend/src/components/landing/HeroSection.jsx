import React from "react";
import { Button } from "@/components/ui/button";
import styles from "../../styles/landingcss/hero.module.css";
import banner from "../../assets/BannerPicture.svg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup-email");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.containerChild1}>
          <h1>
            Your Medication Search, <br />
            <span>Simplified</span>
          </h1>
          <p>
            Find medications, view pricing, and select pharmacies near you.
            Upload prescriptions, pay online, or choose to pay at pickup.
          </p>
          <div className={styles.buttonWrapper}>
            <Button className={styles.btn1} onClick={handleLogin}>
              Search Medications
            </Button>
            <Button
              className={styles.btn2}
              variant="outline"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className={styles.containerChild2}>
          <div className={styles.innerChild1}>
            <div className={styles.innerChild2}></div>
            <div className={styles.imgWrapper}>
              <img
                src={banner}
                alt="Person using digital health platform"
                className={styles.bannerImage}
              />
              <div>
                <h3>Complete Pharmacy Access</h3>
                <p>
                  Search medications, upload prescriptions, and choose from
                  nearby pharmacies with convenient payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
