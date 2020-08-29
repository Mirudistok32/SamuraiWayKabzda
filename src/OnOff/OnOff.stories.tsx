import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { OnOff } from './OnOff';

export default {
  title: 'My Components/OnOff',
  component: OnOff,
  argTypes: {

  },
} as Meta;

export const On = () => <OnOff active />;
export const Off = () => <OnOff active={false} />;
export const ChangeOnOff = () => {
  const [active, setActive] = useState<boolean>(true)
  return <OnOff active={active} onClick={() => setActive(!active)} />
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


