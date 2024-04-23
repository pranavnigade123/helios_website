import React from 'react';
import AnimatedNumber from './animatednum';

const AniStats = () => {
  return (
    <div className="container anistat_container whitebg animate-slide-up">
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
      <div className="marginbottom"></div>
    </div>
  );
};

export default AniStats;
