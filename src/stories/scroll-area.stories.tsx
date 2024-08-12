import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  args: {
    className: 'h-48 w-48',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'CSS classes to apply to the ScrollArea container.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '200px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} className="h-[200px] w-[300px] rounded-md border p-4">
      Jokester began sneaking into the castle in the middle of the night and leaving jokes all over
      the place: under the king's pillow, in his soup, even in the royal toilet. The king was
      furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom
      discovered that the jokes left by Jokester were so funny that they couldn't help but laugh.
      And once they started laughing, they couldn't stop.
    </ScrollArea>
  ),
};

type Artwork = {
  artist: string;
  art: string;
};

const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
];

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea {...args} className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={`By ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by <span className="font-semibold text-foreground">{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
