import { Meta, StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from '@/components/ui/badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args}>Badge Text</Badge>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const CustomBadge = Template.bind({});
CustomBadge.args = {
  variant: 'default',
  className: 'bg-blue-500 text-white border-blue-600',
  children: 'Custom Badge',
};
