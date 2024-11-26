import React from 'react';

const Button = ({ children, loading, onClick, className = '' }) => {
  return (
    <button 
      className={`btn-process ${className}`} 
      onClick={onClick}
      disabled={loading}
    >
      {children}
      {loading && <span className="btn-ring" />}
    </button>
  );
};

export default Button;