import React, { useReducer } from 'react';
import { AccordionTitle } from '../AccordionTitle/AccordionTitle';
import { AccordionBody } from '../AccordionBody/AccordionBody';
import { v4 } from 'uuid';
import { reducer, TOGGLE_COLLAPSED } from './reducer';

type PropsType = {
  title: string
}

export const UncontrolledAccordion = (props: PropsType) => {

  const { title } = props

  // const [collapsed, setCollapsed] = useState<boolean>(true)
  //2-й параметр - это функция, которая будем позвалять нам отправлять экшены
  const [collapsed, dispatch] = useReducer(reducer, { collapsed: false })

  return (
    <>
      <AccordionTitle title={title} onClick={() => dispatch({ type: TOGGLE_COLLAPSED })} />
      {
        !collapsed.collapsed && <AccordionBody items={[
          { title: 'react', value: v4() },
          { title: 'redux', value: v4() },
          { title: 'storybook', value: v4() },
          { title: 'thunk', value: v4() },
          { title: 'rest api', value: v4() },
          { title: 'css-modules', value: v4() },
          { title: 'typescript', value: v4() },
          { title: 'formik', value: v4() },
          { title: 'pure function', value: v4() },
          { title: 'hooks', value: v4() },
        ]} onClick={(a = 8) => console.log('UncontrolledAccordion')} />
      }
    </>
  )
}

