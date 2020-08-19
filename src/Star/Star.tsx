import React from 'react';
import s from './Star.module.scss';

type PropsType = {
  selected: boolean
}

export const Star = (props: PropsType) => {

  const { selected } = props

  let mainClass = [s.star]
  if (selected) {
    mainClass.push(s.star__selected)
  }

  return (
    <>
      <span className={mainClass.join(' ')}>★</span>
    </>
  )
}
