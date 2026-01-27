import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';

const meta = {
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
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-2">
        <Story />
        <label htmlFor="airplane-mode">Airplane Mode</label>
      </div>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'airplane-mode',
  },
};

export const Disabled: Story = {
  args: {
    id: 'airplane-mode',
    disabled: true,
  },
};
