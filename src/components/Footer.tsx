import styled from '@emotion/styled';

import { Color } from '~/utils/color';
import Typography from './Typography';

const Footer = () => {
  return (
    <FooterStyled>
      <Typography font="MEDIUM_HEAD_02">ABOUT</Typography>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  left: 950px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 3px solid ${Color.DEPTH_D};
  padding: 0 20px;
  z-index: 999;
`;

export default Footer;
