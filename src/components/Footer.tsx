import styled from '@emotion/styled';

import { Color } from '~/utils/color';
import { FontType } from '~/utils/font';
import Typography from './Typography';

const Footer = () => {
  return (
    <FooterStyled>
      <Page1Styled>
        <Typography font={FontType.MEDIUM_TITLE_02} marginRight={50}>
          오늘도 능동적으로 성장하고자
          <br />
          열심히 🔥 움직이고 있습니다.
        </Typography>
        <Line />
      </Page1Styled>
      <Page2Styled>
        <Typography font={FontType.MEDIUM_HEAD_02}>ABOUT</Typography>
      </Page2Styled>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 999;
`;

const Page1Styled = styled.div`
  width: 1800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 100px;
  margin-top: -100px;
`;

const Line = styled.div`
  width: 400px;
  height: 3px;
  background-color: ${Color.DEPTH_D};
`;

const Page2Styled = styled.div`
  width: 1000px;
  border-top: 3px solid ${Color.DEPTH_D};
  padding: 0 20px;
`;

export default Footer;
