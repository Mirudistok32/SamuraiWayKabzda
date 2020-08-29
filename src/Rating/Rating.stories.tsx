import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { Rating } from './Rating';
import { ValueType } from '../Star/Star';


export default {
  title: 'My Components/Rating',
  component: Rating,
  argTypes: {
    
  },
} as Meta;

export const EmptyRating = () => <Rating value={0} />;
export const Rating1 = () => <Rating value={1} />;
export const Rating2 = () => <Rating value={2} />;
export const Rating3 = () => <Rating value={3} />;
export const Rating4 = () => <Rating value={4} />;
export const Rating5 = () => <Rating value={5} />;
export const ChangeRating = () => {
  const [rating, setRating] = useState<ValueType>(0)
  return <Rating value={rating} setValue={setRating} />
}




// const Template: Story<RatingProps> = (args) => <Rating {...args} />;
// export const EmptyRating = Template.bind({});
// EmptyRating.args = {
//   value: 0
// }
// export const Rating1 = Template.bind({})
// Rating1.args = {
//   value: 1
// }
// export const Rating2 = Template.bind({})
// Rating2.args = {
//   value: 2
// }
// export const Rating3 = Template.bind({})
// Rating3.args = {
//   value: 3
// }
// export const Rating4 = Template.bind({})
// Rating4.args = {
//   value: 4
// }
// export const Rating5 = Template.bind({})
// Rating5.args = {
//   value: 5
// }


