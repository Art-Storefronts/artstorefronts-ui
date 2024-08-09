import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
} as Meta;

const Template: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage {...args.imageProps} />
    <AvatarFallback {...args.fallbackProps}>{args.fallbackText}</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {
  imageProps: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    alt: 'Avatar',
    className: '',
  },
  fallbackProps: {
    className: '',
  },
  fallbackText: 'AB',
};

export const WithImage = Template.bind({});
WithImage.args = {
  imageProps: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    alt: 'Avatar Image',
    className: '',
  },
  fallbackProps: {
    className: '',
  },
  fallbackText: '',
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  imageProps: {
    src: '',
    alt: '',
    className: '',
  },
  fallbackProps: {
    className: '',
  },
  fallbackText: 'JD',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  className: 'h-16 w-16',
  imageProps: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    alt: 'Large Avatar',
    className: '',
  },
  fallbackProps: {
    className: '',
  },
  fallbackText: 'LG',
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  imageProps: {
    src: '',
    alt: '',
    className: '',
  },
  fallbackProps: {
    className: 'bg-blue-500 text-white',
  },
  fallbackText: 'BR',
};
