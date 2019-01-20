### Color Modes

#### Light

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'dark', font: 'coiny' }}>
  <Header />
</ThemeProvider>;
```

#### Dark

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'light', font: 'coiny' }}>
  <Header />
</ThemeProvider>;
```

### Font Modes

#### Coiny

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'dark', font: 'coiny' }}>
  <Header />
</ThemeProvider>;
```

#### Acme

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'dark', font: 'acme' }}>
  <Header />
</ThemeProvider>;
```
