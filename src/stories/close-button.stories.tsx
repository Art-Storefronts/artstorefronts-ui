import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CloseButton, CloseButtonProps } from "@/components/ui/close-button";

export default {
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
} as Meta;

const Template: StoryFn<CloseButtonProps> = (args) => <CloseButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  size: "lg",
  color: "red",
};
