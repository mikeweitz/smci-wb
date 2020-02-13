import { styled } from 'styletron-react';
import { THEME } from '../styles/theme';

const {
  fonts,
  breakpoints: { print },
} = THEME;

export const Main = styled('main', {
  ...fonts.body,
  paddingTop: '10px',
  margin: '0 auto',
  [print]: {
    paddingTop: 'initial',
  },
});
