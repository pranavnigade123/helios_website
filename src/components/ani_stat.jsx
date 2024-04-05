import React, { useEffect, useRef } from 'react';
import AnimatedNumber from './animatednum';

const AniStats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = statsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate when the element is 50% visible on the screen
      const isVisible = top < windowHeight * 0.5 && bottom >= windowHeight * 0.5;
      statsRef.current.classList.toggle('animate-slide-up', isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={statsRef} className="container anistat_container whitebg">
      <div className="ani-stats-title">
        <h1>Join a community of millions.</h1>
      </div>
      <div className="content">
        <p>Crypto Invested</p>
        <div className="number-with-k">
          <AnimatedNumber targetNumber={470} duration={3000} steps={50} />
          <span>K</span>
        </div>
      </div>
      <div className="content">
        <p>Trading Volume</p>
        <div className="number-with-k">
          <AnimatedNumber targetNumber={38} duration={3000} steps={50} />
          <span>B</span>
        </div>
      </div>
      <div className="content">
        <p>Members Trust Us</p>
        <div className="number-with-k">
          <AnimatedNumber targetNumber={275} duration={3000} steps={50} />
          <span>K</span>
        </div>
      </div>
      <div className='marginbottom'></div>
    </div>
  );
};

export default AniStats;
