import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

const meta = {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardHeader, CardFooter, CardTitle, CardDescription, CardContent },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content. You can place any elements here.</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <Card className="bg-blue-50 border-blue-200">
      <CardHeader className="bg-blue-100">
        <CardTitle className="text-blue-800">Custom Styled Card</CardTitle>
        <CardDescription className="text-blue-600">
          This card has custom styles applied.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-blue-700">
        <p>This is the card content with custom styles.</p>
      </CardContent>
      <CardFooter className="bg-blue-100">
        <p className="text-blue-600">Custom Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Without Footer</CardTitle>
        <CardDescription>This card has no footer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Only the header and content are present in this card.</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
      </CardHeader>
      <CardContent>
        <img src="https://picsum.photos/400/200" alt="Placeholder" className="rounded-lg" />
        <p className="mt-4">This card includes an image in the content area.</p>
      </CardContent>
      <CardFooter>
        <p>Footer with actions</p>
      </CardFooter>
    </Card>
  ),
};
