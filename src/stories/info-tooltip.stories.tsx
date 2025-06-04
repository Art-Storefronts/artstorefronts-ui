import type { Meta, StoryObj } from "@storybook/react";
import { InfoTooltip } from "@/components/ui/info-tooltip";

const meta: Meta<typeof InfoTooltip> = {
  title: "Components/InfoTooltip",
  component: InfoTooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex min-h-[200px] items-center justify-center bg-gray-50 p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InfoTooltip>;

export const Default: Story = {
  render: () => (
    <InfoTooltip
      title="Information"
      text="This is where the tooltip content shows. This is where the tooltip content shows. This is where the tooltip content shows. Here is the <a href='https://www.google.com' style='color:blue;text-decoration:underline;'>link</a> to the service page."
    />
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <InfoTooltip title="XS" text="Extra small icon" size="xs" />
      <InfoTooltip title="SM" text="Small icon" size="sm" />
      <InfoTooltip title="MD" text="Medium icon" size="md" />
      <InfoTooltip title="LG" text="Large icon" size="lg" />
      <InfoTooltip title="XL" text="Extra large icon" size="xl" />
    </div>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <InfoTooltip title="Left" text="Appears on the left" side="left" />
      <InfoTooltip title="Top" text="Appears on the top" side="top" />
      <InfoTooltip title="Bottom" text="Appears on the bottom" side="bottom" />
      <InfoTooltip title="Right" text="Appears on the right" side="right" />
    </div>
  ),
};

export const HtmlContent: Story = {
  render: () => (
    <InfoTooltip
      title="HTML Content"
      text="<b>This is bold text.</b> <br/><i>This is italic text.</i> <br/><a href='https://example.com' target='_blank' style='color:blue;text-decoration:underline;'>External link</a>"
    />
  ),
};
