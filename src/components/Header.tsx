import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Color } from '~/utils/color';
import { FontType } from '~/utils/font';
import { fetchContribution } from '~/remotes/contribution';
import Typography from '~/components/Typography';
import { Contribution } from '~/types/contribution';
import useCursorHandlers from '~/hooks/useCursorHandler';

const Header = () => {
  const [weekContributions, setWeekContributions] =
    useState<Contribution>(null);
  const cursorHandlers = useCursorHandlers();

  /* get github contributions */
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const data = await fetchContribution();
        const totalContributions =
          data.contributionsCollection.contributionCalendar.totalContributions;
        const weekData =
          data.contributionsCollection.contributionCalendar.weeks;
        setWeekContributions({
          total: totalContributions,
          week: weekData[weekData.length - 1].contributionDays,
        });
      } catch (e) {
        console.warn(e);
      }
    };
    fetchContributions();
  }, []);

  const getOpacity = (color: string) => {
    if (color === '#9be9a8') {
      return 0.2;
    } else if (color === '#40c463') {
      return 0.4;
    } else if (color === '#30a14e') {
      return 0.7;
    } else if (color === '#216e39') {
      return 1;
    } else {
      return 0.1;
    }
  };

  return (
    <HeaderStyled>
      <Logo href="/">
        <Typography tag="span" font={FontType.SEMI_BOLD_BODY_01}>
          ☺︎ FE DEV | JIWON LEE
        </Typography>
      </Logo>
      <GithubGrass>
        {weekContributions?.week.map((value, index) => (
          <GithubGrassItem
            key={`color-${index}`}
            opacity={getOpacity(value.color)}
          />
        ))}
        {weekContributions?.week.length < 7 &&
          [...Array(7 - Number(weekContributions?.week.length))].map(
            (_, index) => (
              <GithubGrassItem key={`none-${index}`} color={Color.DEPTH_L} />
            ),
          )}
        <Typography font={FontType.MEDIUM_BODY_03} marginLeft={100}>
          {weekContributions?.total} contributions in 2021
        </Typography>
      </GithubGrass>
      <ButtonView>
        <LinkButton
          href="https://github.com/leejiwonn"
          target="_blank"
          {...cursorHandlers}
        >
          <Typography tag="span" font={FontType.SEMI_BOLD_BODY_02}>
            GITHUB
          </Typography>
        </LinkButton>
        <LinkButton
          href="https://leejiwonn.tistory.com"
          target="_blank"
          {...cursorHandlers}
        >
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
  position: relative;
`;

const GithubGrassItem = styled.div<{ color?: string; opacity?: number }>`
  width: 1.8em;
  height: 1.8em;
  background-color: ${({ color }) => (color ? color : Color.DEPTH_D)};
  opacity: ${({ opacity }) => opacity};
  border-radius: 0.4em;
  margin: 0 0.3em;
`;

const ButtonView = styled.div``;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.3em 1.2em;
  border: 2px solid ${Color.DEPTH_D};
  border-radius: 4em;
  margin: 0 0.5em;
  transition: 0.2s;

  :hover {
    background-color: rgba(64, 75, 80, 0.1);
    transition: 0.4s;
  }
`;

export default Header;
