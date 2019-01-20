### Default Styles

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'light', font: 'coiny' }}>
  <NumberPad />
</ThemeProvider>;
```

### Variants — Color

#### Dark

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'dark', font: 'coiny' }}>
  <NumberPad />
</ThemeProvider>;
```

### Variants — Font

#### Acme

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'light', font: 'acme' }}>
  <NumberPad />
</ThemeProvider>;
```
