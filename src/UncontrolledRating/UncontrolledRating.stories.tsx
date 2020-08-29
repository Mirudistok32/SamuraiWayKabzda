import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { UncontrolledRating } from './UncontrolledRating';
import { action } from '@storybook/addon-actions';

export default {
  title: 'My Components/UncontrolledRating',
  component: UncontrolledRating,
  argTypes: {

  },
} as Meta;

const callback = action('rating changed')

export const Default = () => <UncontrolledRating onChange={callback} />;
export const Default1 = () => <UncontrolledRating defaultValue={1} onChange={callback} />;
export const Default2 = () => <UncontrolledRating defaultValue={2} onChange={callback} />;
export const Default3 = () => <UncontrolledRating defaultValue={3} onChange={callback} />;
export const Default4 = () => <UncontrolledRating defaultValue={4} onChange={callback} />;
export const Default5 = () => <UncontrolledRating defaultValue={5} onChange={callback} />;

