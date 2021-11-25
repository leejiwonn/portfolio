import styled from '@emotion/styled';
import { useContext } from 'react';

import useMousePosition from '~/hooks/useMousePosition';
import { Color } from '~/utils/color';
import { CursorContext } from '~/context/CursorContextProvider';

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  return (
    <CursorStyled>
      <CursorPointer x={clientX} y={clientY} active={cursor.active} />
    </CursorStyled>
  );
};

const CursorStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
`;

const CursorPointer = styled.div<{ x: number; y: number; active: boolean }>`
  width: 2.5em;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  background-color: ${({ active }) => active && Color.POINT_P};
  border: ${({ active }) =>
    active ? 'transparent' : `2px solid ${Color.POINT_P}`};
  border-radius: 50%;
  opacity: ${({ active }) => active && '0.5'};
  transform: ${({ active }) =>
    `translate(-50%, -50%) scale(${active ? 0.6 : 1})`};
  transition: transform 0.2s ease-in-out;
  pointer-events: none;
  z-index: 999;
`;

export default Cursor;
