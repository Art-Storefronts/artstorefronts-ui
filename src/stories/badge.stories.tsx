import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Badge Text',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Badge Text',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Badge Text',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Badge Text',
  },
};

export const CustomBadge: Story = {
  args: {
    variant: 'default',
    className: 'bg-blue-500 text-white border-blue-600',
    children: 'Custom Badge',
  },
};
