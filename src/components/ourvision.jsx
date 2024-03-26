import React, { useEffect, useRef } from 'react';

const OurVision = () => {
  const visionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = visionRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom >= 0;
      visionRef.current.classList.toggle('animate-slide-up', isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <div ref={visionRef} className="our-vision-container">
      <h1 className="our-vision-title">Our Vision</h1>
      <p className="our-vision-text">Unios merges blockchain and AI for groundbreaking innovation. Leading the charge in AGI development, we open doors to limitless potential. Join us in crafting a decentralized, intelligent future.</p>
    </div>
  );
}

export default OurVision;
