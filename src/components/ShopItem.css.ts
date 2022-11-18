import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const container = style({
  textAlign: 'center',
  padding: 'clamp(0.5rem, 4vw, 2.5rem)',
  transition: 'all 100ms',
});

globalStyle(`${container} h2`, {
  fontWeight: 400,
});

globalStyle(`${container} h3`, {
  fontWeight: 300,
  marginTop: '-0.5rem',
});
