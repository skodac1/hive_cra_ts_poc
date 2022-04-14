const colors = {
  black: '#242220',
  primary: '#065143',
  gray: '#E7E6E4',
  gray_dark: '#C9C8C6',
  gray_darker: '#92908E',
  gray_darkest: '#5A5859',
  gray_light: '#F3F2F2',
  gray_lighter: '#FAFAFA',
  off_white: '#FFFBF0',
  white: '#fff',
  error: '#EE0004',
  poppy: '#FFA724',
  fire: '#FF6738',
  mojito: '#47E171',
  green_light: '#F3F6F6'
}

export const theme = {
  breakpoints: ['320px', '768px', '1024px', '1200px'],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors,
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256],
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'MabryPro',
  },
  fontWeights: {
    body: 400,
    button: 500,
    heading: 700,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  shadows: {
    light: '0px 2px 4px rgba(0, 0, 0, 0.15)',
    medium: '0px 2px 4px rgba(0, 0, 0, 0.4);',
  },
  borders: {
    primary: `1px solid ${ colors.primary }`,
    gray: `1px solid ${ colors.gray }`,
    gray_dark: `1px solid ${ colors.gray_dark }`,
    gray_darker: `1px solid ${ colors.gray_darker }`,
  },
  variants: {
    pageTitle: {
      fontSize: 34,
      letterSpacing: '-0.01em',
      color: 'black',
      mb: 5,
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
    }
  },
  text: {
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      fontFamily: 'body',
      borderRadius: 2,
      px: 12,
      py: 10,
      fontWeight: 'medium',
      lineHeight: 'body',
      cursor: 'pointer',
      '&:disabled': {
        bg: 'gray_dark',
        color: 'gray_light',
        cursor: 'default',
        '& svg': {
          path: {
            fill: 'gray_light'
          }
        }
      },
      '& svg': {
        mr: 2,
        path: {
          fill: 'white'
        }
      }
    },
    secondary: {
      color: 'gray_darkest',
      bg: 'white',
      borderRadius: 2,
      px: 12,
      py: 10,
      boxShadow: 'light',
      fontWeight: 'medium',
      lineHeight: 'body',
      border: 'gray_darker',
      cursor: 'pointer',
      '&:disabled': {
        bg: 'white',
        color: 'gray_dark',
        border: 'gray_dark',
        cursor: 'default',
        '& svg': {
          path: {
            fill: 'gray_dark'
          }
        }
      },
      '&:not([disabled]):hover': {
        boxShadow: 'medium',
        color: 'black'
      },
      '& svg': {
        mr: 2,
        path: {
          fill: 'gray_darkest'
        }
      }
    },
    ghost: {
      color: 'gray_darkest',
      bg: 'white',
      borderRadius: 2,
      px: 12,
      py: 10,
      fontWeight: 'medium',
      lineHeight: 'body',
      cursor: 'pointer',
      '&:disabled': {
        bg: 'gray',
        color: 'gray_dark',
        cursor: 'default',
        '& svg': {
          path: {
            fill: 'gray_dark'
          }
        }
      },
      '&:not([disabled]):hover': {
        color: 'black',
        bg: 'gray_light'
      },
      '& svg': {
        mr: 2,
        path: {
          fill: 'gray_darkest'
        }
      }
    }
  }
}

export default theme
