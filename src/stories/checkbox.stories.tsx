import { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  checked: true,
  disabled: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  className: 'h-6 w-6',
};
