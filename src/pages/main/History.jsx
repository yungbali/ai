import React from 'react';

const History = () => {
  return (
    <div className="history-container">
      <h1>Your Activity History</h1>
      <p className="subtitle">Track your creative journey</p>
      
      <div className="history-content">
        <div className="filters">
          <h3>Filter By:</h3>
          {/* Filter options will go here */}
        </div>
        
        <div className="history-list">
          {/* History items will go here */}
        </div>
      </div>
    </div>
  );
};

export default History;