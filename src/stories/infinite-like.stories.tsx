import { Meta, StoryFn } from '@storybook/react';
import { InfiniteLikes } from '@/components/ui/infinite-likes';

export default {
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
} as Meta;

const Template: StoryFn = (args) => (
  <div className="flex items-center justify-center min-h-[200px]">
    <InfiniteLikes {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const WithInitialCount = Template.bind({});
WithInitialCount.args = {
  initialCount: 1337,
};

export const Active = Template.bind({});
Active.args = {
  defaultActive: true,
  initialCount: 1,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  className: "h-32 w-32",
  initialCount: 42,
};

export const Interactive = Template.bind({});
Interactive.args = {
  initialCount: 99,
  onLike: (count: number) => alert(`Like count is now: ${count}`),
};
