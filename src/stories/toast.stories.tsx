import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToastAction, ToastActionElement, ToastProvider } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

export default {
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
} as Meta;

interface ToastStoryProps {
  title: string;
  description: string;
  variant: 'default' | 'destructive';
  action: ToastActionElement;
}

function Template({ action, title, description, variant }: ToastStoryProps) {
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
}

export const Simple: StoryFn<ToastStoryProps> = Template.bind({});
Simple.args = {
  description: 'Your message has been sent',
};

export const WithTitle: StoryFn<ToastStoryProps> = Template.bind({});
WithTitle.args = {
  title: 'Uh oh! Something went wrong.',
  description: 'There was a problem with your request.',
};

export const WithAction: StoryFn<ToastStoryProps> = Template.bind({});
WithAction.args = {
  title: 'Uh oh! Something went wrong.',
  description: 'There was a problem with your request.',
  action: <ToastAction altText="Try again">Try again</ToastAction>,
};

export const Desctructive: StoryFn<ToastStoryProps> = Template.bind({});
Desctructive.args = {
  variant: 'destructive',
  title: 'Uh oh! Something went wrong.',
  description: 'There was a problem with your request.',
};
