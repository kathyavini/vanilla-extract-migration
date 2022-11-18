import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const responsiveContainer = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  rowGap: '2rem',

  '@media': {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      flexDirection: 'row',
      columnGap: '2rem',
    },
  },
});

globalStyle(`${responsiveContainer} > *`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      flex: 1,
    },
  },
});

export const tableRow = style({
  width: '100%',

  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontFamily: vars.fonts.body,
  fontWeight: 300,
});

globalStyle(`${tableRow} p:first-child`, {
  textTransform: 'uppercase',
});

globalStyle(`${tableRow} h4`, {
  fontFamily: vars.fonts.body,
});

export const textbox = style({
  width: '100%',
  marginTop: '0.5rem',
  padding: '0.4rem',

  fontFamily: vars.fonts.body,
});

export const expandable = style({
  width: '100%',
  padding: '.2rem',

  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontFamily: vars.fonts.body,
  fontWeight: 300,

  ':hover': {
    border: `1px dashed ${vars.colors.text.normal}`,
    padding: 2,
  },
});

globalStyle(`${expandable} p`, {
  pointerEvents: 'none',
});
