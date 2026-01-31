import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteLikes } from '@/components/ui/infinite-likes';

const meta = {
  title: 'Components/InfiniteLikes',
  component: InfiniteLikes,
  args: {
    defaultActive: false,
    initialCount: 0,
  },
  argTypes: {
    defaultActive: {
      control: 'boolean',
      description: 'Initial active state of the like button',
    },
    initialCount: {
      control: 'number',
      description: 'Initial count of likes',
    },
    onLike: { 
      action: 'liked',
      description: 'Callback function when like state changes' 
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfiniteLikes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center justify-center min-h-[200px]">
      <InfiniteLikes {...args} />
    </div>
  ),
};

export const WithInitialCount: Story = {
  args: {
    initialCount: 1337,
  },
  render: (args) => (
    <div className="flex items-center justify-center min-h-[200px]">
      <InfiniteLikes {...args} />
    </div>
  ),
};

export const Active: Story = {
  args: {
    defaultActive: true,
    initialCount: 1,
  },
  render: (args) => (
    <div className="flex items-center justify-center min-h-[200px]">
      <InfiniteLikes {...args} />
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    className: "h-32 w-32",
    initialCount: 42,
  },
  render: (args) => (
    <div className="flex items-center justify-center min-h-[200px]">
      <InfiniteLikes {...args} />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    initialCount: 99,
    onLike: (count: number) => alert(`Like count is now: ${count}`),
  },
  render: (args) => (
    <div className="flex items-center justify-center min-h-[200px]">
      <InfiniteLikes {...args} />
    </div>
  ),
};
