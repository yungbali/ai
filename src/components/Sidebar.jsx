import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { theme } = useContext(ThemeContext);

  const handleTabClick = (tabName) => {
    setActiveTab(activeTab === tabName ? null : tabName);
  };

  return (
    <div className={`gx-sidebar ${theme}`} data-mode={theme}>
      <div className="gx-sb-logo">
        <NavLink to="/" className="sb-full">Amigo GPT</NavLink>
      </div>
      {/* Convert static menu to dynamic React components */}
    </div>
  );
};

export default Sidebar;