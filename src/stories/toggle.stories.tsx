import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: <Bold className="h-4 w-4" />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: <Italic className="h-4 w-4" />,
  },
};

export const WithText: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: (
      <>
        <Italic className="h-4 w-4 mr-2" />
        Italic
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: <Italic className="h-4 w-4" />,
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: <Italic className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    disabled: true,
    children: <Underline className="h-4 w-4" />,
  },
};
