import { Meta, StoryFn } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default {
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
} as Meta;

const Template: StoryFn = (args) => (
  <Alert {...args}>
    <div>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </div>
  </Alert>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  title: 'Default Alert',
  description: 'This is a default alert message.',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  title: 'Destructive Alert',
  description: 'This is a destructive alert message. Be cautious!',
};

export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  variant: 'default',
  title: 'Information',
  description:
    'This is an alert with a longer description to provide more detailed information. Make sure to read everything carefully before proceeding. This text should give users a comprehensive understanding of the context and consequences.',
};

export const CustomStyledAlert = Template.bind({});
CustomStyledAlert.args = {
  variant: 'default',
  title: 'Custom Styled Alert',
  description: 'This alert has custom styles applied.',
  className: 'bg-blue-100 text-blue-700 border-blue-200',
};
