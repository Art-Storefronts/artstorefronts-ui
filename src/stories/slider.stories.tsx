import { Meta, StoryFn } from '@storybook/react';
import { Slider } from '@/components/ui/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

// Set up metadata for the component
export default {
  title: 'Components/Slider',
  component: Slider,
  args: {
    defaultValue: [0],
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    inverted: false,
  },
  argTypes: {
    defaultValue: {
      control: 'object',
    },
    disabled: {
      control: 'boolean',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    inverted: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} as Meta;

// Define the template for your component's stories
function Template({ disabled, defaultValue, min, max, step, inverted }: SliderProps) {
  return (
    <div className="w-80">
      <Slider
        disabled={disabled}
        defaultValue={defaultValue ? defaultValue : [0]}
        min={min}
        max={max}
        step={step}
        inverted={inverted}
      />
    </div>
  );
}

export const Default: StoryFn<SliderProps> = Template.bind({});
Default.args = {};

export const WithStep: StoryFn<SliderProps> = Template.bind({});
WithStep.args = {
  step: 10,
};

export const Inverted: StoryFn<SliderProps> = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Disabled: StoryFn<SliderProps> = Template.bind({});
Disabled.args = {
  defaultValue: [50],
  disabled: true,
};
