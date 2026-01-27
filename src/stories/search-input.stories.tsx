import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { SearchInput } from "@/components/ui/search-input";

const meta = {
  title: "Components/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
};

export const CustomClassName: Story = {
  args: {
    className: "rounded-none focus:ring-blue-500",
  },
};
