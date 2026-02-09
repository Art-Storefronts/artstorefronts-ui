import type { Meta, StoryObj } from "@storybook/react";
import { SonnerToaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const meta = {
  title: "Components/Sonner",
  component: SonnerToaster,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div>
        <SonnerToaster />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SonnerToaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("Event has been created")}>
      Render toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
    >
      Render toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.success("Event has been created")}>
      Render toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.error("Event has not been created")}>
      Render toast
    </Button>
  ),
};

export const Info: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.info("Be at the area 10 minutes before the event time")}>
      Render toast
    </Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.warning("Event start time cannot be earlier than 8am")}>
      Render toast
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          action: {
            label: "Undo",
            onClick: () => toast("Undo clicked"),
          },
        })
      }
    >
      Render toast
    </Button>
  ),
};

export const WithCancel: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          cancel: {
            label: "Cancel",
            onClick: () => toast("Cancel clicked"),
          },
        })
      }
    >
      Render toast
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.loading("Loading...")}
    >
      Render toast
    </Button>
  ),
};

export const Custom: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.custom((t) => (
          <div className="w-full bg-background border border-border rounded-lg p-4 shadow-lg">
            <p className="font-semibold">Custom Toast</p>
            <p className="text-sm text-muted-foreground mt-1">This is a custom toast component</p>
          </div>
        ))
      }
    >
      Render toast
    </Button>
  ),
};

export const Position: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            position: "top-left",
          })
        }
      >
        Top Left
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            position: "top-center",
          })
        }
      >
        Top Center
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            position: "top-right",
          })
        }
      >
        Top Right
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            position: "bottom-left",
          })
        }
      >
        Bottom Left
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            position: "bottom-center",
          })
        }
      >
        Bottom Center
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast("Event has been created", {
            position: "bottom-right",
          })
        }
      >
        Bottom Right
      </Button>
    </div>
  ),
};
