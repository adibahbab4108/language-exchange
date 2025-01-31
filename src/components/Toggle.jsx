import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-800 text-white rounded-md btn"
      >
         {
            isDarkMode ? 'Light Mode' : 'Dark Mode'
         }
      </button>
    </div>
  );
};

export default Toggle;
