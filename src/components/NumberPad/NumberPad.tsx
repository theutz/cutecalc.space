import React, { SFC } from 'react';

import styled from 'styled-components';
import {
  bgColor,
  primaryColor,
  accent1,
  accent4,
  accent2,
  fgColor,
  accent3
} from '../../theme/selectors';
import { modularScale } from 'polished';

export const NumberPad: SFC<Props> = (props) => {
  return (
    <Wrapper {...props}>
      <OneButton>1</OneButton>
      <TwoButton>2</TwoButton>
      <ThreeButton>3</ThreeButton>
      <FourButton>4</FourButton>
      <FiveButton>5</FiveButton>
      <SixButton>6</SixButton>
      <SevenButton>7</SevenButton>
      <EightButton>8</EightButton>
      <NineButton>9</NineButton>
      <ZeroButton>0</ZeroButton>
      <PlusButton>+</PlusButton>
      <MinusButton>-</MinusButton>
      <TimesButton>&times;</TimesButton>
      <DivideButton>&divide;</DivideButton>
      <ClearButton>C</ClearButton>
      <AllClearButton>AC</AllClearButton>
      <PercentButton>%</PercentButton>
      <DecimalButton>.</DecimalButton>
      <EqualsButton>=</EqualsButton>
    </Wrapper>
  );
};

const Button = styled.button`
  border: none;
  outline: none;
  background: ${primaryColor};
  color: ${bgColor};
  font-size: ${modularScale(2)};
`;
const NumberButton = styled(Button)`
  background: ${accent3};
  color: ${bgColor};
`;
const EqualsButton = styled(Button)`
  grid-area: Equals;
`;
const DecimalButton = styled(Button)`
  grid-area: Decimal;
`;
const PercentButton = styled(Button)`
  grid-area: Percent;
`;
const AllClearButton = styled(Button)`
  grid-area: AllClear;
`;
const ClearButton = styled(Button)`
  grid-area: Clear;
`;
const MinusButton = styled(Button)`
  grid-area: Minus;
`;
const TimesButton = styled(Button)`
  grid-area: Times;
`;
const DivideButton = styled(Button)`
  grid-area: Divide;
`;
const PlusButton = styled(Button)`
  grid-area: Plus;
`;
const ZeroButton = styled(NumberButton)`
  grid-area: Zero;
`;

const OneButton = styled(NumberButton)`
  grid-area: One;
`;

const TwoButton = styled(NumberButton)`
  grid-area: Two;
`;

const ThreeButton = styled(NumberButton)`
  grid-area: Three;
`;

const FourButton = styled(NumberButton)`
  grid-area: Four;
`;

const FiveButton = styled(NumberButton)`
  grid-area: Five;
`;

const SixButton = styled(NumberButton)`
  grid-area: Six;
`;
const SevenButton = styled(NumberButton)`
  grid-area: Seven;
`;
const EightButton = styled(NumberButton)`
  grid-area: Eight;
`;
const NineButton = styled(NumberButton)`
  grid-area: Nine;
`;

const Wrapper = styled.div`
  --number-pad-column-width: 80px;
  display: grid;
  background: ${accent4};
  grid-template-columns: 1fr repeat(4, var(--number-pad-column-width)) 1fr;
  grid-template-areas:
    '. AllClear Divide Times Clear .'
    '. Seven Eight Nine Minus .'
    '. Four Five Six Plus .'
    '. One Two Three Equals .'
    '. Percent Zero Decimal Equals .';
`;

interface Props {
  className?: string;
}

export default NumberPad;
