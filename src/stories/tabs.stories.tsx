import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: { TabsList, TabsTrigger, TabsContent },
  args: {
    defaultValue: "one",
  },
  argTypes: {
    defaultValue: {
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "one",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two">Two</TabsTrigger>
        <TabsTrigger value="three">Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Content for tab one.</TabsContent>
      <TabsContent value="two">Content for tab two.</TabsContent>
      <TabsContent value="three">Content for tab three.</TabsContent>
    </Tabs>
  ),
};

export const WithDifferentDefault: Story = {
  args: {
    defaultValue: "two",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two">Two</TabsTrigger>
        <TabsTrigger value="three">Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Content for tab one.</TabsContent>
      <TabsContent value="two">Content for tab two.</TabsContent>
      <TabsContent value="three">Content for tab three.</TabsContent>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  args: {
    defaultValue: "one",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two" disabled>Two (Disabled)</TabsTrigger>
        <TabsTrigger value="three">Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Content for tab one.</TabsContent>
      <TabsContent value="two">Content for tab two.</TabsContent>
      <TabsContent value="three">Content for tab three.</TabsContent>
    </Tabs>
  ),
};
