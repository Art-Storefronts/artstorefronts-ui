import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const postcssConfig = {
  plugins: [tailwindcss(), autoprefixer()],
};

export default postcssConfig;
