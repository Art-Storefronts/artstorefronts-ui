import { Meta, StoryFn } from '@storybook/react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

export default {
  title: 'Components/InputOTP',
  component: InputOTP,
  subcomponents: {
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = () => (
  <InputOTP maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
);

export const Default = Template.bind({});
Default.args = {};
