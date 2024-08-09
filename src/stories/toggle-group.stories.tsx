import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

export default {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  subcomponents: { ToggleGroupItem },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
    },
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<typeof ToggleGroup> = (args) => (
  <ToggleGroup {...args}>
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'default',
  type: 'multiple',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
  type: 'multiple',
};

export const Single = Template.bind({});
Single.args = {
  variant: 'default',
  size: 'default',
  type: 'single',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
  type: 'multiple',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
  type: 'multiple',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'lg',
  disabled: true,
  type: 'multiple',
};
