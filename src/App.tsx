import React, { useState, useContext } from 'react';

import Header from './components/Header';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import ThemeContext, { Context as IThemeContext } from './contexts/theme';
import Helmet from 'react-helmet';
import {
  displayFontName,
  accent3,
  fgColor,
  bgColor,
  accent1
} from './theme/selectors';
import NumberPad from './components/NumberPad';

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
            <Calculator>
              <History>History</History>
              <CurrentValue>123</CurrentValue>
              <StyledNumberPad />
            </Calculator>
            <Footer>Copyright &copy; 2019</Footer>
          </Wrapper>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
  html {
    font-family: ${displayFontName}, sans-serif;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  grid-template:
    'header' 70px
    'main' 1fr
    'footer' 30px
    / 1fr;
`;

const StyledNumberPad = styled(NumberPad)`
  grid-area: numberPad;
`;

const StyledHeader = styled(Header)`
  grid-area: header;
`;

const History = styled.div`
  grid-area: history;
`;

const CurrentValue = styled.div`
  grid-area: currentValue;
`;

const Calculator = styled.main`
  background: ${accent1};
  display: grid;
  grid-area: main;
  grid: 'history' 2fr 'currentValue' 1fr 'numberPad' 4fr;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: footer;
  background: ${accent3};
  color: ${bgColor};
`;

export default App;
