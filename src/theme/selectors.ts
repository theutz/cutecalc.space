import theme from 'styled-theming';

export const bgColor = theme('mode', {
  light: '#f8f8f8',
  dark: '#333'
});

export const fgColor = theme('mode', {
  light: '#333',
  dark: '#f8f8f8'
});

export const primaryColor = theme('mode', {
  light: '#ff5714',
  dark: '#1be7ff'
});

export const accent1 = theme('mode', {
  light: '#6eeb83',
  dark: '#6eeb83'
});

export const accent2 = theme('mode', {
  light: '#e4ff1a',
  dark: '#e4ff1a'
});

export const accent3 = theme('mode', {
  light: '#ffb800',
  dark: '#ffb800'
});

export const accent4 = theme('mode', {
  light: '#1be7ff',
  dark: '#ff5714'
});

export const displayFontName = theme('font', {
  coiny: 'Coiny',
  acme: 'Acme'
});
