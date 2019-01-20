import React, { SFC } from 'react';

import styled from 'styled-components';
import { displayFontName, bgColor, primaryColor } from '../../theme/selectors';
import { modularScale } from 'polished';

const Button: SFC<Props> = (props) => {
  return <StyledButton {...props} />;
};

interface Props {}

const StyledButton = styled.button`
  border: none;
  background: ${primaryColor};
  color: ${bgColor};
  border-radius: 50%;
  font-family: ${displayFontName};
`;

export default Button;
