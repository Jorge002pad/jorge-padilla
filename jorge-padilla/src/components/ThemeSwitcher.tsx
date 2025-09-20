import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      variant="light"
      onClick={toggleTheme}
      className="rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: '40px', height: '40px' }}
    >
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ThemeSwitcher;