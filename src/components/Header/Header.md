### Default Styles

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'light', font: 'coiny' }}>
  <Header />
</ThemeProvider>;
```

### Variants — Color

#### Dark

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'dark', font: 'coiny' }}>
  <Header />
</ThemeProvider>;
```

### Variants — Font

#### Acme

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'light', font: 'acme' }}>
  <Header />
</ThemeProvider>;
```
