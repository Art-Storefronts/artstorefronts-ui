import { Meta, StoryFn } from '@storybook/react';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export default {
  title: 'Components/HoverCard',
  component: HoverCard,
  subcomponents: {
    HoverCardTrigger,
    HoverCardContent,
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => (
  <HoverCard {...args}>
    <HoverCardTrigger asChild>
      <Button variant="link">@copilot</Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <Avatar>
          {/* <AvatarImage src="https://github.com/vercel.png" /> */}
          <AvatarFallback>AF</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@copilot</h4>
          <p className="text-sm">The only automated social for artists. By @artstorefronts.</p>
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">Joined December 2021</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export const Default = Template.bind({});
