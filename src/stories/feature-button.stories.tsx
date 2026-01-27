import type { Meta, StoryObj } from "@storybook/react";
import {
  FeatureButton,
  FeatureButtonProps,
} from "@/components/ui/feature-button";
import { PlusIcon, SettingsIcon, TrashIcon } from "lucide-react";

const meta = {
  title: "Components/FeatureButton",
  component: FeatureButton,
  argTypes: {
    text: {
      control: "text",
      description: "The text to display inside the button",
    },
    icon: {
      control: "text",
      description: "Optional icon to display inside the button",
    },
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive"],
      description: "The variant of the button",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the button",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the button",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Feature Button",
    variant: "default",
  },
  render: (args) => (
    <div className="w-80">
      <FeatureButton {...args} />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    text: "Settings",
    icon: <SettingsIcon />,
    variant: "default",
  },
  render: (args) => (
    <div className="w-80">
      <FeatureButton {...args} />
    </div>
  ),
};

export const Outline: Story = {
  args: {
    text: "Add Artwork",
    icon: <PlusIcon />,
    variant: "outline",
  },
  render: (args) => (
    <div className="w-80">
      <FeatureButton {...args} />
    </div>
  ),
};

export const Ghost: Story = {
  args: {
    text: "Edit Title",
    variant: "ghost",
  },
  render: (args) => (
    <div className="w-80">
      <FeatureButton {...args} />
    </div>
  ),
};

export const Destructive: Story = {
  args: {
    text: "Delete",
    icon: <TrashIcon />,
    variant: "destructive",
  },
  render: (args) => (
    <div className="w-80">
      <FeatureButton {...args} />
    </div>
  ),
};
