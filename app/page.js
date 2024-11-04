'use client';
import React, { useRef } from 'react';
import styles from './page.module.css';
import EmailForm from './components/emailForm';

export default function Home() {
  // Create a ref for the email section
  const emailSectionRef = useRef(null);

  // Scroll to the email section on button click
  const scrollToEmailSection = () => {
    emailSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <header>
          <img
            className={styles.logo}
            src='/images/Logo3.png'
            alt="Logo"
          />
          <div className={styles.button} onClick={scrollToEmailSection}>Sign Up</div>
      </header>
      <main className={styles.main}>
        <div className={styles.projects}>
          {/* Additional content goes here */}
        </div>
      </main>
      <div className={styles.background}>
        <div className={styles.shadow}></div>
        <div ref={emailSectionRef} className={styles.emailSection}>
          <div className={styles.shadow2}></div>
          <div className={styles.formstuff}>
            <EmailForm />
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section about">
            <h3>About Us</h3>
            <p>
              Isles of the Arcane is an moba meets hero shooter game that is a mod of pirate nation. Artwork/Assets courtesy of Proof of Play.
            </p>
          </div>

          <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
            </ul>
          </div>

          <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: islesofthearcane@gmail.com</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Isles of the Arcane. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}