import React, { useState } from 'react';
import './App.css';
import { Rating } from './Rating/Rating';
import { PageTitle } from './PageTitle/AppTitle';
import { Accordion } from './Accordion/Accordion';
import { ValueType } from './Star/Star';
import { OnOff } from './OnOff/OnOff';
import { Select } from './Select/Select';
import { v4 } from 'uuid';

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

      <Select
        items={[
          { title: 'react', id: v4() },
          { title: 'redux', id: v4() },
          { title: 'storybook', id: v4() },
          { title: 'thunk', id: v4() },
          { title: 'rest api', id: v4() },
          { title: 'css-modules', id: v4() },
          { title: 'typescript', id: v4() },
          { title: 'formik', id: v4() },
          { title: 'pure function', id: v4() },
          { title: 'hooks', id: v4() },
        ]}

      />
    </div>
  );
}

export default App;
