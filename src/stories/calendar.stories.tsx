import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'single',
    showOutsideDays: true,
    className: 'rounded-lg border',
  },
};

export const WithoutOutsideDays: Story = {
  args: {
    mode: 'single',
    showOutsideDays: false,
    className: 'rounded-lg border',
  },
};

export const SingleSelection: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
        />
        <p className="text-sm text-muted-foreground">
          Selected: {date ? date.toLocaleDateString() : 'None'}
        </p>
      </div>
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    });
    return (
      <div className="space-y-4">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          className="rounded-lg border"
        />
        <p className="text-sm text-muted-foreground">
          From: {dateRange?.from?.toLocaleDateString() || 'None'} - To:{' '}
          {dateRange?.to?.toLocaleDateString() || 'None'}
        </p>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([
      new Date(),
      new Date(new Date().setDate(new Date().getDate() + 3)),
      new Date(new Date().setDate(new Date().getDate() + 7)),
    ]);
    return (
      <div className="space-y-4">
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          className="rounded-lg border"
        />
        <p className="text-sm text-muted-foreground">
          Selected {dates?.length || 0} date(s)
        </p>
      </div>
    );
  },
};

export const WithDropdowns: Story = {
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
    fromYear: 1900,
    toYear: 2100,
    className: 'rounded-lg border',
  },
};

export const DisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const disabledDays = [
      { from: new Date(2026, 0, 1), to: new Date(2026, 0, 5) },
      { dayOfWeek: [0, 6] }, // Disable weekends
    ];
    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={disabledDays}
          className="rounded-lg border"
        />
        <p className="text-sm text-muted-foreground">
          Weekends and Jan 1-5 are disabled
        </p>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  args: {
    mode: 'single',
    className: 'rounded-lg border shadow-lg',
    classNames: {
      day: 'text-rose-500 hover:bg-rose-100',
      today: 'bg-yellow-500 text-white font-bold',
      button_previous: 'text-blue-500 hover:bg-blue-100',
      button_next: 'text-blue-500 hover:bg-blue-100',
    },
    showOutsideDays: true,
  },
};

export const DateTimePicker: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [time, setTime] = useState<string>('09:00');

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTime(e.target.value);
    };

    return (
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
        />
        <div className="space-y-2">
          <Label htmlFor="time">Start Time</Label>
          <Input
            id="time"
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="w-full"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected: {date ? date.toLocaleDateString() : 'None'} at {time}
        </p>
      </div>
    );
  },
};

