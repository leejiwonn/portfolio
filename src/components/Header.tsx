import styled from '@emotion/styled';

import { Color } from '~/utils/color';
import { FontType } from '~/utils/font';
import Typography from './Typography';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo href="/">
        <Typography tag="span" font={FontType.SEMI_BOLD_BODY_01}>
          ☺︎ FE DEV | JIWON LEE
        </Typography>
      </Logo>
      <GithubGrass>잔디잔디</GithubGrass>
      <ButtonView>
        <LinkButton href="https://github.com/leejiwonn">
          <Typography tag="span" font={FontType.SEMI_BOLD_BODY_02}>
            GITHUB
          </Typography>
        </LinkButton>
        <LinkButton href="https://leejiwonn.tistory.com">
          <Typography tag="span" font={FontType.SEMI_BOLD_BODY_02}>
            BLOG
          </Typography>
        </LinkButton>
      </ButtonView>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  width: 100%;
  height: 6em;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid ${Color.DEPTH_D};
  padding: 0 2em;
  z-index: 999;
`;

const Logo = styled.a``;

const GithubGrass = styled.div``;

const ButtonView = styled.div``;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.3em 1.2em;
  border: 2px solid ${Color.DEPTH_D};
  border-radius: 4em;
  margin: 0 0.5em;
`;

export default Header;
