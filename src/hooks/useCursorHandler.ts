import { useContext, useCallback } from 'react';

import { CursorContext } from '~/context/CursorContextProvider';

const useCursorHandlers = () => {
  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = (status: boolean) => {
    setCursor({ active: status });
  };

  const onMouseEnter = useCallback(() => {
    toggleCursor(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    toggleCursor(false);
  }, []);

  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;
