import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '~/components/Header';
// import Footer from '~/components/Footer';
import Typography from '~/components/Typography';
import { Color } from '~/utils/color';
import { FontType } from '~/utils/font';

import SpeechIcon from '../../public/icons/icon-speech.svg';
import Dot from '~/components/Dot';
import Noise from '~/components/Noise';

const Home = () => {
  const [maxWidth, setMaxWidth] = useState(0);
  const [techItem, setTechItem] = useState(0);

  gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* horizontal scroll */
  useEffect(() => {
    setMaxWidth(document.querySelector('.container').scrollWidth);

    const sections = gsap.utils.toArray('section');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: false,
        start: 'top top',
        scrub: 1,
        end: () => '+=' + (maxWidth - window.innerWidth),
      },
    });
  }, []);

  // animation
  useEffect(() => {
    const element = scrollRef.current;
    gsap.fromTo(
      element.querySelector('.main-title'),
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
      },
    );
  }, []);

  return (
    <>
      <Header />
      <HomeStyled ref={scrollRef} className="container" maxWidth={maxWidth}>
        <Page1Styled>
          <Page1MainTitle className="main-title">
            <Typography font={FontType.BOLD_TITLE_01}>Hi There! 👋</Typography>
            <Typography tag="h1" font={FontType.EXTRA_BOLD_BIG}>
              I’m Jiwon Lee,
              <br />
              Front-End Developer.
            </Typography>
          </Page1MainTitle>
        </Page1Styled>
        <Page2Styled>
          <Dot />
          <Page2Box>
            <Typography font={FontType.EXTRA_BOLD_HEAD_02}>
              만나서 반가워요!
              <br />
              활발하고 긍정적인 개발자 이지원입니다 😆
            </Typography>
            <Page2SubTitleStyled>
              <Typography
                font={FontType.MEDIUM_BODY_03}
                marginLeft={10}
                marginBottom={4}
              >
                2022년 2월 졸업예정
              </Typography>
              <Page2SubTitleBox>
                <Typography
                  font={FontType.MEDIUM_BODY_01}
                  color={Color.DEPTH_L}
                >
                  계원예술대학교 디지털미디어디자인학과 재학중
                </Typography>
                <SpeechIconStyled>
                  <SpeechIcon />
                </SpeechIconStyled>
              </Page2SubTitleBox>
            </Page2SubTitleStyled>
            <Page2DetailInfo>
              <Typography font={FontType.MEDIUM_TITLE_01} marginRight={200}>
                현재,
                <br />
                없으면 불편할 서비스를 만드는
                <br />
                개발자가 되기 위해 노력중이에요!
              </Typography>
              <Typography font={FontType.MEDIUM_TITLE_01}>
                미래,
                <br />
                오래 함께하고 싶은
                <br />
                사람으로 기억되고 싶습니다.
              </Typography>
            </Page2DetailInfo>
          </Page2Box>
          <Page2Deco>
            <Typography font={FontType.BOLD_BODY_01}>365 KM</Typography>
            <Typography font={FontType.BOLD_BODY_01}>
              목표를 이루기 위해, 오늘도 열심히 달리고 있어요 🏃‍♀️
            </Typography>
          </Page2Deco>
          <Dot />
        </Page2Styled>
        <Page3Styled>
          <Page3Item onClick={() => setTechItem(0)} active={techItem === 0}>
            <Typography
              font={FontType.SEMI_BOLD_TITLE_01}
              color={techItem === 0 ? Color.DEPTH_L : Color.DEPTH_D}
            >
              HTML5/CSS3
            </Typography>
            <Page3ItemBox active={techItem === 0}>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  01.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  시맨틱 마크업을 준수하며,
                  <br />웹 표준을 지키고자 노력합니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  02.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  CSS-in-JS 기법을
                  <br />
                  활용할 수 있습니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  03.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  여러 브라우저를
                  <br />
                  지원할 수 있습니다.
                </Typography>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
          <Page3Item onClick={() => setTechItem(1)} active={techItem === 1}>
            <Typography
              font={FontType.SEMI_BOLD_TITLE_01}
              color={techItem === 1 ? Color.DEPTH_L : Color.DEPTH_D}
            >
              JAVASCRIPT (ES6+)
            </Typography>
            <Page3ItemBox active={techItem === 1}>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  01.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  ES2015 이후의
                  <br />
                  자바스크립트 문법에 익숙합니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  02.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  타입스크립트를 이용한
                  <br />
                  자바스크립트 정적 타입 분석 경험이 있습니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  03.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  서버 사이드 렌더링 (SSR)
                  <br />
                  개발 경험이 있습니다.
                </Typography>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
          <Page3Item onClick={() => setTechItem(2)} active={techItem === 2}>
            <Typography
              font={FontType.SEMI_BOLD_TITLE_01}
              color={techItem === 2 ? Color.DEPTH_L : Color.DEPTH_D}
            >
              REACT
            </Typography>
            <Page3ItemBox active={techItem === 2}>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  01.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  리액트 사용에 익숙하며,
                  <br />
                  리액트 훅을 주로 사용합니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  02.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  상태 관리 라이브러리
                  <br />
                  사용 경험이 있습니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  03.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  모바일 크로스 플랫폼
                  <br />
                  개발 경험이 있습니다.
                </Typography>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
          <Page3Item
            onClick={() => setTechItem(3)}
            last={true}
            active={techItem === 3}
          >
            <Typography
              font={FontType.SEMI_BOLD_TITLE_01}
              color={techItem === 3 ? Color.DEPTH_L : Color.DEPTH_D}
            >
              TOOLING
            </Typography>
            <Page3ItemBox active={techItem === 3}>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  01.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  개발 환경을 구축한
                  <br />
                  경험이 있습니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  02.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  테스트 및 배포 자동화
                  <br />
                  경험이 있습니다.
                </Typography>
              </Page3ItemInfo>
              <Page3ItemInfo>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_01}
                  color={Color.DEPTH_L}
                  marginBottom={40}
                >
                  03.
                </Typography>
                <Typography
                  font={FontType.MEDIUM_TITLE_02}
                  color={Color.DEPTH_L}
                >
                  분산 버전 관리 시스템
                  <br />
                  이용에 익숙합니다.
                </Typography>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
        </Page3Styled>
        <Page4Styled>
          <Dot />
        </Page4Styled>
        <Page5Styled>
          <Dot />
          <Page5Box>
            <Page5BoxItem>
              <Page5BoxItemBar>
                <Page5BoxItemCircle color={Color.POINT_O} />
                <Page5BoxItemCircle color={Color.POINT_B} />
                <Page5BoxItemCircle color={Color.DEPTH_L} />
              </Page5BoxItemBar>
              <Page5BoxInfo>
                <Typography font={FontType.SEMI_BOLD_TITLE_01}>
                  42SEOUL
                </Typography>
                <div>
                  <Typography
                    font={FontType.SEMI_BOLD_TITLE_02}
                    marginBottom={20}
                  >
                    2020.12 ~ Current
                  </Typography>
                  <Typography font={FontType.LIGHT_BODY_01}>
                    이노베이션 아카데미
                    <br />
                    소프트웨어 교육프로그램
                  </Typography>
                </div>
              </Page5BoxInfo>
            </Page5BoxItem>
            <Page5BoxItem>
              <Page5BoxItemBar>
                <Page5BoxItemCircle color={Color.POINT_O} />
                <Page5BoxItemCircle color={Color.POINT_B} />
                <Page5BoxItemCircle color={Color.DEPTH_L} />
              </Page5BoxItemBar>
              <Page5BoxInfo>
                <Typography font={FontType.SEMI_BOLD_TITLE_01}>
                  NEXTERS
                </Typography>
                <div>
                  <Typography
                    font={FontType.SEMI_BOLD_TITLE_02}
                    marginBottom={20}
                  >
                    2021.07 ~ Current
                  </Typography>
                  <Typography font={FontType.LIGHT_BODY_01}>
                    IT 연합 동아리 : 웹 프론트엔드 개발
                    <br />
                    (19기, 20기 운영진 활동)
                  </Typography>
                </div>
              </Page5BoxInfo>
            </Page5BoxItem>
            <Page5BoxItem>
              <Page5BoxItemBar>
                <Page5BoxItemCircle color={Color.POINT_O} />
                <Page5BoxItemCircle color={Color.POINT_B} />
                <Page5BoxItemCircle color={Color.DEPTH_L} />
              </Page5BoxItemBar>
              <Page5BoxInfo>
                <Typography font={FontType.SEMI_BOLD_TITLE_01}>
                  DEPROMEET
                </Typography>
                <div>
                  <Typography
                    font={FontType.SEMI_BOLD_TITLE_02}
                    marginBottom={20}
                  >
                    2019.03 ~ 2020.12
                  </Typography>
                  <Typography font={FontType.LIGHT_BODY_01}>
                    IT 연합 동아리 : 웹 프론트엔드 개발
                    <br />
                    (6기, 7기 운영진, 8기 활동)
                  </Typography>
                </div>
              </Page5BoxInfo>
            </Page5BoxItem>
            <Page5BoxItem>
              <Page5BoxItemBar>
                <Page5BoxItemCircle color={Color.POINT_O} />
                <Page5BoxItemCircle color={Color.POINT_B} />
                <Page5BoxItemCircle color={Color.DEPTH_L} />
              </Page5BoxItemBar>
              <Page5BoxInfo>
                <Typography font={FontType.SEMI_BOLD_TITLE_01}>
                  토의스토리
                </Typography>
                <div>
                  <Typography
                    font={FontType.SEMI_BOLD_TITLE_02}
                    marginBottom={20}
                  >
                    2019.03 ~ 2020.12
                  </Typography>
                  <Typography font={FontType.LIGHT_BODY_01}>
                    계원예술대학교 토의/토론 동아리
                    <br />
                    (1기 회장, 2기 회원 활동)
                  </Typography>
                </div>
              </Page5BoxInfo>
            </Page5BoxItem>
          </Page5Box>
        </Page5Styled>
        <Page6Styled>
          <Dot />
          <Page6Box>
            <Typography font={FontType.EXTRA_BOLD_HEAD_02} marginBottom={120}>
              Want to talk about anything?
              <br />
              Let’s do it! 😄
            </Typography>
            <Typography font={FontType.SEMI_BOLD_TITLE_02} marginBottom={10}>
              PHONE 📞
            </Typography>
            <Typography font={FontType.LIGHT_TITLE_01} marginBottom={60}>
              +82 1087837803
            </Typography>
            <Typography font={FontType.SEMI_BOLD_TITLE_02} marginBottom={10}>
              EMAIL 📬
            </Typography>
            <Typography font={FontType.LIGHT_TITLE_01}>
              bbongwa123@gmail.com
            </Typography>
          </Page6Box>
        </Page6Styled>
        <EndStyled>
          <LinkButton>F</LinkButton>
          <LinkButton>I</LinkButton>
          <LinkButton>L</LinkButton>
        </EndStyled>
      </HomeStyled>
      {/* <Footer /> */}
      <Noise maxWidth={maxWidth} />
    </>
  );
};

const HomeStyled = styled.div<{ maxWidth: number }>`
  width: ${({ maxWidth }) => maxWidth + 'px'};
  height: calc(100vh - 8.8em);
  overflow: hidden;
  display: flex;
  padding-top: 6em;
  border-bottom: 3px solid ${Color.DEPTH_D};
`;

const Page1Styled = styled.section`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const Page1MainTitle = styled.div`
  padding-left: 10em;
  padding-right: 37em;
`;

const Page2Styled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
`;

const Page2Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15em;
`;

const Page2SubTitleStyled = styled.div`
  position: absolute;
  top: -1.2vh;
  left: 53em;
`;

const Page2SubTitleBox = styled.div`
  position: relative;
  padding: 1.2em;
  border-radius: 10px;
  background-color: ${Color.DEPTH_D};
`;

const SpeechIconStyled = styled.div`
  position: absolute;
  top: 4.5em;
  left: 50%;
`;

const Page2DetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8em;
`;

const Page2Deco = styled.div`
  width: auto;
  height: 86%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 17em;
`;

const Page3Styled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
`;

const Page3Item = styled.button<{ last?: boolean; active: boolean }>`
  width: 130em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ active }) => (active ? 'flex-start' : 'center')};
  align-items: flex-start;
  border-bottom: ${({ last }) => !last && `3px solid ${Color.DEPTH_D}`};
  padding: 0 50px;
  padding-top: ${({ active }) => active && '2em'};
  background-color: ${({ active }) => active && Color.DEPTH_D};
  transition: 0.6s;
`;

const Page3ItemBox = styled.div<{ active: boolean }>`
  width: 100%;
  height: ${({ active }) => (active ? '50vh' : 0)};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  transition: 0.6s;
`;

const Page3ItemInfo = styled.div`
  margin-top: -5em;
`;

const Page4Styled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
`;

const Page5Styled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
`;

const Page5Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 16em;
`;

const Page5BoxItem = styled.div`
  width: 36em;
  height: 45vh;
  position: relative;
  border: 4px solid ${Color.DEPTH_D};
  border-radius: 10px;
  margin: 0 1.5em;
`;

const Page5BoxItemBar = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  background-color: ${Color.DEPTH_D};
  padding-left: 2em;
`;

const Page5BoxItemCircle = styled.div<{ color: Color }>`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 1em;
`;

const Page5BoxInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 5em;
  padding-top: 10em;
`;

const Page6Styled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
`;

const Page6Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16em;
  padding-right: 30em;
`;

const EndStyled = styled.section`
  width: 10em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Color.DEPTH_D};
  padding: 0 3em;
  padding-bottom: 15em;
  z-index: 999;
`;

const LinkButton = styled.button`
  width: 4em;
  height: 4em;
  background-color: ${Color.DEPTH_L};
  border-radius: 50%;
  margin: 1em 0;
`;

export default Home;
