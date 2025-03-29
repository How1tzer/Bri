import React, { useState } from 'react';
import './App.css';
import Mensaje from './components/Mensaje';
/*Animations for the flowers and library*/
import Lottie from 'lottie-react'
import yellow_rose from '/workspaces/Bri/those-eyes/src/components/animations/Animation - 1743207865937.json'
import yellow_flower from '/workspaces/Bri/those-eyes/src/components/animations/Animation - 1743207968245.json';
import pink_flower from '/workspaces/Bri/those-eyes/src/components/animations/Animation - 1743208000894.json';
function App() {
  return (
    <div className="App">
      <h1>
        Bri <span role="img" aria-label="corazón">❤️</span>
      </h1>
      <Mensaje />
      <Lottie animationData={yellow_rose}/>
      <Lottie animationData={yellow_flower}/>
      <Lottie animationData={pink_flower}/>
    </div>
  );
}

export default App;