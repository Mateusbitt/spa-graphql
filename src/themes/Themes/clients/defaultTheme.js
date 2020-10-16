import { lighten, darken } from 'polished'

const genericDesign = {
  fonts: {
    primary: 'Nunito, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
  },
  sizes: {
    maxWidth: '1100px',
    headerWidth: '1400px',
  },
}

const darkLight = {
  dark: {
    logo: {
      short: '/image/logo/dark/logo_short.png',
      extended: '/image/logo/dark/logo_extended.png',
    },
    colors: {
      main: ['#1890ff', '#53d782', '#801ece'],
      primary: ['#1976d2', '#1890ff', '#71bcf7', '#c2e2fb'],
      danger: ['#F20C18', '#F5222D', '#FA4851', '#FA7A81'],
      warning: ['#FCDF21', '#fadb14', '#FAEB87', '#ffecb3'],
      success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
      white: ['#fff', '#eee'],
      black: ['#000', '#111'],
      grayscale: [
        '#212121',
        '#414141',
        '#616161',
        '#9e9e9e',
        '#bdbdbd',
        '#e0e0e0',
        '#eeeeee',
      ],
      background: ['#1E243D', lighten(0.1, '#1E243D'), '#1890ff'],
      text: ['#E1E1E7', '#1D223B'],
    },
  },
  light: {
    logo: {
      short: '/image/logo/light/logo_short.png',
      extended: '/image/logo/light/logo_extended.png',
    },
    colors: {
      main: ['#1890ff', '#53d782', '#801ece'],
      primary: ['#1976d2', '#1890ff', '#71bcf7', '#c2e2fb'],
      danger: ['#F20C18', '#F5222D', '#FA4851', '#FA7A81'],
      warning: ['#FCDF21', '#fadb14', '#FAEB87', '#ffecb3'],
      success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
      white: ['#fff', '#eee'],
      black: ['#000', '#111'],
      grayscale: [
        '#eeeeee',
        '#e0e0e0',
        '#bdbdbd',
        '#9e9e9e',
        '#616161',
        '#414141',
        '#212121',
      ],
      background: ['#EEEEEE', darken(0.1, '#EEEEEE'), '#53d782'],
      text: ['#414141', '#E1E1E7'],
    },
  },
}

export default (
  {
    dark: {
      ...darkLight.dark,
      ...genericDesign,
    },
    light: {
      ...darkLight.light,
      ...genericDesign,
    },
  }
)
