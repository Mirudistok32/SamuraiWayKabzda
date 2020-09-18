import React from 'react';
import { v4 } from 'uuid';
import { IItemType } from '../Accordion/Accordion';

type PropsType = {
  items: Array<IItemType>
  onClick: (value: any) => void
}

export const AccordionBody: React.FC<PropsType> =  React.memo((props) => {

  const { items, onClick } = props

  const itemsWatching = items.map(i => {
    return (
      <li
        key={v4()}
        onClick={() => onClick(i.value)}
      >{i.title}</li>
    )
  })

  return (
    <ul>
      {
        itemsWatching
      }
    </ul>
  )
})

