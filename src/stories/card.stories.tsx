import { Meta, StoryFn } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardHeader, CardFooter, CardTitle, CardDescription, CardContent },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
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
);

export const Default = Template.bind({});
Default.args = {};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  className: 'bg-blue-50 border-blue-200',
  children: (
    <>
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
    </>
  ),
};

export const WithoutFooter = Template.bind({});
WithoutFooter.args = {
  children: (
    <>
      <CardHeader>
        <CardTitle>Card Without Footer</CardTitle>
        <CardDescription>This card has no footer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Only the header and content are present in this card.</p>
      </CardContent>
    </>
  ),
};

export const WithImage = Template.bind({});
WithImage.args = {
  children: (
    <>
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
      </CardHeader>
      <CardContent>
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" className="rounded-lg" />
        <p className="mt-4">This card includes an image in the content area.</p>
      </CardContent>
      <CardFooter>
        <p>Footer with actions</p>
      </CardFooter>
    </>
  ),
};
