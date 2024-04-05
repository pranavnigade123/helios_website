import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Mid from './components/mid';
import Ourvision from './components/ourvision';
import FeatureCards from './components/FeatureCards';
import AniStats from './components/ani_stat';

const App = () => {
  return (
    <div>
      <Navigation />
      <Mid />
      <Ourvision />
      <FeatureCards />
      
      <AniStats/>
    </div>
  );
};

export default App;