import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Josh Comeau's CSS Reset
globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  // border: '1px solid salmon',
});

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('img', {
  objectFit: 'cover',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('#root', {
  isolation: 'isolate',
});

// Other globals
globalStyle('html, body, #root, #app', {
  minWidth: '100vw',
  minHeight: '100vh',
});

globalStyle('#app', {
  fontFamily: vars.fonts.body,
  background: vars.colors.background,
  color: vars.colors.text.normal,
});

globalStyle('h1, h2, h3, h4, h5, h5', {
  fontFamily: vars.fonts.heading,
});

globalStyle('a', {
  color: vars.colors.tertiaryContrast,
  textDecoration: 'none',
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

globalStyle('a:visited', {
  color: vars.colors.tertiaryContrast,
});
