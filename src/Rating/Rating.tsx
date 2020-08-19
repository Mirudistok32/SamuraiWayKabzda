import React from 'react';
import { Star } from '../Star/Star';

type PropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: PropsType) => {

  const { value } = props

  return (
    <div className="rating">
      <Star selected={value >= 1} />
      <Star selected={value >= 2} />
      <Star selected={value >= 3} />
      <Star selected={value >= 4} />
      <Star selected={value >= 5} />
    </div>
  );
}
