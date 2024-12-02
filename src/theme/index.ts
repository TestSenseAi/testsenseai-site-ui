import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    blue: [
      '#EEF1FE',
      '#D5DCFD',
      '#AAB8FB',
      '#7F94F9',
      '#547FF8',
      '#2D5AF0',
      '#1240D9',
      '#0D30A3',
      '#09206D',
      '#041036',
    ],
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: rem(56), lineHeight: '1.2' },
      h2: { fontSize: rem(40), lineHeight: '1.3' },
      h3: { fontSize: rem(32), lineHeight: '1.4' },
      h4: { fontSize: rem(24), lineHeight: '1.4' },
    },
  },
});