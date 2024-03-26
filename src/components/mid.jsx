import React, { useState, useEffect } from 'react';
import './Mid.css'; // Import CSS file for styling

const Mid = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the width threshold as per your definition of smaller screens
    };

    handleResize(); // Call once on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="mid container">
      <div className={`mid-content ${isSmallScreen ? 'slide-up' : ''}`}>
        <h1 id="title1">HELIOS: Powering the Crypto Cosmos</h1>
        <p id="content1">HELIOS fuels an expansive ecosystem, empowering developers to scale apps across blockchains.
          As our foundation, HELIOS ensures security and scalability, fostering a robust platform.</p>
        <br></br>
        <div className="mid-btn">
          <button className="explore-btn">Explore Data</button>
          <button className="start-btn">Get Started</button>
        </div>
      </div>
      <div className={`mid-image ${isSmallScreen ? 'slide-up' : 'fade-in-right'}`}>
        <img src="images\helios_mid3.jpg" alt="mid-img" />
      </div>
    </main>
  );
};

export default Mid;
