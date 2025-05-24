import React from "react";
import { Button } from "@/components/ui/button";
import styles from "../../styles/landingcss/navbar.module.css";
import logo from "../../assets/brandlogo.svg";

const NavBar = () => {
  return (
    <header className={styles.navbarContainer}>
      <div className={styles.container}>
        <div className={styles.curamap}>
          <img src={logo} alt="Curamap Logo" />
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#connection">Connection</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
          <Button variant="default" size="sm">
            <a href="#getStarted"> Get Started</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
