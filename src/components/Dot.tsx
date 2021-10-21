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
  padding: 50px;
`;

const DotItem = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${Color.DEPTH_D};
`;

export default Dot;
