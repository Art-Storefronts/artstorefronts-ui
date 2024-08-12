import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: { TooltipContent, TooltipTrigger },
  argTypes: {
    content: {
      control: 'text',
      description: 'Content of the tooltip',
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Placement of the tooltip relative to the target element',
    },
  },
  tags: ['autodocs'],
} as Meta;

interface TooltipStoryProps {
  content: string;
  side: 'top' | 'right' | 'bottom' | 'left';
}

function Template({ content, side }: TooltipStoryProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent side={side}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export const Top: StoryFn<TooltipStoryProps> = Template.bind({});
Top.args = {
  content: 'Tooltip on Top',
  side: 'top',
};

export const Right: StoryFn<TooltipStoryProps> = Template.bind({});
Right.args = {
  content: 'Tooltip on Right',
  side: 'right',
};

export const Bottom: StoryFn<TooltipStoryProps> = Template.bind({});
Bottom.args = {
  content: 'Tooltip on Bottom',
  side: 'bottom',
};

export const Left: StoryFn<TooltipStoryProps> = Template.bind({});
Left.args = {
  content: 'Tooltip on Left',
  side: 'left',
};
