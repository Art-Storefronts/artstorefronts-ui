import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TagInput } from "@/components/ui/tag-input";
import { AlertCircle } from "lucide-react";

export default {
  title: "Components/TagInput",
  component: TagInput,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) => {
  const [tags, setTags] = useState<string[]>(args.selectedTags);

  const handleAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="w-[320px]">
      <TagInput
        {...args}
        selectedTags={tags}
        onAddTag={handleAddTag}
        onRemoveTag={handleRemoveTag}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  selectedTags: [],
};

export const WithInitialTags = Template.bind({});
WithInitialTags.args = {
  selectedTags: ["animals", "nature", "photography"],
};

export const WithError = Template.bind({});
WithError.args = {
  selectedTags: ["animals"],
  error: "Please enter a valid tag name",
};

export const WithReactNodeError = Template.bind({});
WithReactNodeError.args = {
  selectedTags: ["animals"],
  error: (
    <span className="flex items-center mt-2 font-bold">
      <AlertCircle className="h-4 w-4 mr-2" />
      Invalid tag format
    </span>
  ),
};
