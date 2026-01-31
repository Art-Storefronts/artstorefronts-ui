import type { Meta, StoryObj } from '@storybook/react';
import { ToastAction, ToastActionElement, ToastProvider } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Components/Toast',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = ({ action, title, description, variant }: { action?: ToastActionElement; title?: string; description?: string; variant?: 'default' | 'destructive' }) => {
  const { toast } = useToast();

  return (
    <ToastProvider>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant,
            title,
            description,
            action,
          });
        }}
      >
        Show Toast
      </Button>
    </ToastProvider>
  );
};

export const Simple: Story = {
  render: () => <ToastDemo description="Your message has been sent" />,
};

export const WithTitle: Story = {
  render: () => (
    <ToastDemo
      title="Uh oh! Something went wrong."
      description="There was a problem with your request."
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastDemo
      title="Uh oh! Something went wrong."
      description="There was a problem with your request."
      action={<ToastAction altText="Try again">Try again</ToastAction>}
    />
  ),
};

export const Desctructive: Story = {
  render: () => (
    <ToastDemo
      variant="destructive"
      title="Uh oh! Something went wrong."
      description="There was a problem with your request."
    />
  ),
};
