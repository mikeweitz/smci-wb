import { styled } from 'styletron-react';
import { THEME } from './theme';

const {
  breakpoints: { tablet, tabletLarge, desk, print },
} = THEME;

export const Block = styled('div', {
  position: 'relative',
  margin: '0 auto',
  [desk]: {
    maxWidth: '1560px',
  },
});

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '24px',
  justifyContent: 'center',
  [tablet]: {
    gridGap: '24px',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [tabletLarge]: {
    gridGap: '12px',
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
  [desk]: {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: '12px',
  },
  [print]: {
    display: 'block',
  },
});

export const GridResults = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '42px 24px',
  justifyContent: 'center',
  [tablet]: {
    gridGap: '36px 24px',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [tabletLarge]: {
    gridGap: '24px 12px',
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
  [desk]: {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: '24px 12px',
  },
});
