import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ImageUpload } from '@/components/ui/image-upload';

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof ImageUpload> = (args) => (
  <div className="w-[350px]">
    <ImageUpload {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onFileSelect: action('file-selected'),
};
