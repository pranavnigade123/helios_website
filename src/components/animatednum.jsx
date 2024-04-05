import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ targetNumber, duration, steps }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const halfScreen = window.innerHeight / 2;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > window.innerHeight / 2) { // Check if scrolled half the screen
      const increment = targetNumber / steps;
      let stepCount = 0;

      const timer = setInterval(() => {
        setCurrentNumber(prevNumber => {
          const newNumber = prevNumber + increment;
          stepCount++;
          if (stepCount >= steps || Math.round(newNumber) >= targetNumber) {
            clearInterval(timer);
            return targetNumber;
          }
          return newNumber;
        });
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [scrollPosition, targetNumber, duration, steps]);

  return (
    <div className="animated-number">
      {Math.round(currentNumber)}
    </div>
  );
};

export default AnimatedNumber;
