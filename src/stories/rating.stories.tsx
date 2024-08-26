import { Meta, StoryFn } from "@storybook/react";
import { Rating } from "@/components/ui/rating";

type RatingProps = React.ComponentProps<typeof Rating>;

export default {
  title: "Components/Rating",
  component: Rating,
  args: {
    rating: 0,
    disabled: false,
    onRatingChange: (rating: number) =>
      console.log(`Rating selected: ${rating}`),
  },
  argTypes: {
    rating: {
      control: "number",
      description: "Initial rating to be displayed",
    },
    disabled: {
      control: "boolean",
      description: "Removes the ability to change the rating",
    },
    onRatingChange: { action: "rating changed" },
  },
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const Default: StoryFn<RatingProps> = Template.bind({});
Default.args = {};

export const WithInitialRating: StoryFn<RatingProps> = Template.bind({});
WithInitialRating.args = {
  rating: 3,
};

export const Interactive: StoryFn<RatingProps> = Template.bind({});
Interactive.args = {
  onRatingChange: (rating: number) =>
    alert(`You selected a rating of ${rating}`),
};

export const Disabled: StoryFn<RatingProps> = Template.bind({});
Disabled.args = {
  onRatingChange: () => {},
  disabled: true,
  rating: 4,
};
