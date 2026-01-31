import type { Meta, StoryObj } from "@storybook/react";
import { TagInput } from "@/components/ui/tag-input";
import { AlertCircle } from "lucide-react";

const meta = {
  title: "Components/TagInput",
  component: TagInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedTags: [],
  },
};

export const WithInitialTags: Story = {
  args: {
    selectedTags: ["animals", "nature", "photography"],
  },
};

export const WithError: Story = {
  args: {
    selectedTags: ["animals"],
    error: "Please enter a valid tag name",
  },
};

export const WithReactNodeError: Story = {
  args: {
    selectedTags: ["animals"],
    error: (
      <span className="flex items-center mt-2 font-bold">
        <AlertCircle className="h-4 w-4 mr-2" />
        Invalid tag format
      </span>
    ),
  },
};
