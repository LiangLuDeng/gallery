import { createContext } from 'react';

export interface HeaderContextProps {
  // tabUtil?: {
  //   addTab: (id: string) => void;
  //   removeTab: (id: string) => void;
  // };
  // updateActive?: (activeItem: { [key: string]: string } | string) => void;
  currentYear?: number;
}

const HeaderContext: React.Context<HeaderContextProps> = createContext({});

export default HeaderContext;
