import React from "react";
import { Button } from "@/components/ui/button";
import styles from "../../styles/landingcss/calltoaction.module.css"; // Import your landing page styles here
import heartimg from "../../assets/Thirdlevelimg.svg";
import health from "../../assets/health1.jpg";
// import health from "../../assets/health2.png";
// import health from "../../assets/health3.png";

const CallToActionSection = () => {
  return (
    <section className={styles.CoaContainer}>
      <div className={styles.CoaChild1}></div>

      <div className={styles.container}>
        <div className={styles.containerChild1}>
          <div className={styles.imgWrapper}>
            <div></div>
            <img src={health} alt="Person using digital health platform" />
          </div>
        </div>

        <div className={styles.textWrapper}>
          <h2>
            YOUR HEALTH WILL <br />
            <span>THANK YOU.</span>
          </h2>
          <p>
            Take the first step towards better healthcare management. Browse
            medications, find the best prices, and connect with pharmacies that
            care about your wellbeing.
          </p>
          <Button className={styles.btn}>Browse Medications</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
