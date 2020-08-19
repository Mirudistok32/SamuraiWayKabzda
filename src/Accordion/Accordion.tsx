import React from 'react';
import { AccordionTitle } from '../AccordionTitle/AccordionTitle';
import { AccordionBody } from '../AccordionBody/AccordionBody';

type PropsType = {
  title: string
  collapsed: boolean
}

export const Accordion = (props: PropsType) => {

  const { title, collapsed } = props

  return (
    <>
      <AccordionTitle title={title} />
      {
        !collapsed && <AccordionBody />
      }
    </>
  )
}

