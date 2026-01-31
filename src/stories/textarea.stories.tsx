import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Type your message here.',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {},
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <label className="text-sm" htmlFor="message">
        Your message
      </label>
      <Textarea {...args} id="message" />
    </div>
  ),
};

export const WithText: Story = {
  args: {},
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <label className="text-sm" htmlFor="message2">
        Your message
      </label>
      <Textarea {...args} id="message2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const WithButton: Story = {
  args: {},
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Textarea {...args} />
      <Button>Send message</Button>
    </div>
  ),
};
