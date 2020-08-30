import React, { useState } from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { PageTitle } from './PageTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';
import { ValueType } from './Star/Star';
import { OnOff } from './OnOff/OnOff';

function App() {

  const [value, setValue] = useState<ValueType>(0)
  const [active, setActive] = useState<boolean>(false)
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <div className="App">
      <PageTitle
        title="What's up?"
      />

      <OnOff
        active={active}
        onChangeActive={setActive}
      />

      <Accordion
        title={"Menu"}
        collapsed={collapsed}
        onChange={() => setCollapsed(!collapsed)}
        items={[]}
        onClick={(a = 4) => console.log(a)}
      />


      <Rating
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
