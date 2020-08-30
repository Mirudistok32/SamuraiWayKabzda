import React from 'react';
import { v4 } from 'uuid';

type PropsType = {
  items: Array<string>
}

export const AccordionBody: React.FC<PropsType> = (props) => {

  const { items } = props

  const itemsWatching = items.map(i => {
    return (
      <li key={v4()}>i</li>
    )
  })

  return (
    <ul>
      {
        itemsWatching
      }
    </ul>
  )
}

