import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: '#682AE9',
      secondary: '#00C9B7',
      dark: {
        100: '#1A1A1A',
        200: '#212121',
        300: '#131314',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.dark.300',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: 'scale(1.02)',
          transition: 'all 0.2s ease-in-out',
        },
      },
      variants: {
        primary: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: '#5620C5',
          },
        },
        secondary: {
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'whiteAlpha.100',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        transition: 'all 0.2s ease-in-out',
        _hover: {
          textDecoration: 'none',
          color: 'brand.primary',
        },
      },
    },
  },
});

export default theme;
