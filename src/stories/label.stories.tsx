import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'terms',
    children: 'Accept terms and conditions',
  },
};
