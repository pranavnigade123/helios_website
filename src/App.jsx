import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Mid from './components/mid';
import Ourvision from './components/ourvision';
import FeatureCards from './components/FeatureCards';
import AniStats from './components/ani_stat';
import Faq from './components/Faq'; // Assuming Faq.jsx is in the same directory

const App = () => {
  return (
    <div>
      <Navigation />
      <Mid />
      <Ourvision />
      <FeatureCards />
      <AniStats />
      <Faq />  // Add the Faq component here
    </div>
  );
};

export default App;
