import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';
import { Button } from 'reactstrap';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's Soccer Players Ranked by Search</h1>
      <div className="dark-mode-toggle">
        <Button color="primary" onClick={toggleMode} style={{ marginBottom: '1rem' }}>Toggle Dark Mode</Button>
      </div>
    </nav>
  );
};

export default Navbar;
