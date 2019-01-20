import { createContext } from 'react';

type Mode = 'light' | 'dark';

export interface Context {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const context = createContext<Context>({
  mode: 'light',
  setMode: () => {}
});

export default context;
