import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { TabsList, TabsTrigger, TabsContent },
  args: {
    defaultValue: 'one',
  },
} as Meta;

function Template(args: { defaultValue: string }) {
  return (
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
  );
}

function DisabledTemplate(args: { defaultValue: string }) {
  return (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two" disabled>
          Two
        </TabsTrigger>
        <TabsTrigger value="three">Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Content for tab one.</TabsContent>
      <TabsContent value="two">Content for tab two.</TabsContent>
      <TabsContent value="three">Content for tab three.</TabsContent>
    </Tabs>
  );
}

export const Default: StoryFn<any> = Template.bind({});
Default.args = {
  defaultValue: 'one',
};

export const WithDifferentDefault: StoryFn<any> = Template.bind({});
WithDifferentDefault.args = {
  defaultValue: 'two',
};

export const WithDisabledTab: StoryFn<any> = DisabledTemplate.bind({});
WithDisabledTab.args = {
  defaultValue: 'one',
};
