import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { SearchInput } from "@/components/ui/search-input";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<typeof SearchInput> = (args) => {
  const [value, setValue] = useState("");

  return (
    <div className="min-w-[300px]">
      <SearchInput
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: action("Search submitted"),
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  className: "rounded-none focus:ring-blue-500",
};
