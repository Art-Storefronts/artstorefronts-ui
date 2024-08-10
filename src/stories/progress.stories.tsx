import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { StoryWrapper } from "@/lib/storywrapper";

export default {
  title: "Components/Progress",
  component: Progress,
} as Meta;

const Template: StoryFn = (args) => {
  const [progress, setProgress] = React.useState(args.value || 0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoryWrapper>
      <Progress {...args} value={progress} className="w-[60%]" />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 13,
};
