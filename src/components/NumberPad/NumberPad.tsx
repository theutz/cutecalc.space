import React, { SFC } from 'react';

import styled from 'styled-components';
import { bgColor, primaryColor, accent1, accent4 } from '../../theme/selectors';

export const NumberPad: SFC<Props> = (props) => {
  return <Wrapper {...props}>NumberPad</Wrapper>;
};

const Wrapper = styled.div`
  background: ${accent4};
  width: 100%;
  height: 100%;
`;

interface Props {
  className?: string;
}

export default NumberPad;
