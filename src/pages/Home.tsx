import styled from '@emotion/styled';

const Home = () => {
  return (
    <>
      <HomeStyled>
        <HomeTitle>Leejiwonn</HomeTitle>
      </HomeStyled>
    </>
  );
};

const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.p`
  font-size: 120px;
  font-weight: bold;
  z-index: 2;
`;

export default Home;
