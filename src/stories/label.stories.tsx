import { Meta, StoryFn } from '@storybook/react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: StoryFn = (args) => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'terms',
  children: 'Accept terms and conditions',
};
