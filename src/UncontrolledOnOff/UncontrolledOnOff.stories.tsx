import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { UncontrolledOnOff } from './UncontrolledOnOff';

export default {
  title: 'My Components/UncontrolledOnOff',
  component: UncontrolledOnOff,
  argTypes: {
    
  },
} as Meta;

export const On = () => <UncontrolledOnOff defaultOn={true}/>;
export const Off = () => <UncontrolledOnOff defaultOn={false}/>;
