import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Mid from './components/mid';
import Ourvision from './components/ourvision';
import FeatureCards from './components/FeatureCards'; // Import the FeatureCards component

const App = () => {
  return (
    <div>
      <Navigation />
      <Mid/>
      <Ourvision /> 
      <FeatureCards/>
    </div>
  );
};

export default App;
