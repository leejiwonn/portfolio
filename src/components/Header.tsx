import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Color } from '~/utils/color';
import { FontType } from '~/utils/font';
import { getContributions } from '~/utils/api';
import Typography from './Typography';

const Header = () => {
  const [weekContributions, setWeekContributions] = useState([]);

  /* get github contributions */
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const data = await getContributions();
        const weekData =
          data.contributionsCollection.contributionCalendar.weeks;
        setWeekContributions(weekData[weekData.length - 1].contributionDays);
      } catch (e) {
        console.warn(e);
      }
    };
    fetchContributions();
  }, []);
  console.log(7 - weekContributions.length);
  return (
    <HeaderStyled>
      <Logo href="/">
        <Typography tag="span" font={FontType.SEMI_BOLD_BODY_01}>
          ☺︎ FE DEV | JIWON LEE
        </Typography>
      </Logo>
      <GithubGrass>
        {weekContributions.map((value, index) => (
          <GithubGrassItem key={index} color={value.color} />
        ))}
        {weekContributions.length < 7 &&
          [...Array(7 - weekContributions.length)].map((index) => (
            <GithubGrassItem key={index} color={Color.DEPTH_L} />
          ))}
      </GithubGrass>
      <ButtonView>
        <LinkButton href="https://github.com/leejiwonn" target="_blank">
          <Typography tag="span" font={FontType.SEMI_BOLD_BODY_02}>
            GITHUB
          </Typography>
        </LinkButton>
        <LinkButton href="https://leejiwonn.tistory.com" target="_blank">
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

const GithubGrass = styled.div`
  display: flex;
  flex-direction: row;
`;

const GithubGrassItem = styled.div<{ color: string }>`
  width: 2.4em;
  height: 2.4em;
  background-color: ${({ color }) => color};
  border-radius: 0.8em;
  margin: 0 0.4em;
`;

const ButtonView = styled.div``;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.3em 1.2em;
  border: 2px solid ${Color.DEPTH_D};
  border-radius: 4em;
  margin: 0 0.5em;
`;

export default Header;
