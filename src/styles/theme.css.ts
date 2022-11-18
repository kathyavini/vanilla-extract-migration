import {
  createTheme,
  createThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

const root = createGlobalTheme(':root', {
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Work Sans", sans-serif',
  },
  sizes: {
    respS: 'clamp(0.8rem, 0.7rem + 4vw, 1.7rem)',
    respM: 'clamp(1.3rem, 0.9rem + 2vw, 2rem)',
    respL: 'clamp(2rem, 1rem + 4vw, 4rem)',
    respXL: 'clamp(3rem, 2rem + 4vw, 5rem)',
  },
  borders: {
    sm: '3px',
    md: '6px',
  },
});

export const breakpoints = {
  sm: '650px',
  md: '860px',
};

const colors = createThemeContract({
  main: '', // really I'd like to call this text
  secondary: '', // for hover effects in cart only and filled buttons??!
  contrast: '',
  secondaryContrast: '', // text within hover effects
  tertiaryContrast: '',
  background: '',
  white: '', //
  black: '',
  text: {
    normal: '',
    invert: '', // within hover effects
  },
});

export const lightTheme = createTheme(colors, {
  main: '#303030',
  secondary: '#404040',
  contrast: '#3b5442',
  secondaryContrast: '#ece2cc',
  tertiaryContrast: '#745d4a',
  background: '#faf4e8',
  white: '#ffffff',
  black: '#000000',
  text: {
    normal: '#303030',
    invert: '#ece2cc',
  },
});

export const darkTheme = createTheme(colors, {
  main: '#faf4e8',
  secondary: '#ece2cc',
  contrast: '#9ed0b9',
  secondaryContrast: '#404040',
  tertiaryContrast: '#b7afa8',
  background: '#180f00',
  white: '#000000', // sorry
  black: '#ffffff',
  text: {
    normal: '#ece2cc',
    invert: '#303030',
  },
});

export const vars = { ...root, colors };
