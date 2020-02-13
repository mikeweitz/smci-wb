import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';
const {
  easing: { easeOutQuart },
  breakpoints: { tablet, desk },
} = THEME;

export const ImgFrame = styled('div', ({ $rendered }) => ({
  position: 'relative',
  width: '100%',

  height: '0',
  paddingBottom: `calc(375 / 250 * 100%)`,
  backgroundImage: $rendered ? 'none' : 'url(/static/spinner.svg)',
  backgroundColor: '#ccc',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  marginBottom: '1em',
  display: 'flex',
}));

export const Img = styled('img', ({ $rendered }) => ({
  display: 'block',
  opacity: !!$rendered ? '1' : '0',
  position: 'absolute',
  zIndex: 1,
  top: 0,
  width: '100%',
  maxWidth: '250px',
  minWidth: '100%',
  minHeight: '100%',
  marginBottom: '1em',
  transition: `all 1s ${easeOutQuart}`,
}));

export const Cat = styled('span', {
  display: 'block',
  marginBottom: '1em',
  fontSize: '16px',
  [tablet]: {
    fontSize: '14px',
  },
  [desk]: {
    fontSize: '14px',
  },
});

export const Name = styled('h6', {
  margin: 0,
  fontWeight: 800,
  fontSize: '18px',
  [tablet]: {
    fontSize: '14px',
  },
  [desk]: {
    fontSize: '14px',
  },
});

export const Load = styled('button', {
  display: 'flex',
  margin: '2em auto 1em',
  padding: '0.5em 1em',
  cursor: 'pointer',
  border: '1px solid black',
  backgroundColor: 'transparent',
  fontWeight: 800,
  textTransform: 'uppercase',
  ':hover': {
    backgroundColor: '#000',
    color: 'white',
  },
});
