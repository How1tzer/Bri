import React from 'react';
import './App.css';
import Mensaje from './components/Mensaje';
import Lottie from 'lottie-react';
import yellow_rose from '/workspaces/Bri/those-eyes/src/components/animations/Animation - 1743207865937.json';
import yellow_flower from '/workspaces/Bri/those-eyes/src/components/animations/Animation - 1743207968245.json';
import pink_flower from '/workspaces/Bri/those-eyes/src/components/animations/Animation - 1743208000894.json';

function App() {
  return (
    <div className="App">
      <h1>
        Bri <span role="img" aria-label="corazón">❤️</span>
      </h1>
      <Mensaje />

      {/* Flores animadas */}
      
      
      <Lottie className="flower" animationData={pink_flower} style={{ top: '55%', left: '30%' }} />
      <Lottie className="flower" animationData={pink_flower} style={{ top: '55%', left: '75%' }} />
      <Lottie className="flower" animationData={yellow_flower} style={{ top: '50%', left: '50%' }} />
    </div>
  );
}

export default App;