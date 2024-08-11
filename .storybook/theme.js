// .storybook/myTheme.js
import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#ff6000',
  colorSecondary: '#ff6000',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Art Storefronts',
  brandUrl: 'https://github.com/Art-Storefronts/artstorefronts-ui',
  brandImage: 'https://i.imgur.com/p53fPWg.png',
});
