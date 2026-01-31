import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Github, Loader } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default', 'lg', 'xl', '2xl', '3xl', '4xl', 'icon', 'icon-xs', 'icon-sm', 'icon-lg', 'icon-xl', 'icon-2xl', 'icon-3xl', 'icon-4xl'],
    },
    asChild: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: (
      <>
        <Github className="mr-2 h-4 w-4" /> GitHub
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: (
      <>
        <Loader className="mr-2 h-4 w-4 animate-spin" /> Loading...
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2X Large</Button>
      <Button size="3xl">3X Large</Button>
      <Button size="4xl">4X Large</Button>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button size="icon-xs"><Github /></Button>
      <Button size="icon-sm"><Github /></Button>
      <Button size="icon"><Github /></Button>
      <Button size="icon-lg"><Github /></Button>
      <Button size="icon-xl"><Github /></Button>
      <Button size="icon-2xl"><Github /></Button>
      <Button size="icon-3xl"><Github /></Button>
      <Button size="icon-4xl"><Github /></Button>
    </div>
  ),
};
