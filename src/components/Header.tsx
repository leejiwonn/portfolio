import styled from '@emotion/styled';

import { Color } from '~/utils/color';
import Typography from './Typography';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo href="/">
        <Typography tag="span" font="SEMI_BOLD_BODY_03">
          ☺︎ FE DEV | JIWON LEE
        </Typography>
      </Logo>
      <GithubGrass>잔디잔디</GithubGrass>
      <ButtonView>
        <LinkButton href="https://github.com/leejiwonn">
          <Typography tag="span" font="SEMI_BOLD_CAPTION_01">
            GITHUB
          </Typography>
        </LinkButton>
        <LinkButton href="/blog">
          <Typography tag="span" font="SEMI_BOLD_CAPTION_01">
            BLOG
          </Typography>
        </LinkButton>
      </ButtonView>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid ${Color.DEPTH_D};
  padding: 0 20px;
`;

const Logo = styled.a``;

const GithubGrass = styled.div``;

const ButtonView = styled.div``;

const LinkButton = styled.a`
  display: inline-block;
  padding: 3px 12px;
  border: 2px solid ${Color.DEPTH_D};
  border-radius: 40px;
  margin: 0 5px;
`;

export default Header;
