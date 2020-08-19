import React, { useState } from 'react';
import { Star } from '../Star/Star';

type PropsType = {
}

export const UncontrolledRating = (props: PropsType) => {

  const { } = props
  const [value, setValue] = useState<number>(0)

  return (
    <div className="rating">
      <Star selected={value >= 1} onClick={() => setValue(1)}/>
      <Star selected={value >= 2} onClick={() => setValue(2)}/>
      <Star selected={value >= 3} onClick={() => setValue(3)}/>
      <Star selected={value >= 4} onClick={() => setValue(4)}/>
      <Star selected={value >= 5} onClick={() => setValue(5)}/>
    </div>
  );
}
