import React from 'react';
import './App.css';
import StarPopup from './star-popup.js';
import Rating from './rating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <StarPopup ><Rating /></StarPopup>
      </header>
    </div>
  );
}

export default App;
