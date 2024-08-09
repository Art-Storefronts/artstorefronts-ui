import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Github, Loader } from 'lucide-react';
import { StoryWrapper } from '@/lib/storywrapper';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <StoryWrapper>
    <Button {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'default',
  children: 'Default Button',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  size: 'default',
  children: 'Destructive Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
  children: 'Outline Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'default',
  children: 'Secondary Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'default',
  children: 'Ghost Button',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  size: 'default',
  children: 'Link Button',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
  children: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
  children: 'Large Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: 'default',
  size: 'icon',
  children: <Github className="h-4 w-4" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'default',
  disabled: true,
  children: 'Disabled Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'default',
  size: 'default',
  children: (
    <>
      <Github className="mr-2 h-4 w-4" /> GitHub
    </>
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'default',
  size: 'default',
  children: (
    <>
      <Loader className="mr-2 h-4 w-4 animate-spin" /> Loading...
    </>
  ),
};
