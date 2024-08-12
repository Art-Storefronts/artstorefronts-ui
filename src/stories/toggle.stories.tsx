import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'default',
  children: <Bold className="h-4 w-4" />,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
  children: <Italic className="h-4 w-4" />,
};

export const WithText = Template.bind({});
WithText.args = {
  variant: 'default',
  size: 'default',
  children: (
    <>
      <Italic className="h-4 w-4 mr-2" />
      Italic
    </>
  ),
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
  children: <Italic className="h-4 w-4" />,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
  children: <Italic className="h-4 w-4" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'lg',
  disabled: true,
  children: <Underline className="h-4 w-4" />,
};
