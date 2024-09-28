import { Meta, StoryFn } from "@storybook/react";
import {
  FeatureButton,
  FeatureButtonProps,
} from "@/components/ui/feature-button";
import { PlusIcon, SettingsIcon, TrashIcon } from "lucide-react";

export default {
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
} as Meta<FeatureButtonProps>;

const Template: StoryFn<FeatureButtonProps> = (args) => (
  <div className="w-80">
    <FeatureButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: "Feature Button",
  variant: "default",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Settings",
  icon: <SettingsIcon />,
  variant: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  text: "Add Artwork",
  icon: <PlusIcon />,
  variant: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  text: "Edit Title",
  variant: "ghost",
};

export const Destructive = Template.bind({});
Destructive.args = {
  text: "Delete",
  icon: <TrashIcon />,
  variant: "destructive",
};
