import { Meta, StoryFn } from '@storybook/react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: 'number' },
      defaultValue: 16 / 9,
      description: 'The aspect ratio of the container (width/height).',
    },
  },
} as Meta;

const Template: StoryFn<{ ratio: number }> = (args) => (
  <div className="w-[450px]">
    <AspectRatio ratio={args.ratio}>
      <img
        src="https://via.placeholder.com/300"
        alt="Aspect Ratio Example"
        className="w-full h-full object-cover"
      />
    </AspectRatio>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ratio: 16 / 9,
};

export const Square = Template.bind({});
Square.args = {
  ratio: 1,
};

export const FourThree = Template.bind({});
FourThree.args = {
  ratio: 4 / 3,
};

export const Wide = Template.bind({});
Wide.args = {
  ratio: 21 / 9,
};
