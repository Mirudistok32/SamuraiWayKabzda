import React, { useState } from 'react';
import { Star, ValueType } from '../Star/Star';

type PropsType = {
  defaultValue?: ValueType,
  onChange?: (value: ValueType) => void
}

export const UncontrolledRating =  React.memo((props: PropsType) => {

  const { defaultValue, onChange } = props
  const [value, setValue] = useState<ValueType>(defaultValue ? defaultValue : 0)

  const onClickHandler = (count: ValueType) => {
    setValue(count)
    onChange && onChange(count)
  }

  return (
    <div className="rating">
      <Star selected={value >= 1} onClick={() => onClickHandler(1)} />
      <Star selected={value >= 2} onClick={() => onClickHandler(2)} />
      <Star selected={value >= 3} onClick={() => onClickHandler(3)} />
      <Star selected={value >= 4} onClick={() => onClickHandler(4)} />
      <Star selected={value >= 5} onClick={() => onClickHandler(5)} />
    </div>
  );
})
