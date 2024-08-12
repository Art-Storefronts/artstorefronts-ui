import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    collapsible: { control: 'boolean' },
  },
  tags: ['autodocs'],
} as Meta;

interface AccordionStoryProps {
  type: 'single' | 'multiple';
  collapsible: boolean;
}

function Template(args: AccordionStoryProps) {
  return (
    <Accordion {...args} className="w-72">
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Content for item 1. This is an example of how you can use the accordion component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Content for item 2. This is an example of how you can use the accordion component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          Content for item 3. This is an example of how you can use the accordion component.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export const Single: StoryFn<AccordionStoryProps> = Template.bind({});
Single.args = {
  type: 'single',
  collapsible: true,
};

export const Multiple: StoryFn<AccordionStoryProps> = Template.bind({});
Multiple.args = {
  type: 'multiple',
  collapsible: true,
};

export const NonCollapsible: StoryFn<AccordionStoryProps> = Template.bind({});
NonCollapsible.args = {
  type: 'single',
  collapsible: false,
};
