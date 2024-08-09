import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Switch } from '@/components/ui/switch';

type StoryProps = {
  disabled: boolean;
};

// Set up metadata for the component
export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

// Define the template for your component's stories
function Template({ disabled }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" disabled={disabled} />
      <label htmlFor="airplane-mode">Airplane Mode</label>
    </div>
  );
}

export const Default: StoryFn<StoryProps> = Template.bind({});
Default.args = {};

export const Disabled: StoryFn<StoryProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
