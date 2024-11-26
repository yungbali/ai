import React from 'react';

const FingerPrintScanner = () => {
  return (
    <div className="scanner-container">
      <h1>Set Up Fingerprint Access</h1>
      <p className="subtitle">Add an extra layer of security to your account</p>
      
      <div className="scanner-content">
        <div className="scanner-instructions">
          <h3>How to Set Up:</h3>
          <ol>
            <li>Place your finger on your device's scanner</li>
            <li>Hold until the scan is complete</li>
            <li>Repeat the process 3 times</li>
          </ol>
        </div>
        
        {/* Scanner interface will go here */}
      </div>
    </div>
  );
};

export default FingerPrintScanner;