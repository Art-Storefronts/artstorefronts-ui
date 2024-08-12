import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Textarea, TextareaProps } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Set up metadata for the component
export default {
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
} as Meta;

// Define the template for your component's stories
function Template({ placeholder, disabled }: TextareaProps) {
  return <Textarea placeholder={placeholder} disabled={disabled} />;
}

function LabelTemplate({ placeholder, disabled }: TextareaProps) {
  return (
    <div className="grid w-full gap-1.5">
      <label className="text-sm" htmlFor="message">
        Your message
      </label>
      <Textarea placeholder={placeholder} disabled={disabled} id="message" />
    </div>
  );
}

function TextTemplate({ placeholder, disabled }: TextareaProps) {
  return (
    <div className="grid w-full gap-1.5">
      <label className="text-sm" htmlFor="message2">
        Your message
      </label>
      <Textarea placeholder={placeholder} disabled={disabled} id="message2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}

function ButtonTemplate({ placeholder, disabled }: TextareaProps) {
  return (
    <div className="grid w-full gap-1.5">
      <Textarea placeholder={placeholder} disabled={disabled} />
      <Button>Send message</Button>
    </div>
  );
}

export const Default: StoryFn<TextareaProps> = Template.bind({});
Default.args = {};

export const Disabled: StoryFn<TextareaProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithLabel: StoryFn<TextareaProps> = LabelTemplate.bind({});
WithLabel.args = {};

export const WithText: StoryFn<TextareaProps> = TextTemplate.bind({});
WithText.args = {};

export const WithButton: StoryFn<TextareaProps> = ButtonTemplate.bind({});
WithButton.args = {};
