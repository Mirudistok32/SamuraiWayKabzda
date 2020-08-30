import React, { useState } from 'react';
import { AccordionTitle } from '../AccordionTitle/AccordionTitle';
import { AccordionBody } from '../AccordionBody/AccordionBody';

type PropsType = {
  title: string
}

export const UncontrolledAccordion = (props: PropsType) => {

  const { title } = props

  const [collapsed, setCollapsed] = useState<boolean>(true)

  return (
    <>
      <AccordionTitle title={title} onClick={() => setCollapsed(!collapsed)} />
      {
        !collapsed && <AccordionBody items={[]} onClick={(a = 8) => console.log('UncontrolledAccordion')} />
      }
    </>
  )
}

