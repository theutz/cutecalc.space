import React, { useState, useContext } from 'react';

import Header from './components/Header';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import ThemeContext, { Context as IThemeContext } from './contexts/theme';

const App = () => {
  const [mode, setMode] = useState<IThemeContext['mode']>('light');

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={{ mode }}>
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
