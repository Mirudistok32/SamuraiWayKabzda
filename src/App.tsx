import React from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { PageTitle } from './PageTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <PageTitle title="What's up?" />
      <Accordion title={"Menu"} collapsed={false} />
      <Accordion title={"Users"} collapsed={true} />
    </div>
  );
}

export default App;
