import React from "react";
import Navbar from "../components/landing/Navbar.jsx";
import HeroSection from "../components/landing/HeroSection.jsx";
import FeaturesSection from "../components/landing/FeaturesSection.jsx";
import ConnectionSection from "../components/landing/ConnectionSection.jsx";
import TestimonialsSection from "../components/landing/TestimonialsSection.jsx";
import GetStartedSection from "../components/landing/GetStartedSection.jsx";
import CallToActionSection from "../components/landing/CallToActionSection.jsx";
import FaqSection from "../components/landing/FaqSection.jsx";
import Footer from "../components/landing/Footer.jsx";
import styles from "../styles/landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ConnectionSection />
        <TestimonialsSection />
        <GetStartedSection />
        <CallToActionSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
