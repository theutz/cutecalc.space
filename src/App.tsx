import React, { useState, useContext } from 'react';

import Header from './components/Header';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import ThemeContext, { Context as IThemeContext } from './contexts/theme';
import Helmet from 'react-helmet';
import { displayFontName } from './theme/selectors';

const App = () => {
  const [mode, setMode] = useState<IThemeContext['mode']>('light');
  const [font, setFont] = useState<IThemeContext['font']>('coiny');

  const theme = { mode, font };
  const fontUrl = `https://fonts.googleapis.com/css?family=${displayFontName({
    theme
  })}`;

  return (
    <ThemeContext.Provider value={{ mode, setMode, setFont, font }}>
      <Helmet>
        <link href={fontUrl} rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Wrapper>
            <StyledHeader />
            <Main />
            <Footer />
          </Wrapper>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const GlobalStyle = createGlobalStyle`
  ${normalize()};
`;

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  grid-template: 'header' 75px 'main' 1fr 'footer' 30px;
`;

const StyledHeader = styled(Header)`
  grid-area: header;
`;

const Main = styled.main`
  grid-area: main;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

export default App;
