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
            src='/images/Logo.png'
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
        <div ref={emailSectionRef} className={styles.emailSection}>
          <div className={styles.shadow}></div>
          <div className={styles.formstuff}>
            <EmailForm />
          </div>
        </div>
      </div>

    </>
  );
}
