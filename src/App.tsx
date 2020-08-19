import React from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { PageTitle } from './PageTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';
import { OnOff } from './OnOff/OnOff';
import { UncontrolledAccordion } from './UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div className="App">
      <PageTitle title="What's up?" />
      <OnOff />
      <Accordion title={"Menu"} collapsed={false} />
      <Accordion title={"Users"} collapsed={true} />
      <Rating value={4}/>
      <UncontrolledAccordion title={"Не контролируемый"}/>
      <UncontrolledRating />
    </div>
  );
}

export default App;
