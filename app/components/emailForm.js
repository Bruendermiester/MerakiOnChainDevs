import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
        const response = await axios.post('https://t7xzdo37al.execute-api.us-east-1.amazonaws.com/email', { email });
        if (response.data.success) {
          alert('Email submitted successfully!');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to submit email');
      }

    setError('');
    setIsSubmitted(true);

    // Simulate an API request
    setTimeout(() => {
      setEmail('');  // Clear email input
    }, 1000);
  };

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes pulseSheen {
        0%, 20% {
          box-shadow: 0 0 0px #00ccff;
        }
        10%, 30% {
          box-shadow: 0 0 3px 3px rgba(0, 204, 255, 0.2);
        }
        40%, 100% {
          box-shadow: 0 0 0px #00ccff;
        }
      }
    `, styleSheet.cssRules.length);

    styleSheet.insertRule(`
      @keyframes sheenMove {
        0% {
          left: -100%;
        }
        10% {
          left: 100%;
        }
        100% {
          left: 100%; /* Keep it out of view after 10% */
        }
      }
    `, styleSheet.cssRules.length);
  }, []);

  return (
    <>
    <h2 style={{ textAlign: 'center', paddingTop: "20px", marginBottom: '20px', fontSize: '36px'}}>SIGN UP FOR PLAYTEST</h2>
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      <div style={{ paddingTop: '20px', marginBottom: '10px' }}>
        
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitted}
          placeholder='Enter Your Email'
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '1em',
            marginTop: '5px',
            borderRadius: '20px',
            border: '1px solid #ccc'
          }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitted}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '1em',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '20px',
          cursor: isSubmitted ? 'not-allowed' : 'pointer',
          position: 'relative',
          overflow: 'hidden',
          animation: isSubmitted ? 'none' : 'pulseSheen 8s infinite'
        }}
      >
        {isSubmitted ? 'Submitted' : 'Submit'}

        {/* Sheen effect */}
        <span
          style={{
            content: "''",
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
            transform: 'skewX(-30deg)',
            animation: isSubmitted ? 'none' : 'sheenMove 5s infinite'
          }}
        ></span>
      </button>

      {/* Green checkmark notification */}
      {isSubmitted && (
        <div style={{ marginTop: '10px', textAlign: 'center', color: '#1ef707', fontSize: '1.2em', fontWeight: 'bold' }}>
          &#10003; Submitted
        </div>
      )}
    </form>
    </>
  );
};

export default EmailForm;
