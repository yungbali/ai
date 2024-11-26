import React from 'react';

const PreferredLanguage = () => {
  return (
    <div className="language-container">
      <h1>Choose Your Language</h1>
      <p className="subtitle">Select your preferred language for a personalized experience</p>
      
      <div className="language-options">
        <h3>Popular Languages</h3>
        {/* Language selection options will go here */}
        
        <div className="language-note">
          <p>You can change your language preference anytime in settings</p>
        </div>
      </div>
    </div>
  );
};

export default PreferredLanguage;