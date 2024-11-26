import React, { useEffect, useState } from 'react';
import { initializeDarkMode, toggleDarkMode } from '../utils/darkMode';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    initializeDarkMode();
    setIsDark(localStorage.getItem("mode") === "dark");
  }, []);

  const handleToggle = (e) => {
    setIsDark(e.target.checked);
    toggleDarkMode(e.target.checked);
  };

  return (
    <div className="swiches-toggle">
      <input
        type="checkbox"
        id="toggle"
        checked={isDark}
        onChange={handleToggle}
      />
      <label htmlFor="toggle">Dark Mode</label>
    </div>
  );
};

export default DarkModeToggle;