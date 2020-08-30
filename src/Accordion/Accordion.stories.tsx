import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions'
import { Accordion } from './Accordion';

export default {
  title: 'My Components/Accordion',
  component: Accordion,
  argTypes: {

  },
} as Meta;

export const Collapsed = () => <Accordion
  collapsed
  title={'Collapsed'} onClick={action('uncollapsed')}
  items={[]}
/>;

export const Uncollapsed = () => <Accordion
  collapsed={false}
  title={'Uncollapsed'}
  onClick={action('collapsed')}
  items={['react', 'redux', 'storybook', 'thunk', 'rest api', 'css-modules', 'typescript', 'formik', 'pure function', 'hooks']}
/>;

export const Toggle = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return <Accordion
    collapsed={collapsed}
    title={'Toggle'}
    onClick={() => setCollapsed(!collapsed)}
    items={['react', 'redux', 'storybook', 'thunk', 'rest api', 'css-modules', 'typescript', 'formik', 'pure function', 'hooks']}
  />
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


