import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MultiSelectPills } from "@/components/ui/multi-select-pills";

const meta: Meta<typeof MultiSelectPills> = {
  title: "Components/MultiSelectPills",
  component: MultiSelectPills,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MultiSelectPills>;

const Template: Story = {
  render: (args) => {
    const [selectedOptions, setSelectedTags] = useState<string[]>([]);
    return (
      <MultiSelectPills
        {...args}
        selectedOptions={selectedOptions}
        onChange={setSelectedTags}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    options: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    maxSelected: 3,
  },
};

export const PreSelected: Story = {
  ...Template,
  args: {
    options: ["Red", "Green", "Blue", "Yellow", "Purple"],
    maxSelected: 4,
  },
  render: (args) => {
    const [selectedOptions, setSelectedTags] = useState<string[]>([
      "Red",
      "Blue",
    ]);
    return (
      <MultiSelectPills
        {...args}
        selectedOptions={selectedOptions}
        onChange={setSelectedTags}
      />
    );
  },
};

export const SingleSelection: Story = {
  ...Template,
  args: {
    options: ["Apple", "Banana", "Cherry", "Date", "Elderberry"],
    maxSelected: 1,
  },
};
