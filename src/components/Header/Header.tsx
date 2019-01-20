import React, { SFC, useContext } from 'react';

import config from '../../config';
import styled from 'styled-components';
import { bgColor, fgColor, displayFontName } from '../../theme/selectors';
import { modularScale } from 'polished';

const { title } = config;

const Header: SFC<Props> = (props) => {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${bgColor};
  color: ${fgColor};
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
	font-family: '${displayFontName}', cursive;
	font-size: ${modularScale(3)};
`;

interface Props {
  className?: string;
}

export default Header;
