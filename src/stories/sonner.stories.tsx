import type { Meta, StoryObj } from "@storybook/react";
import { SonnerToaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const meta = {
  title: "Components/SonnerToaster",
  component: SonnerToaster,
  tags: ["autodocs"],
  args: {
    position: "top-right",
  },
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SonnerToaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <SonnerToaster />
      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={() => toast("This is a toast")}>
          Show Toast
        </Button>
      </div>
    </div>
  ),
};

export const CustomPosition: Story = {
  args: {
    position: "bottom-center",
  },
  render: (args) => (
    <div>
      <SonnerToaster {...args} />
      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={() => toast("This is a toast")}>
          Show Toast
        </Button>
      </div>
    </div>
  ),
};

export const RichRendering: Story = {
  args: {
    position: "top-right",
    richColors: true,
  },
  render: (args) => (
    <div>
      <SonnerToaster {...args} />
      <Button
        variant="outline"
        onClick={() => toast.success("This is a rich colors toast")}
      >
        Show Toast
      </Button>
    </div>
  ),
};

export const CloseButton: Story = {
  args: {
    position: "top-right",
    richColors: false,
    closeButton: true,
  },
  render: (args) => (
    <div>
      <SonnerToaster {...args} />
      <Button
        variant="outline"
        onClick={() => toast.success("This is a toast with a close button")}
      >
        Show Toast
      </Button>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    toastOptions: {
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        color: "white",
      },
    },
  },
  render: (args) => (
    <div>
      <SonnerToaster {...args} />
      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={() => toast("This is a toast")}>
          Show Toast
        </Button>
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {
    position: "top-center",
  },
  render: (args) => (
    <div>
      <SonnerToaster {...args} />
      <Button
        variant="outline"
        onClick={() =>
          toast.custom((t) => (
            <div className="w-[356px] relative bg-neutral-900 text-white p-4 rounded-md flex items-center justify-between">
              <h1>Custom toast</h1>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => toast.dismiss(t)}
              >
                Dismiss
              </Button>
            </div>
          ))
        }
      >
        Show Toast
      </Button>
    </div>
  ),
};
