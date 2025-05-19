import type { Meta, StoryObj } from "@storybook/react";
import {
  Highlight,
  HighlightContent,
  HighlightTrigger,
} from "@/components/ui/highlight";
import { useState } from "react";

const meta: Meta<typeof Highlight> = {
  title: "Components/Highlight",
  component: Highlight,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex min-h-[200px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Highlight>;

const Trigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <HighlightTrigger
      className="cursor-default"
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </HighlightTrigger>
  );
};

export const Default: Story = {
  render: () => (
    <Highlight open>
      <Trigger>Highlight trigger</Trigger>
      <HighlightContent>This is a default highlight</HighlightContent>
    </Highlight>
  ),
};

export const WithBounce: Story = {
  render: () => (
    <Highlight open>
      <Trigger>Highlight trigger</Trigger>
      <HighlightContent bounce>This highlight bounces!</HighlightContent>
    </Highlight>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div className="flex gap-8">
      <Highlight open>
        <Trigger>Left</Trigger>
        <HighlightContent side="left">Appears on left</HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Top</Trigger>
        <HighlightContent side="top">Appears on top</HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Bottom</Trigger>
        <HighlightContent side="bottom">Appears below</HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Right</Trigger>
        <HighlightContent side="right">Appears on right</HighlightContent>
      </Highlight>
    </div>
  ),
};

export const CustomOffset: Story = {
  render: () => (
    <Highlight open>
      <Trigger>Highlight trigger</Trigger>
      <HighlightContent sideOffset={20} bounce>
        This highlight has a larger offset
      </HighlightContent>
    </Highlight>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <Highlight open={isOpen} onOpenChange={() => {}}>
          <Trigger>Highlight target</Trigger>
          <HighlightContent bounce>
            This highlight is controlled by the toggle button
          </HighlightContent>
        </Highlight>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md border px-4 py-2"
        >
          Toggle Highlight
        </button>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-16">
      <Highlight open>
        <Trigger>Primary</Trigger>
        <HighlightContent variant="primary">
          This is a primary highlight
        </HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Info</Trigger>
        <HighlightContent variant="info">
          This is an info highlight
        </HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Success</Trigger>
        <HighlightContent variant="success">
          This is a success highlight
        </HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Danger</Trigger>
        <HighlightContent variant="danger">
          This is a danger highlight
        </HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Warning</Trigger>
        <HighlightContent variant="warning">
          This is a warning highlight
        </HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Secondary</Trigger>
        <HighlightContent variant="secondary">
          This is a secondary highlight
        </HighlightContent>
      </Highlight>

      <Highlight open>
        <Trigger>Focus</Trigger>
        <HighlightContent variant="focus">
          This is a focus highlight
        </HighlightContent>
      </Highlight>
    </div>
  ),
};
