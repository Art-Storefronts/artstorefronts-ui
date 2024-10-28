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
      control: { 
        type: "number",
        min: 0,
        max: 10,
        step: 0.5
      },
      description: "Initial rating (0-10) to be displayed as 0-5 stars",
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

export const Default = Template.bind({});
Default.args = {};

export const WithInitialRating = Template.bind({});
WithInitialRating.args = {
  rating: 7,  // Will show 3.5 stars
};

export const WithHalfStar = Template.bind({});
WithHalfStar.args = {
  rating: 3,  // Will show 1.5 stars
};

export const Interactive = Template.bind({});
Interactive.args = {
  onRatingChange: (rating: number) =>
    alert(`You selected a rating of ${rating}/10`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  rating: 8,  // Will show 4 stars
};
