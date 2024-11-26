import React from 'react';

const Subscription = () => {
  return (
    <div className="person_detail_main">
      <div className="formDescription">
        <h3>Choose Your Plan</h3>
        <p className="sub-text">Select the best plan for you</p>
      </div>

      <div className="subscription-cards">
        <div className="subscription-card">
          <h4>Basic</h4>
          <p className="price">$9.99/month</p>
          <ul className="features-list">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="btn-process">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;