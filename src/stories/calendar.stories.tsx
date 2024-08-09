import { Meta, StoryFn } from '@storybook/react';
import { Calendar, CalendarProps } from '@/components/ui/calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    showOutsideDays: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} as Meta;

const Template: StoryFn<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  showOutsideDays: true,
};

export const WithoutOutsideDays = Template.bind({});
WithoutOutsideDays.args = {
  showOutsideDays: false,
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  className: 'bg-gray-50 p-4 rounded-md',
  classNames: {
    day: 'text-red-500 hover:bg-red-100',
    day_today: 'bg-yellow-500 text-white',
    nav_button: 'bg-blue-500 text-white',
  },
  showOutsideDays: true,
};

export const WithRangeSelection = Template.bind({});
WithRangeSelection.args = {
  mode: 'range',
  selected: {
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  },
};
