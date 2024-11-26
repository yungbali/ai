import React from 'react';
import { Link } from 'react-router-dom';

const AIToolCard = ({ icon, title, description, path }) => {
  return (
    <Link to={path} className="ai-tool-card">
      <div className="tool-icon">{icon}</div>
      <div className="tool-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default AIToolCard;