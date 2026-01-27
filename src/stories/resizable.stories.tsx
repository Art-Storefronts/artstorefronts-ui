import type { Meta, StoryObj } from '@storybook/react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    className: {
      control: 'text',
      description: 'CSS classes to apply to the ResizablePanelGroup container.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Horizontal: Story = {
  render: ({ direction = 'horizontal' as 'horizontal' | 'vertical' }) => (
    <ResizablePanelGroup direction={direction} className="min-w-[300px] max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: ({ direction = 'vertical' as 'horizontal' | 'vertical' }) => (
    <ResizablePanelGroup direction={direction} className="min-h-[200px] max-w-md rounded-lg border">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full w-72 items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full w-72 items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Handle: Story = {
  render: ({ direction = 'horizontal' as 'horizontal' | 'vertical' }) => (
    <ResizablePanelGroup
      direction={direction}
      className="min-w-[300px] min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
