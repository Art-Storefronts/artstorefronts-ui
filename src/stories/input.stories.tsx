import { Meta, StoryFn } from "@storybook/react";
import { Input } from "@/components/ui/input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: StoryFn = (args) => (
  <div className="w-[450px]">
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "email",
  placeholder: "Email",
};
