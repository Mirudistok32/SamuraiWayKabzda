import React from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { PageTitle } from './PageTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <PageTitle title="What's up?" />
      <Rating value={3} />
      <Accordion title={"Menu"}/>
      <Rating value={4} />
    </div>
  );
}

export default App;
