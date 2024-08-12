import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { Progress } from '@/components/ui/progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => {
  const [progress, setProgress] = React.useState(args.value || 0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-72 h-48">
      <Progress {...args} value={progress} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 13,
};
