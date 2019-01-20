### Default Styles

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'light', font: 'coiny' }}>
  <Button>1</Button>
</ThemeProvider>;
```

### Variants — Color

#### Dark

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'dark', font: 'coiny' }}>
  <Button>1</Button>
</ThemeProvider>;
```

### Variants — Font

#### Acme

```jsx
const { ThemeProvider } = require('styled-components');

<ThemeProvider theme={{ mode: 'light', font: 'acme' }}>
  <Button>1</Button>
</ThemeProvider>;
```
