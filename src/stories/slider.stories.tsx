import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  args: {
    defaultValue: [0],
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    inverted: false,
  },
  argTypes: {
    defaultValue: {
      control: 'object',
    },
    disabled: {
      control: 'boolean',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    inverted: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithStep: Story = {
  args: {
    step: 10,
  },
};

export const Inverted: Story = {
  args: {
    inverted: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
};
