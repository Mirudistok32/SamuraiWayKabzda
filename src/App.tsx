import React from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { PageTitle } from './PageTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';
import { OnOff } from './OnOff/OnOff';

function App() {
  return (
    <div className="App">
      <PageTitle title="What's up?" />
      <OnOff active={false}/>
      <Accordion title={"Menu"} collapsed={false} />
      <Accordion title={"Users"} collapsed={true} />
      <Rating value={4}/>
    </div>
  );
}

export default App;
