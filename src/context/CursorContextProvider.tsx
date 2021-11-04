import { createContext, useState } from 'react';

export const CursorContext = createContext(null);

interface Props {
  children: React.ReactNode;
}

const CursorContextProvider = ({ children }: Props) => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
