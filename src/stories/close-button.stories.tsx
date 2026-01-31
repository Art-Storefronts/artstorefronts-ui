import type { Meta, StoryObj } from "@storybook/react";
import { CloseButton, CloseButtonProps } from "@/components/ui/close-button";

const meta = {
  title: "Components/CloseButton",
  component: CloseButton,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const CustomColor: Story = {
  args: {
    size: "lg",
    color: "red",
  },
};
