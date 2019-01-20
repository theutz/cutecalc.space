import React, { SFC, useContext } from 'react';

import config from '../../config';
import styled from 'styled-components';
import { bgColor, fgColor } from '../../theme/selectors';

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
`;

const Title = styled.h1``;

interface Props {
  className?: string;
}

export default Header;
