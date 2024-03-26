import React, { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container">
      <div className="logo">
        <img src="images/brandlogo.svg" alt="logo" />
      </div>
      {/* Hamburger menu icon */}
      <div className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
      </div>
      {/* Navigation links */}
      <ul className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <input type="text" placeholder="Search..." />
    </nav>
  );
};

export default Navigation;
