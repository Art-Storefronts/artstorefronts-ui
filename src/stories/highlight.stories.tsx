import type { Meta, StoryObj } from "@storybook/react";
import {
  Highlight,
  HighlightContent,
  HighlightTrigger,
} from "@/components/ui/highlight";
import { useState, useRef } from "react";

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

export const ScrollingTest: Story = {
  render: () => {
    return (
      <div className="relative h-[600px] w-[400px] overflow-auto border border-gray-200">
        {/* Fixed header that will overlap with scrolling content */}
        <div className="sticky top-0 z-10 bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold">Fixed Header</h2>
          <p className="text-sm text-gray-600">
            Scroll down to see highlights hide behind this header
          </p>
        </div>

        {/* Scrollable content with highlights */}
        <div className="space-y-8 p-4">
          <div className="relative h-[200px] bg-gray-50 p-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Highlight open>
                <Trigger>First Highlight</Trigger>
                <HighlightContent>Hidden behind header</HighlightContent>
              </Highlight>
            </div>
          </div>

          <div className="relative h-[200px] bg-gray-50 p-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Highlight open>
                <Trigger>Second Highlight</Trigger>
                <HighlightContent variant="info">
                  Info highlight
                </HighlightContent>
              </Highlight>
            </div>
          </div>

          <div className="relative h-[200px] bg-gray-50 p-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Highlight open>
                <Trigger>Third Highlight</Trigger>
                <HighlightContent variant="success">
                  Success highlight
                </HighlightContent>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
