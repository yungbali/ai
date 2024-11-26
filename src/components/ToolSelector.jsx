import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOOLS } from '../config/tools';

const ToolSelector = () => {
  const navigate = useNavigate();

  const handleToolSelect = (toolPath) => {
    navigate(toolPath);
  };

  return (
    <div className="tool-selector">
      <h1 className="text-center">🎵 Musette AI Generator</h1>
      <div className="tools-grid">
        {Object.entries(TOOLS).map(([key, tool]) => (
          <div 
            key={key} 
            className="tool-card"
            onClick={() => handleToolSelect(tool.path)}
          >
            <div className="tool-icon">{tool.icon}</div>
            <h3>{key}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolSelector;