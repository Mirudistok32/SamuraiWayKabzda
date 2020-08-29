import React from 'react';
import { UncontrolledAccordion } from './UncontrolledAccordion';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'My Components/UncontrolledAccordion',
  component: UncontrolledAccordion,
  argTypes: {

  }
} as Meta;

export const Change = () => <UncontrolledAccordion title="UncontrolledAccordion" />




