import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from './theme.css';

export const buttonBase = style({
  border: `1px solid ${vars.colors.main}`,
  padding: '0.7rem 2rem',

  fontFamily: vars.fonts.body,
  fontSize: '1rem',
  fontWeight: 300,
  textTransform: 'uppercase',

  ':active': {
    filter: 'brightness(1.1)',
  },
});

export const button = styleVariants({
  primary: [
    buttonBase,
    {
      backgroundColor: 'transparent',
      color: vars.colors.main,

      ':hover': {
        color: vars.colors.tertiaryContrast,
        border: `1px solid ${vars.colors.tertiaryContrast}`,
      },
    },
  ],
  filled: [
    buttonBase,
    {
      backgroundColor: vars.colors.main,
      color: vars.colors.background,

      ':hover': {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.background,
        border: `1px solid ${vars.colors.secondary}`,
      },
    },
  ],
  animated: [
    buttonBase,
    {
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'transparent',
      color: vars.colors.main,

      ':hover': {
        color: vars.colors.secondaryContrast,
        border: `1px solid ${vars.colors.secondaryContrast}`,
      },

      '::after': {
        content: '',
        backgroundColor: vars.colors.main,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transform: 'scaleX(0)',
        transformOrigin: '0% 50%',
        zIndex: -1,
        transition: 'transform 0ms',
      },

      selectors: {
        '&:hover::after': {
          transform: 'scaleX(1)',
          transition: 'transform 200ms ease-in-out',
        },
      },
    },
  ],
});

// Because this button has to be targeted with the selectors key, I can't figure out a way to make use of the previously defined button styles unfortunately
export const uploadButton = style({
  selectors: {
    '&::file-selector-button': {
      border: `1px solid ${vars.colors.main}`,
      padding: '0.5rem 0.7rem',
      borderRadius: vars.borders.md,

      fontFamily: vars.fonts.body,
      fontSize: '1rem',

      backgroundColor: vars.colors.main,
      color: vars.colors.background,
    },

    '&::file-selector-button:hover': {
      backgroundColor: vars.colors.secondary,
      color: vars.colors.background,
      border: `1px solid ${vars.colors.secondary}`,
    },
    '&::file-selector-button:active': {
      filter: 'brightness(1.1)',
    },
  },
});

export const badge = style({
  background: vars.colors.contrast,
  color: vars.colors.white,

  fontSize: '1rem',
  padding: '1rem 2rem',
  fontWeight: 300,
  textAlign: 'center',
  lineHeight: '1.5rem',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',

  rowGap: '0.7rem',
});

globalStyle(`${badge} a`, {
  color: vars.colors.secondaryContrast,
});

export const image = style({
  height: 150,
  width: 150,
  objectFit: 'cover',
  borderRadius: vars.borders.sm,

  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      width: 250,
      height: 250,
    },
  },
});

const dividerBase = style({
  borderTop: `1px solid ${vars.colors.text.normal}`,
  width: '100%',
  marginBlock: '0.7rem',
});

export const divider = styleVariants({
  full: [
    dividerBase,
    {
      width: '100%',
      marginBlock: '0.7rem',
    },
  ],
  small: [
    dividerBase,
    {
      width: '2rem',
      marginBlock: '0.5rem',
    },
  ],
});
