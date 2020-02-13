import { styled, withStyle } from 'styletron-react';
import { THEME } from '../../styles/theme';
import { Grid } from '../../styles/grid';
const {
  fonts,
  breakpoints: { tablet, desk, wide, tabletLarge },
} = THEME;

export const HeaderGrid = withStyle(Grid, {
  alignItems: 'end',
  marginBottom: '1em',
});

export const Header = styled('header', {
  paddingBottom: '1em',
  position: 'relative',
});

export const Title = styled('div', {
  gridColumn: 'span 2',
  [tablet]: {
    gridColumn: 'span 4',
  },
  [desk]: {
    gridColumn: 'span 3',
  },
});

export const H1 = styled('h1', {
  ...fonts.heading,
  width: 'min-content',
  margin: 0,
  textTransform: 'uppercase',
  lineHeight: '1em',
  fontSize: '42px',
});

export const NavList = styled('ul', ({ $show }) => ({
  listStyleType: 'none',
  gridColumn: 'span 2',
  justifySelf: 'center',
  alignSelf: 'end',
  display: $show ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'start',
  margin: 0,
  padding: 0,
  width: '100%',
  [tablet]: {
    display: 'flex',
    width: 'auto',
    gridColumn: 'span 6',
    flexDirection: 'row',
    alignItems: 'center',
    justifySelf: 'end',
    alignSelf: 'end',
    justifyContent: 'flex-end',
  },
  [desk]: {
    gridColumn: 'span 9',
  },
}));

export const NavListItem = styled('li', ({ $active, $hasIcon, $noPad }) => ({
  position: 'relative',
  padding: $hasIcon ? '0 42px 24px' : $noPad ? '0' : '0 42px 24px 6px',
  fontWeight: !!$active ? 800 : 300,
  cursor: 'pointer',
  alignItems: 'center',
  fontSize: '18px',
  ':last-child': {
    padding: $hasIcon ? '0' : $noPad ? '0' : '0 0 0 24px',
  },
  [tablet]: {
    fontSize: '16px',
    padding: $hasIcon ? '0 24px' : $noPad ? '0' : '0 24px 0 0',
    ':last-child': {
      padding: $hasIcon ? '0' : $noPad ? '0' : '0 0 0 24px',
    },
  },
  [tabletLarge]: {
    fontSize: '16px',
    padding: $hasIcon ? '0 22px' : $noPad ? '0' : '0 22px 0 0',
    ':last-child': {
      padding: $hasIcon ? '0' : $noPad ? '0' : '0 0 0 22px',
    },
  },
  [desk]: {
    fontSize: '16px',
    padding: $hasIcon ? '0 28px' : $noPad ? '0' : '0 28px 0 0',
    ':last-child': {
      padding: $hasIcon ? '0 0 0 28px' : $noPad ? '0' : '0 28px 0 0',
    },
  },
  [wide]: {
    fontSize: '16px',
    padding: $hasIcon ? '0 32px' : $noPad ? '0' : '0 32px 0 0',
    ':last-child': {
      padding: $hasIcon ? '0 0 0 32px' : $noPad ? '0' : '0 32px 0 0',
    },
  },
}));

export const Icon = styled('img', ({ $top, $left }) => ({
  display: 'block',
  marginRight: '0.325em',
  maxWidth: '24px',
  position: 'absolute',
  top: $top || 0,
  left: $left ? $left : '6px',
  [tablet]: {
    marginRight: '10px',
    maxWidth: '14px',
  },
  [tabletLarge]: {
    marginRight: '0.5em',
    maxWidth: '14px',
  },
  [desk]: {
    marginRight: '0.5em',
    maxWidth: '18px',
  },
}));

export const Label = styled('div', {
  display: 'block',
  whiteSpace: 'nowrap',
});

export const Display = styled('button', props => ({
  margin: 0,
  borderRadius: '0.25em',
  margin: '0 0.25em',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '0',
  outline: 'none',
  ':hover': {
    backgroundColor: '#ddd',
  },
}));

export const SortLabel = styled('span', {
  color: '#999',
});

export const FilterGroup = withStyle(Grid, {
  alignItems: 'center',
});

export const FilterControls = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  margin: '24px 0',
});

export const Filters = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gridColumn: 'span 2',
  [tablet]: {
    justifyContent: 'flex-start',
    gridColumn: 'span 2',
  },
  [tabletLarge]: {
    gridColumn: 'span 3',
  },
  [desk]: {
    gridColumn: 'span 7',
  },
});

export const Filter = styled('div', {
  backgroundImage: 'url(/static/icons/down.svg)',
  backgroundPosition: 'right 3px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '14px auto',
  paddingRight: '20px',
  marginRight: '32px',
  lineHeight: '1em',
  fontWeight: 600,
  fontSize: '18px',
  ':last-child': {
    marginRight: '0',
  },
  ':hover': {
    cursor: 'pointer',
  },
  [tablet]: {
    fontSize: '14px',
    backgroundSize: '14px auto',
    backgroundPosition: 'right 2px',
    paddingRight: '30px',
    marginRight: '42px',
  },
  [desk]: {
    fontSize: '14px',
  },
});

export const ToggleFilters = withStyle(Filter, {
  marginRight: '24px',
});

export const SortedBy = withStyle(Filter, {
  marginRight: '0',
});

export const FilterActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gridColumn: 'span 2',
  [tablet]: {
    gridColumn: 'span 2',
  },
  [tabletLarge]: {
    gridColumn: 'span 3',
  },
  [desk]: {
    gridColumn: 'span 5',
  },
});

export const Button = styled('button', {
  display: 'flex',
  marginLeft: '16px',
  padding: '0.5em 0.5em',
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: '14px',
  border: '1px solid black',
  backgroundColor: 'transparent',
  textTransform: 'uppercase',
  ':first-child': {
    marginLeft: 0,
  },
  ':hover': {
    backgroundColor: '#000',
    color: 'white',
  },
  [tablet]: {
    fontSize: '12px',
    ':last-of-type': {
      marginLeft: 0,
    },
  },
  [desk]: {
    height: '32px',
    fontSize: '14px',
    padding: '0.5em 1.25em',
    marginLeft: '24px',
    backgroundColor: 'transparent',
    ':last-of-type': {
      marginLeft: 0,
    },
  },
});

export const Close = styled('button', {
  display: 'flex',
  padding: '0.5em 1em',
  marginLeft: '16px',
  cursor: 'pointer',
  fontWeight: 800,
  borderRadius: '8px 8px',
  backgroundColor: 'transparent',
  textTransform: 'uppercase',
  border: 'none',
  ':hover': {
    color: 'white',
    // backgroundColor: '#ccc',
  },
  [desk]: {
    height: '32px',
    padding: 0,
    backgroundColor: 'transparent',
    marginLeft: '24px',
  },
});

export const MenuButton = styled('button', ({ $open }) => ({
  cursor: 'pointer',
  backgroundColor: 'transparent',
  backgroundImage: $open
    ? 'url(/static/icons/close.svg)'
    : 'url(/static/icons/menu.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '32px 32px',
  backgroundPosition: 'center',
  margin: 0,
  padding: 0,
  border: 'none',
  width: '42px',
  height: '42px',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 4,
  [tablet]: {
    display: 'none',
  },
}));
