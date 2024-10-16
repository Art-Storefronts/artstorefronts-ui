import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { SonnerToaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default {
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
} as Meta;

type Story = StoryObj<typeof SonnerToaster>;

const Template: StoryFn = (args) => {
  return (
    <div>
      <SonnerToaster {...args} />
      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={() => toast("This is a toast")}>
          {args.buttonText || "Show Toast"}
        </Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const CustomPosition = Template.bind({});
CustomPosition.args = {
  position: "bottom-center",
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

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  toastOptions: {
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      color: "white",
    },
  },
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
