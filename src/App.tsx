import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Rating />
      <Accordion />
    </div>
  );
}

const Rating = () => {
  return (
    <>
      <Star />
    </>
  )

}
const Star = () => {
  return (
    <>
      <div>star</div>
    </>
  )
}

const Accordion = () => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}

export default App;
