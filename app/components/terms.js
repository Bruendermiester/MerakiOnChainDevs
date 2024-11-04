import React from 'react';
import './terms.css'; // Import the CSS file

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p><strong>Effective Date:</strong> 11/5/2024</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using islesofthearcane ("we," "us," "our") at islesofthearcane, you accept and agree to be bound by these Terms and Conditions.
        If you do not agree, please do not use our website or services.
      </p>

      <h2>2. Use of the Service</h2>
      <p>
        You agree to use our service only for lawful purposes and in compliance with all applicable laws and regulations. You may not use the service to 
        engage in any activity that is harmful, offensive, or interferes with the normal use of our service by others.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this website, including text, images, graphics, and code, is the property of islesofthearcane or its licensors and is protected by 
        copyright, trademark, and other intellectual property laws. You agree not to reproduce, distribute, or create derivative works without our written permission.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        In no event shall islesofthearcane be liable for any damages arising out of or in connection with your use of our website or services. This limitation 
        of liability applies to all claims, whether based on warranty, contract, tort, or any other legal theory.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms and Conditions at any time. We will post the updated terms on this page, and the "Effective Date" will be updated accordingly.
        By continuing to use the service after any changes, you accept the modified terms.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact us at:
      </p>
      {/* <p><strong>[Your Company Name]</strong><br/>
        [Your Contact Email Address]<br/>
        [Your Contact Phone Number, if applicable]
      </p> */}

      <p>&copy; 2024 islesofthearcane. All rights reserved.</p>
    </div>
  );
};

export default TermsAndConditions;