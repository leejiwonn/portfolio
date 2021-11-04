import { useContext } from 'react';

import useMousePosition from '~/hooks/useMousePosition';
import { Color } from '~/utils/color';
import { CursorContext } from '~/context/CursorContextProvider';

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <svg
        width={300}
        height={300}
        viewBox="0 0 50 50"
        style={{
          position: 'absolute',
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? 'black' : 'white',
          strokeWidth: 1,
          fill: cursor.active ? 'rgba(255,255,255,.5)' : `${Color.POINT_O}`,
          transition: 'transform .2s ease-in-out',
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};

export default Cursor;
