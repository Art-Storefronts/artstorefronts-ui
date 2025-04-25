import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ColorPicker } from "@/components/ui/color-picker";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

// Default story with controlled state
export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [color, setColor] = useState("#FF5733");
    return <ColorPicker value={color} onChange={setColor} />;
  },
};

// Story showing different initial colors
export const DifferentColors: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <ColorPicker value="#FF0000" onChange={() => {}} />
        <ColorPicker value="#00FF00" onChange={() => {}} />
        <ColorPicker value="#0000FF" onChange={() => {}} />
        <ColorPicker value="#FFFF00" onChange={() => {}} />
      </div>
    );
  },
};

// Story showing disabled state
export const Disabled: Story = {
  render: () => <ColorPicker value="#FF5733" onChange={() => {}} disabled />,
};

// Story showing custom sizes
export const CustomSizes: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-4">
        <ColorPicker value="#FF5733" onChange={() => {}} className="h-8 w-8" />
        <ColorPicker
          value="#FF5733"
          onChange={() => {}}
          className="h-12 w-12"
        />
        <ColorPicker
          value="#FF5733"
          onChange={() => {}}
          className="h-16 w-16"
        />
      </div>
    );
  },
};

// Story showing with onBlur handling
export const WithBlurHandler: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [color, setColor] = useState("#FF5733");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blurCount, setBlurCount] = useState(0);

    return (
      <div className="text-center">
        <ColorPicker
          value={color}
          onChange={setColor}
          onBlur={() => setBlurCount((prev) => prev + 1)}
        />
        <p className="mt-4 text-sm text-gray-500">Blur events: {blurCount}</p>
      </div>
    );
  },
};

export const HexInputVariants: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [color1, setColor1] = useState("#FF5733");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [color2, setColor2] = useState("#4287f5");

    return (
      <div className="flex gap-8 items-start">
        <div className="text-center">
          <p className="mb-4 text-sm text-gray-500">With Hex Input (Default)</p>
          <ColorPicker
            value={color1}
            onChange={setColor1}
            showHexInput={true}
          />
        </div>
        <div className="text-center">
          <p className="mb-4 text-sm text-gray-500">Without Hex Input</p>
          <ColorPicker
            value={color2}
            onChange={setColor2}
            showHexInput={false}
          />
        </div>
      </div>
    );
  },
};

export const CustomButtonStyles: Story = {
  render: () => {
    return (
      <div className="flex gap-6 items-center">
        <div className="text-center">
          <p className="mb-4 text-sm text-gray-500">Rounded</p>
          <ColorPicker
            value="#FF5733"
            onChange={() => {}}
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="text-center">
          <p className="mb-4 text-sm text-gray-500">Square</p>
          <ColorPicker
            value="#4287f5"
            onChange={() => {}}
            className="h-10 w-10 rounded-none"
          />
        </div>
        <div className="text-center">
          <p className="mb-4 text-sm text-gray-500">Large Rounded</p>
          <ColorPicker
            value="#2ecc71"
            onChange={() => {}}
            className="h-16 w-16 rounded-2xl border-2"
          />
        </div>
        <div className="text-center">
          <p className="mb-4 text-sm text-gray-500">Custom Border</p>
          <ColorPicker
            value="#e74c3c"
            onChange={() => {}}
            className="h-12 w-12 rounded-xl border-2 border-gray-400 hover:border-gray-600 transition-colors"
          />
        </div>
      </div>
    );
  },
};
