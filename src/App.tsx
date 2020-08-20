import React, { useState } from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { PageTitle } from './PageTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';
import { UncontrolledOnOff } from './UncontrolledOnOff/UncontrolledOnOff';
import { UncontrolledAccordion } from './UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './UncontrolledRating/UncontrolledRating';
import { ValueType } from './Star/Star';
import { OnOff } from './OnOff/OnOff';

function App() {

  const [value, setValue] = useState<ValueType>(0)
  const [active, setActive] = useState<boolean>(false)
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <div className="App">
      <PageTitle title="What's up?" />
      {/* <UncontrolledOnOff /> */}
      <OnOff value={active} onClick={() => setActive(!active)} />
      <OnOff value={active} onClick={() => setActive(!active)} />
      <OnOff value={active} onClick={() => setActive(!active)} />


      <Accordion title={"Menu"} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
      <Accordion title={"Menu"} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
      <Accordion title={"Menu"} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
      {/* <UncontrolledAccordion title={"Не контролируемый"} /> */}


      <Rating value={value} setValue={setValue} />
      <Rating value={value} setValue={setValue} />
      <Rating value={value} setValue={setValue} />
      {/* <UncontrolledRating /> */}
    </div>
  );
}

export default App;
