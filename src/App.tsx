import React, { Component } from "react";

import Header from "./components/Header";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<StyledHeader />
				<Main />
				<Footer />
			</Wrapper>
		</>
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
	grid-template: "header" 75px "main" 1fr "footer" 30px;
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
