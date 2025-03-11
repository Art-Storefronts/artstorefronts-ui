import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TimezoneSelector } from "@/components/ui/timezone-selector";

const meta: Meta<typeof TimezoneSelector> = {
  title: "Components/TimezoneSelector",
  component: TimezoneSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimezoneSelector>;

// Basic example with controlled state
export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [timezone, setTimezone] = useState("America/New_York");
    return <TimezoneSelector value={timezone} onValueChange={setTimezone} />;
  },
};

// Example with custom placeholder
export const CustomPlaceholder: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [timezone, setTimezone] = useState("Europe/London");
    return (
      <TimezoneSelector
        value={timezone}
        onValueChange={setTimezone}
        placeholder="Find your timezone..."
      />
    );
  },
};

// Example showing selection from different regions
export const DifferentRegions: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-1">North America:</p>
          <TimezoneSelector
            value="America/Los_Angeles"
            onValueChange={() => {}}
          />
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Europe:</p>
          <TimezoneSelector value="Europe/Paris" onValueChange={() => {}} />
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Asia:</p>
          <TimezoneSelector value="Asia/Singapore" onValueChange={() => {}} />
        </div>
        <div>
          <p className="text-sm font-medium mb-1">UTC:</p>
          <TimezoneSelector value="Etc/UTC" onValueChange={() => {}} />
        </div>
      </div>
    );
  },
};
