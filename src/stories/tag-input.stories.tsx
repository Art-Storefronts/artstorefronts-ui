import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TagInput } from "@/components/ui/tag-input";

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
