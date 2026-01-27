import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Progress } from '@/components/ui/progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-72 h-48">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} />;
  },
};
