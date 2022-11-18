import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';
import { stack } from '../styles/recipes.css';

export const formSection = style({
  textAlign: 'start',
});

export const form = style([stack()]);

globalStyle(`${form} input, ${form} textarea`, {
  color: vars.colors.black,
  backgroundColor: vars.colors.white,

  fontSize: '1rem',
  fontWeight: 400,
  fontFamily: vars.fonts.body,

  borderRadius: vars.borders.sm,
  border: `1px solid ${vars.colors.text.normal}`,
  paddingBlock: '0.3rem',
  paddingInline: '0.6rem',
});

globalStyle(`${form} fieldset, ${form} label`, {
  fontSize: '0.9rem',
  fontWeight: 500,
  paddingTop: '1rem',
});

globalStyle(`${form} fieldset`, {
  display: 'flex',
  flexFlow: 'column nowrap',
});

globalStyle(`${form} fieldset label`, {
  display: 'flex',
  flexFlow: 'row nowrap',
  padding: '0.5rem',
  gap: '0.5rem',
});

globalStyle(`${form} fieldset input[type="checkbox"]`, {
  accentColor: vars.colors.tertiaryContrast,
});

export const formHint = style({
  color: vars.colors.secondary,
  padding: '1rem',
  fontSize: '0.9rem',
  fontWeight: 400,
});

export const imagePreview = style({
  height: '100px',
});

export const imagePreviewLabel = style({
  marginBottom: '-0.5rem',
});
