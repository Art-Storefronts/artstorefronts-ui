import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Skeleton } from '@/components/ui/skeleton';

// Set up metadata for the component
export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} as Meta;

export const User: StoryFn = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export const Card: StoryFn = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
