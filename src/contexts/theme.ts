import { createContext } from 'react';

type Mode = 'light' | 'dark';
type Font = 'coiny';

export interface Context {
  mode: Mode;
  setMode: (mode: Mode) => void;
  font: Font;
  setFont: (font: Font) => void;
}

const context = createContext<Context>({
  mode: 'light',
  setMode: () => {},
  font: 'coiny',
  setFont: () => {}
});

export default context;
