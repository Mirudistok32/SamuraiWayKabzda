import React from 'react';
import s from './Star.module.scss';

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
  selected: boolean
  onClick?: () => void
}


export const Star = React.memo((props: PropsType) => {
  const { selected, onClick } = props

  let mainClass = [s.star]
  if (selected) {
    mainClass.push(s.star__selected)
  }


  const onClickHandler = () => {
    onClick && onClick()
  }


  return (
    <>
      <span className={mainClass.join(' ')} onClick={onClickHandler}>★</span>
    </>
  )
})
