<p align="center" width="100%">
  <img src="https://i.imgur.com/p53fPWg.png" />
</p>

# @artstorefronts/ui

A collection of customizable React components built with TypeScript, Tailwind CSS, and Storybook. The components have been designed to be lightweight and easy to integrate into React projects.

## Requirements

Before installing and using this library, ensure that your project meets the following requirements:

- React: Version 17.0 or higher
- Tailwind CSS: Version 3.0 or higher
- Framer Motion: Version 11.0 or higher

## Installation

To install the library, use npm or yarn:

```bash
# Using npm
npm install @artstorefronts/ui framer-motion

# Using yarn
yarn add @artstorefronts/ui framer-motion
```

## Import CSS

Add the following import to your project (usually in index.tsx or App.tsx):

```
import '@artstorefronts/ui/dist/index.css';
```

### Install Tailwind CSS

You must also have Tailwind CSS installed in your project. If you don't have it yet, you can install it by following these [these instructions](https://tailwindcss.com/docs/installation).

## Usage

Once the library is installed, you can start using the components in your project. Here's an example of how to use a component:

```javascript
import { Button } from "@artstorefronts/ui";

const App = () => (
  <div className="container mx-auto">
    <Button variant="outline" />
  </div>
);

export default App;
```

## Components

- **Accordion**
  - A vertically stacked set of interactive headings that each reveal a section of content.
- **Alert**
  - Displays a callout for user attention.
- **Alert Dialog**
  - A modal dialog that interrupts the user with important content and expects a response.
- **Aspect Ratio**
  - Displays content within a desired ratio.
- **Avatar**
  - An image element with a fallback for representing the user.
- **Badge**
  - A visual indicator for counting or labeling items.
- **Button**
  - An interactive element that triggers a specific action when clicked.
- **Calendar**
  - A date picker component to select a single or range of dates.
- **Card**
  - A flexible content container with multiple layouts and variations.
- **Checkbox**
  - A square box that can be checked or unchecked to represent a binary option.
- **Collapsible**
  - A container that can show or hide its content when clicked.
- **Command**
  - A text-based command palette that helps users perform actions quickly.
- **Context Menu**
  - A floating menu triggered by a right-click that provides additional options.
- **Dialog**
  - A modal window that overlays on top of the main content, usually for user interaction.
- **Dropdown Menu**
  - A toggleable menu that provides a list of options.
- **Form**
  - A set of controls to collect and validate user input.
- **Hover Card**
  - A floating card that appears when hovering over an element.
- **Input**
  - A field for users to enter text.
- **Label**
  - A text label that provides context for a form control.
- **Menubar**
  - A horizontal menu of items that appear on the top of an application.
- **Navigation Menu**
  - A vertical or horizontal menu to navigate through sections of an application.
- **Popover**
  - A floating card that appears when a user interacts with an element, usually containing more information or options.
- **Progress**
  - A visual representation of a task's progress.
- **Radio Group**
  - A set of related radio buttons, where only one option can be selected at a time.
- **Rating**
  - A clickable star rating component for selecting and displaying ratings from 1 to 5.
- **Scroll Area**
  - A container that allows content to be scrollable if it exceeds the visible area.
- **Select**
  - A dropdown list of options where the user can select one.
- **Separator**
  - A horizontal or vertical line that groups or separates content.
- **Sheet**
  - A modal-like component that slides from the side of the screen, used for menus or sidebars.
- **Skeleton**
  - A placeholder that mimics the shape of the content that is loading.
- **Slider**
  - A control for selecting a value by sliding a handle along a track.
- **Switch**
  - A toggle switch that allows the user to choose between two states.
- **Table**
  - A grid of rows and columns to display data.
- **Tabs**
  - A set of layered sections of content, each associated with a tab.
- **Textarea**
  - A multi-line text input field.
- **Toast**
  - A brief message that appears temporarily at the edge of the screen to inform the user.
- **Toggle**
  - A button that can be switched between two states.
- **Tooltip**
  - A floating label that briefly appears when a user hovers over or focuses on an element.

## Customization

The components in this library are fully customizable through [Tailwind CSS](https://tailwindcss.com/docs) utility classes. You can also extend or override the default styles using your own Tailwind configuration.

## Documentation

### Storybook

For a live demonstration and interactive documentation of the components, check out our public [Storybook](https://art-storefronts.github.io/artstorefronts-ui).

### Advanced Usage

The components are based on [Shadcn](https://ui.shadcn.com). For detailed documentation and usage examples of the original components, please visit the [Shadcn documentation](https://ui.shadcn.com/docs).

## Development

### Add new components

1. Create a component in the `src/components/ui` directory
   - Name the component something like `component.tsx`
2. Create a Storybook story in the `src/stories` directory
   - Name the story something like `component.stories.tsx`

### Update existing components

1. Modify the component
2. Create/update existing Storybook stories to include the new functionality

### Run Storybook

To run Storybook and view your new component:

1. Run `yarn storybook`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more details.
