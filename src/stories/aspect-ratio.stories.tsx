import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: 'number' },
      defaultValue: 16 / 9,
      description: 'The aspect ratio of the container (width/height).',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[450px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <AspectRatio {...args}>
      <img
        src="https://picsum.photos/300/300"
        alt="Aspect Ratio Example"
        className="w-full h-full object-cover"
      />
    </AspectRatio>
  ),
};

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <AspectRatio {...args}>
      <img
        src="https://picsum.photos/300/300"
        alt="Aspect Ratio Example"
        className="w-full h-full object-cover"
      />
    </AspectRatio>
  ),
};

export const FourThree: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: (args) => (
    <AspectRatio {...args}>
      <img
        src="https://picsum.photos/300/300"
        alt="Aspect Ratio Example"
        className="w-full h-full object-cover"
      />
    </AspectRatio>
  ),
};

export const Wide: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: (args) => (
    <AspectRatio {...args}>
      <img
        src="https://picsum.photos/300/300"
        alt="Aspect Ratio Example"
        className="w-full h-full object-cover"
      />
    </AspectRatio>
  ),
};
