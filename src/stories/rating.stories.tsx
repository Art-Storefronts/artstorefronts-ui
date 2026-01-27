import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@/components/ui/rating";

const meta = {
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
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithInitialRating: Story = {
  args: {
    rating: 7,  // Will show 3.5 stars
  },
};

export const WithHalfStar: Story = {
  args: {
    rating: 3,  // Will show 1.5 stars
  },
};

export const Interactive: Story = {
  args: {
    onRatingChange: (rating: number) =>
      alert(`You selected a rating of ${rating}/10`),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    rating: 8,  // Will show 4 stars
  },
};
