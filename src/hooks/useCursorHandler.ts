import { useContext, useCallback } from 'react';

import { CursorContext } from '~/context/CursorContextProvider';

interface Props {
  onMouseEnter: (e: MouseEvent) => void;
  onMouseLeave: (e: MouseEvent) => void;
}

const useCursorHandlers = ({ onMouseEnter, onMouseLeave }: Props) => {
  const [setCursor] = useContext(CursorContext);

  const toggleCursor = () => {
    setCursor((active: boolean) => ({ active: !active }));
  };

  const handleMouseEnter = useCallback((e) => {
    if (onMouseEnter) {
      onMouseEnter(e);
    }
    toggleCursor();
  }, []);

  const handleMouseLeave = useCallback((e) => {
    if (onMouseLeave) {
      onMouseLeave(e);
    }
    toggleCursor();
  }, []);
  return { handleMouseEnter, handleMouseLeave };
};

export default useCursorHandlers;
