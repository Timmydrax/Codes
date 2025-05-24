import React from "react";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ConnectionSection from "../components/landing/ConnectionSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import GetStartedSection from "../components/landing/GetStartedSection";
import CallToActionSection from "../components/landing/CallToActionSection";
import FaqSection from "../components/landing/FaqSection";
import Footer from "../components/landing/Footer";
import styles from "../styles/landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <NavBar />
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
