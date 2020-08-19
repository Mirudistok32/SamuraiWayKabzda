import React from 'react';
import { AccordionTitle } from '../AccordionTitle/AccordionTitle';
import { AccordionBody } from '../AccordionBody/AccordionBody';

type PropsType = {
  title: string
}

export const Accordion = (props: PropsType) => {
  
  const { title } = props

  return (
    <>
      <AccordionTitle title={title} />
      <AccordionBody />
    </>
  )
}

