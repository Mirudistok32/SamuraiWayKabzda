import React from 'react';
import { AccordionTitle } from '../AccordionTitle/AccordionTitle';
import { AccordionBody } from '../AccordionBody/AccordionBody';

export interface IItemType {
  title: string,
  value: any
}

type PropsType = {
  title: string
  collapsed: boolean
  items: Array<IItemType>
  onChange?: () => void
  onClick: (value: any) => void
}

export const Accordion =  React.memo((props: PropsType) => {

  const { title, collapsed, onClick, onChange, items } = props

  const onClickHandler = () => {
    onChange && onChange()
  }

  return (
    <>
      <AccordionTitle title={title} onClick={onClickHandler} />
      {
        !collapsed && <AccordionBody items={items} onClick={onClick} />
      }
    </>
  )
})

