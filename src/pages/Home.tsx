import styled from '@emotion/styled';
import Header from '~/components/Header';
import { Color } from '~/utils/color';

const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <ContentStyled></ContentStyled>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.DEPTH_L};
`;

const ContentStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
`;

export default Home;
