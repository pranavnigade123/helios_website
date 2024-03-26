import React from 'react';


const FeatureCards = () => {
  return (
    <div className="feature-cards-container container">
      <div className="feature-card">
        <img src="image1.jpg" alt="Feature 1" className="feature-image" />
        <h2 className="feature-title">Feature 1</h2>
        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo risus eget nisi facilisis, nec blandit nisi lacinia.</p>
      </div>
      <div className="feature-card">
        <img src="image2.jpg" alt="Feature 2" className="feature-image" />
        <h2 className="feature-title">Feature 2</h2>
        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo risus eget nisi facilisis, nec blandit nisi lacinia.</p>
      </div>
      <div className="feature-card">
        <img src="image3.jpg" alt="Feature 3" className="feature-image" />
        <h2 className="feature-title">Feature 3</h2>
        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo risus eget nisi facilisis, nec blandit nisi lacinia.</p>
      </div>
    </div>
  );
}

export default FeatureCards;
