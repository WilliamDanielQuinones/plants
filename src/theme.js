const theme = {
    breakpoints: ['40em', '@media (min-width: 56em) and (orientation: landscape)', '64em',],
    fontSizes: [
      12, 14, 16, 20, 24, 32, 48, 64
    ],
    colors: {
      secondary: '#fffefe',
      black: '#060a1d',
      blue: '#020d22',
      gray: '#bcbcbc',
      primary: '#f2a88f',
      orange: '#be3400',
      green: '#015045',
      yellow: '#FFFDD0'
    },
    sizes: [
      0, 4, 8, 16, 32, 64, 128, 256, 512
    ],
    space: [
      0, 4, 8, 16, 32, 64, 128, 256, 512
    ],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    fonts: {
      body: 'SlimJoe, sans-serif',
      heading: 'BigJohn'
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    shadows: {
      small: '0 0 4px rgba(0, 0, 0, .125)',
      smallColor: '0 0 24px #015045',
      large: '0 0 24px rgba(0, 0, 0, .125)',
      largeColor: '0 0 24px #015045'
    },
    variants: {
      card: {
        backgroundSize: 'cover',
        borderRadius: 8,
        color: 'secondary',
        bg: 'gray',
        px: 4,
        py: 5,
        maxWidth: [ 8 ],
        overflow: 'hidden'
      },
      smallCard: {
        backgroundSize: 'cover',
        borderRadius: 8,
        color: 'secondary',
        bg: 'gray',
        p: 3,
        overflow: 'hidden',
        boxShadow: 'small',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }
    },
    text: {
    },
    buttons: {
      primary: {
        color: 'white',
        bg: 'green',
        fontFamily: 'BigJohn'
      }
    }
  }

export default theme;