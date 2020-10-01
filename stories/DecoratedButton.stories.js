import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'diMosella/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = (args) => <Button {...args}>Decorated</Button>;

export const Normal = Template.bind({});
Normal.args = {};

export const Hover = Template.bind({});
Hover.args = {
  'data-label': true
};

export const Focus = Template.bind({});
Focus.args = {
  'data-focus': true
};

export const Active = Template.bind({});
Active.args = {
  'data-active': true
};

export const Disabled = Template.bind({});
Disabled.args = {
  'data-disabled': true
};
