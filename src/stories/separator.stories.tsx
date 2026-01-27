import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator.',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is purely decorative.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Title</h4>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Separator className="my-4" {...args} />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Title</h4>
        <p className="text-sm text-muted-foreground">
          Quisque nec cursus augue. Etiam vel blandit augue.
        </p>
      </div>
      <Separator className="my-4" {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator {...args} />
        <div>Docs</div>
        <Separator {...args} />
        <div>Source</div>
      </div>
    </div>
  ),
};
