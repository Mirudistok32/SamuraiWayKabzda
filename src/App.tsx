import React from 'react';
import './App.css';
import { Rating } from './Rating';
import { AppTitle } from './AppTitle';
import { Accordion } from './Accordion';

function App() {
  return (
    <div className="App">
      <AppTitle />
      <Accordion />
      <Rating />
    </div>
  );
}

export default App;
