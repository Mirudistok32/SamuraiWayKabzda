import React from 'react';
import s from './Star.module.scss';

type PropsType = {
  selected: boolean
  onClick?: () => void
}

export const Star = (props: PropsType) => {

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
      <span className={mainClass.join(' ')} onClick={onClick} >★</span>
    </>
  )
}
