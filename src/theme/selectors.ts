import theme from 'styled-theming';

export const bgColor = theme('mode', {
  light: 'white',
  dark: 'black'
});

export const fgColor = theme('mode', {
  light: 'black',
  dark: 'white'
});
