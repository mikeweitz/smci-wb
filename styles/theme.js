import { styled } from 'styletron-react';

const THEME = {
  breakpoints: {
    tablet: '@media screen and (min-width: 768px)',
    tabletLarge: '@media screen and (min-width: 980px)',
    desk: '@media screen and (min-width: 1025px)',
    wide: '@media screen and (min-width: 1220px)',
    max: '@media screen and (min-width: 1560px)',
    print: '@media print',
  },
  fonts: {
    heading: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '800',
    },
    body: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '300',
    },
  },
  fontSize: {
    body: '16px',
    position: '17.5px',
    display: '38.5px',
  },
  easing: {
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  },
};

THEME.body = {
  ...THEME.fonts.body,
  fontSize: THEME.fontSize.body,
};

export const A = styled('a', {
  color: '#555',
  textDecoration: 'none',
  cursor: 'pointer',
  ':link': {
    color: '#555',
  },
  ':active': {
    color: '#555',
  },
  ':focus': {
    color: '#555',
  },
  ':hover': {
    color: '#555',
    textDecoration: 'underline',
    outline: 'none',
  },
  ':focus': {
    textDecoration: 'underline',
    outline: 'none',
  },
});

export { THEME };
