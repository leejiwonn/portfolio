import styled from '@emotion/styled';
import { Color } from '~/utils/color';

const Dot = () => {
  return (
    <DotStyled>
      <DotItem />
      <DotItem />
      <DotItem />
      <DotItem />
    </DotStyled>
  );
};

const DotStyled = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5em;
`;

const DotItem = styled.div`
  width: 2.4em;
  height: 2.4em;
  border-radius: 50%;
  background-color: ${Color.DEPTH_D};
`;

export default Dot;
