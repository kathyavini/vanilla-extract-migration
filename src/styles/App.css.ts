import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const appContainer = style({
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  gap: vars.sizes.respXL,
  textAlign: 'center',
});

export const welcomeScreen = style({
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20vh',
  backgroundImage: "url('/background-black.jpg')",

  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      backgroundImage: "url('/background-copper.jpg')",
      backgroundPositionY: '25%',
    },
  },
});

export const pageTitle = style({
  color: 'white', // should not change with theme
  fontSize: '5rem',
  marginTop: '-10vh',
});

export const pageSubtitle = style({
  color: '#faf4e8', // should not change with theme
  fontSize: '2rem',
});

// From Open Props
const fadeInBloom = keyframes({
  '0%': { opacity: '0', filter: 'brightness(1) blur(20px)' },
  '10%': { opacity: '1', filter: 'brightness(2) blur(10px)' },
  '100%': { opacity: '1', filter: 'brightness(1) blur(0)' },
});

export const scrollPrompt = style({
  opacity: 0,
  animationName: fadeInBloom,
  animationDuration: '2s',
  animationDelay: '1s',
  animationFillMode: 'forwards',
});

export const main = style({
  width: '100%',
  padding: vars.sizes.respXL,
});

export const pageElements = style({
  width: '100%',
  textAlign: 'start',
});

globalStyle(`${pageElements} h2:first-child`, {
  fontSize: '2.5rem',
});

globalStyle(`${pageElements} h3`, {
  fontSize: '2rem',
  marginTop: '2vh',
});
