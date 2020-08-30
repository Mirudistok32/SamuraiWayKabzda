import React from 'react';
import { Star, ValueType } from '../Star/Star';
import s from './Rating.module.scss'


export type RatingProps = {
  value: ValueType
  setValue?: (value: ValueType) => void
  backgroundColor?: string
}

export const Rating = React.memo((props: RatingProps) => {

  const { value, setValue, backgroundColor } = props

  const onClickHandler = (value: ValueType) => {
    setValue && setValue(value)
  }

  return (
    <div className={s.rating} style={{ backgroundColor }}>
      <Star selected={value >= 1} onClick={() => onClickHandler(1)} />
      <Star selected={value >= 2} onClick={() => onClickHandler(2)} />
      <Star selected={value >= 3} onClick={() => onClickHandler(3)} />
      <Star selected={value >= 4} onClick={() => onClickHandler(4)} />
      <Star selected={value >= 5} onClick={() => onClickHandler(5)} />
    </div>
  );
})
