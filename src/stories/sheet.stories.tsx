import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleXIcon } from "lucide-react";

type StoryProps = {
  side: "left" | "right" | "top" | "bottom";
  closeIcon: React.ReactNode;
};

// Set up metadata for the component
export default {
  title: "Components/Sheet",
  component: Sheet,
  args: {
    side: "right",
    closeIcon: "",
  },
  argTypes: {
    side: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    closeIcon: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

// Define the template for your component's stories
function Template({ side, closeIcon }: StoryProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key={side}>
        <SheetTrigger asChild>
          <Button variant="outline">{side.toUpperCase()}</Button>
        </SheetTrigger>
        <SheetContent side={side} closeIcon={closeIcon}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right">
                Username
              </label>
              <input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export const Left: StoryFn<StoryProps> = Template.bind({});
Left.args = {
  side: "left",
};

export const Right: StoryFn<StoryProps> = Template.bind({});
Right.args = {
  side: "right",
};

export const Top: StoryFn<StoryProps> = Template.bind({});
Top.args = {
  side: "top",
};

export const Bottom: StoryFn<StoryProps> = Template.bind({});
Bottom.args = {
  side: "bottom",
};

export const WithCustomCloseIcon: StoryFn<StoryProps> = Template.bind({});
WithCustomCloseIcon.args = {
  side: "right",
  closeIcon: <CircleXIcon className="h-7 w-7 text-red-500" />,
};
