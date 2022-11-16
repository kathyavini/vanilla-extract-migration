import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const stack = recipe({
  base: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  variants: {
    gap: {
      xs: {
        rowGap: '0.7rem',
      },
      sm: {
        rowGap: '1rem',
      },
      md: {
        rowGap: '2rem',
      },
      lg: {
        rowGap: '4rem',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'start',
      },
      end: {
        alignItems: 'end',
      },
      stretch: {
        alignItems: 'stretch', // this is flexbox default anyway; might not be necessary to define?
      },
    },
  },
  defaultVariants: {
    gap: 'sm',
    align: 'stretch',
  },
});

export const row = recipe({
  base: {
    width: '100%',

    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  variants: {
    gap: {
      sm: {
        columnGap: '1rem',
      },
      md: {
        columnGap: '2rem',
      },
      lg: {
        columnGap: '4rem',
      },
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'start',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
  },
  defaultVariants: {},
});
