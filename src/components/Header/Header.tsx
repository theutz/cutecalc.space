import React, { SFC } from 'react';

import config from '../../config';
import styled from 'styled-components';
import { bgColor, displayFontName, primaryColor } from '../../theme/selectors';
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
margin: 0;
	font-family: '${displayFontName}', cursive;
	font-size: ${modularScale(3)};
	color: ${primaryColor};
`;

interface Props {
  className?: string;
}

export default Header;
