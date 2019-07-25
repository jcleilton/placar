import React from 'react';
import logo from './logo.svg';
import './App.css';

import Controllers from './components/controllers'
import Display from './components/display'


function App() {
  return (
    <div className="App">
      <center className="top">Limite-Fighter Placar</center>
      <header className="App-header">
        <Controllers/>
        <Display/>
      </header>
    </div>
  );
}

export default App;
