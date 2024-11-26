import React from 'react';

const Reason = () => {
  return (
    <div className="reason-container">
      <h1>Why Are You Here?</h1>
      <p className="subtitle">Help us customize your experience</p>
      
      <div className="reason-options">
        <h3>I want to:</h3>
        <div className="options-list">
          <p>Select all that apply:</p>
          {/* Reason selection options will go here */}
        </div>
      </div>
    </div>
  );
};

export default Reason;