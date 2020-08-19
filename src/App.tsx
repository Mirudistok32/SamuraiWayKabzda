import React from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { AppTitle } from './AppTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';

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
