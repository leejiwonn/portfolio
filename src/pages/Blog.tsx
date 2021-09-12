import styled from '@emotion/styled';

const Blog = () => {
  return (
    <BlogStyled>
      <BlogTitle>Blog!</BlogTitle>
    </BlogStyled>
  );
};

const BlogStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogTitle = styled.p`
  font-size: 120px;
  font-weight: bold;
  z-index: 2;
`;

export default Blog;
