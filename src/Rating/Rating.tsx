import React from 'react';
import { Star } from '../Star/Star';

type PropsType = {
  value: number
}

export const Rating = (props: PropsType) => {

  const { value } = props
  switch (value) {
    case 1: {
      return <div className="rating">
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    }
    case 2: {
      return <div className="rating">
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    }
    case 3: {
      return <div className="rating">
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    }
    case 4: {
      return <div className="rating">
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </div>
    }
    case 5: {
      return <div className="rating">
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </div>
    }
  }

  return (
    <div className="rating">
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
}
