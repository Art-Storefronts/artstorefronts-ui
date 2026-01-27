import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <div>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </div>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args}>
      <div>
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>This is a destructive alert message. Be cautious!</AlertDescription>
      </div>
    </Alert>
  ),
};

export const WithLongDescription: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <div>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an alert with a longer description to provide more detailed information. Make sure to read everything carefully before proceeding. This text should give users a comprehensive understanding of the context and consequences.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const CustomStyledAlert: Story = {
  args: {
    variant: 'default',
    className: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  render: (args) => (
    <Alert {...args}>
      <div>
        <AlertTitle>Custom Styled Alert</AlertTitle>
        <AlertDescription>This alert has custom styles applied.</AlertDescription>
      </div>
    </Alert>
  ),
};
