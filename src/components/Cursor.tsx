import styled from '@emotion/styled';
import { useContext } from 'react';

import useMousePosition from '~/hooks/useMousePosition';
import { Color } from '~/utils/color';
import { CursorContext } from '~/context/CursorContextProvider';
import Typography from './Typography';
import { FontType } from '~/utils/font';

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  return (
    <CursorStyled>
      <CursorPointer x={clientX} y={clientY} active={cursor}>
        <Typography font={FontType.SEMI_BOLD_CAPTION_02} color={Color.DEPTH_L}>
          Drag!
        </Typography>
      </CursorPointer>
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
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  background-color: ${({ active }) => (active ? Color.POINT_O : Color.POINT_B)};
  transform: ${({ active }) =>
    `translate(-50%, -50%) scale(${active ? 2.5 : 1})`};
  border-radius: 50%;
  transition: 'transform .2s ease-in-out';
`;

export default Cursor;
