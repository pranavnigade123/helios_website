import React, { useEffect, useRef } from 'react';

const FeatureCards = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(cardsRef.current);

    return () => {
      observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <div ref={cardsRef} className="feature-cards-container container">
      <div className="feature-card">
        <img src="/images/image1.jpg" alt="Feature 1" className="feature-image" />
        <h2 className="feature-title">Decentralized</h2>
        <p className="feature-text">Decentralizing AI with blockchain, promoting fair distribution of power, value, and technology on a global scale.</p>
      </div>
      <div className="feature-card">
        <img src="/images/image2.jpg" alt="Feature 2" className="feature-image" />
        <h2 className="feature-title">AGI Development</h2>
        <p className="feature-text">Creating the framework for decentralized human-like intelligence to evolve, democratizing the evolution of Artificial General Intelligence through open-source initiatives.</p>
      </div>
      <div className="feature-card">
        <img src="/images/image3.jpg" alt="Feature 3" className="feature-image" />
        <h2 className="feature-title">Beneficial AI Network</h2>
        <p className="feature-text">AI systems dedicated to fostering a world characterized by compassion, justice, and sustainability, both presently and for generations to come.</p>
      </div>
    </div>
  );
}

export default FeatureCards;
