import React from 'react';
import { AccordionTitle } from '../AccordionTitle/AccordionTitle';
import { AccordionBody } from '../AccordionBody/AccordionBody';

type PropsType = {
  title: string
  collapsed: boolean
  onClick?: () => void
  items: Array<string>
}

export const Accordion = (props: PropsType) => {

  const { title, collapsed, onClick, items } = props

  const onClickHandler = () => {
    onClick && onClick()
  }

  return (
    <>
      <AccordionTitle title={title} onClick={onClickHandler} />
      {
        !collapsed && <AccordionBody items={items} />
      }
    </>
  )
}

