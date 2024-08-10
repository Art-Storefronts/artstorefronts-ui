import type { Meta, StoryFn } from '@storybook/react';
import { Separator } from '@/components/ui/separator';
import { SeparatorProps } from '@radix-ui/react-separator';

export default {
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
} as Meta;

function HorizontalTemplate({ orientation, decorative }: SeparatorProps) {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Title</h4>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Separator className="my-4" orientation={orientation} decorative={decorative} />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Title</h4>
        <p className="text-sm text-muted-foreground">
          Quisque nec cursus augue. Etiam vel blandit augue.
        </p>
      </div>
      <Separator className="my-4" orientation={orientation} decorative={decorative} />
    </div>
  );
}

function VerticalTemplate({ orientation, decorative }: SeparatorProps) {
  return (
    <div>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation={orientation} decorative={decorative} />
        <div>Docs</div>
        <Separator orientation={orientation} decorative={decorative} />
        <div>Source</div>
      </div>
    </div>
  );
}

export const Horizontal: StoryFn<typeof Separator> = HorizontalTemplate.bind({});
Horizontal.args = {
  orientation: 'horizontal',
};

export const Vertical: StoryFn<typeof Separator> = VerticalTemplate.bind({});
Vertical.args = {
  orientation: 'vertical',
};
