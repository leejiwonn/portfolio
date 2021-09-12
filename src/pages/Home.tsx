import styled from '@emotion/styled';
import Link from 'next/link';

const Home = () => {
  return (
    <HomeStyled>
      <HomeTitle>Hi!</HomeTitle>
      <Link href="/blog">
        <BlogButton>블로그로 이동하기</BlogButton>
      </Link>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.p`
  font-size: 120px;
  font-weight: bold;
  z-index: 2;
`;

const BlogButton = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  cursor: pointer;
`;

export default Home;
