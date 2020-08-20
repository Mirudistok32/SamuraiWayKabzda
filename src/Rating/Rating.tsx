import React from 'react';
import { Star, ValueType } from '../Star/Star';
import s from './Rating.module.scss'


type PropsType = {
  value: ValueType
  setValue?: (value: ValueType) => void
}

export const Rating = (props: PropsType) => {

  const { value, setValue } = props

  const onClickHandler = (value: ValueType) => {
    setValue && setValue(value)
  }

  return (
    <div className={s.rating}>
      <Star selected={value >= 1} onClick={() => onClickHandler(1)} />
      <Star selected={value >= 2} onClick={() => onClickHandler(2)} />
      <Star selected={value >= 3} onClick={() => onClickHandler(3)} />
      <Star selected={value >= 4} onClick={() => onClickHandler(4)} />
      <Star selected={value >= 5} onClick={() => onClickHandler(5)} />
    </div>
  );
}
