import styled from '@emotion/styled';
import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '~/components/Header';
import Typography from '~/components/Typography';
import Dot from '~/components/Dot';
import Noise from '~/components/Noise';
import { Color } from '~/utils/color';
import { Align, FontType } from '~/utils/font';
import useCursorHandlers from '~/hooks/useCursorHandler';

import SpeechIcon from '../../public/icons/icon-speech.svg';
import ArrowIcon from '../../public/icons/icon-arrow.svg';
import DashLineImage from '../../public/images/image-dash-line.svg';
import FacebookIcon from '../../public/icons/icon-facebook.svg';
import InstagramIcon from '../../public/icons/icon-instagram.svg';
import LinkedinIcon from '../../public/icons/icon-linkedin.svg';
import CopyIcon from '../../public/icons/icon-copy.svg';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const cursorHandlers = useCursorHandlers();

  const [scrollWidth, setScrollWidth] = useState(0);
  const prograssRef = useRef<HTMLDivElement | null>(null);

  const [techItem, setTechItem] = useState(0);
  const [projectItem, setProjectItem] = useState(0);
  const [activityItem, setActivityItem] = useState(-1);

  /* scroll prograssBar */
  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setScrollWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;
    setScrollWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  /* horizontal scroll */
  const panelsContainer = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const panels: HTMLDivElement[] = gsap.utils.toArray('section');

    const maxWidth = () => {
      let max = 0;
      panels.forEach((panel) => (max += panel.offsetWidth));
      return max;
    };

    gsap.to(panels, {
      x: () => -maxWidth() + window.innerWidth,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        start: 'top top',
        scrub: 1,
        end: () => '+=' + panelsContainer.current?.offsetWidth,
      },
    });
  }, []);

  /* scrolling animation */
  const prev = useRef(0);
  const scrolling = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const elem = scrolling.current;
    const listener = () => {
      if (elem == null) {
        return;
      }

      const scrollY = window.scrollY;
      const diff = (prev.current - scrollY) * 0.35;

      const x = Number(elem.getAttribute('data-rotate') ?? '0');
      const y = x - diff;

      elem.style.transform = `rotate(${y}deg)`;
      elem.style.transition = '0.3s ease-out';
      elem.setAttribute('data-rotate', y.toString());

      prev.current = scrollY;
    };

    window.addEventListener('scroll', listener, true);

    return () => {
      window.removeEventListener('scroll', listener, true);
    };
  }, []);

  /* copy clipboard */
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('이메일을 복사했습니다.');
    } catch (error) {
      alert('다시 시도해주세요.');
    }
  };

  return (
    <>
      <Header />
      <HomeStyled ref={panelsContainer}>
        <Page1Styled>
          <ScrollImageStyled>
            <ScrollImage
              ref={scrolling}
              src="/images/image-scroll.png"
              alt="스크롤 이미지"
            />
            <ScrollIcon>
              <ScrollIconWheel />
            </ScrollIcon>
          </ScrollImageStyled>
          <Page1MainTitle className="main-title">
            <Typography font={FontType.BOLD_TITLE_01}>Hi There! 👋</Typography>
            <Typography tag="h1" font={FontType.EXTRA_BOLD_BIG}>
              I’m Jiwon Lee,
              <br />
              Front-End Developer.
            </Typography>
          </Page1MainTitle>
          <Page1SubTitle>
            <Typography font={FontType.MEDIUM_BODY_01}>
              오늘도 능동적으로 성장하고자 열심히 🔥 움직이고 있습니다.
            </Typography>
            <Page1Arrow />
          </Page1SubTitle>
        </Page1Styled>
        <Page2Styled>
          <Dot />
          <Page2Box>
            <Page2TitleInfo>
              <Typography font={FontType.EXTRA_BOLD_HEAD_02}>
                만나서 반가워요!
              </Typography>
              <Page2TitleBigStyled>
                <BigTypoAnimationStyled>
                  <BigTypoAnimationItem>
                    {[
                      '활발하고 긍정적인',
                      '사용자 경험 개선에 관심이 많은',
                      '누구보다 꼼꼼하게 정리/점검하는',
                      '끝까지 파고 드는 것을 좋아하는',
                      '솔직하고 적극적으로 발언하는',
                    ].map((value, index) => (
                      <Typography
                        key={index}
                        font={FontType.EXTRA_BOLD_HEAD_02}
                        align={Align.CENTER}
                      >
                        {value}
                      </Typography>
                    ))}
                  </BigTypoAnimationItem>
                </BigTypoAnimationStyled>
                <Typography font={FontType.EXTRA_BOLD_HEAD_02} marginLeft={20}>
                  개발자 이지원 😆 입니다.
                </Typography>
              </Page2TitleBigStyled>
            </Page2TitleInfo>
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
            <Page2DetailInfoStyled>
              <Page2DetailInfo>
                <Typography font={FontType.MEDIUM_TITLE_02} marginBottom={20}>
                  현재,
                </Typography>
                <TypoAnimationStyled>
                  <TypoAnimationItem length={3}>
                    {[
                      '항상 사용자의 입장에서 고민하는',
                      '사용하는 가치에서 만족을 느끼는',
                      '없으면 불편할 서비스를 만드는',
                    ].map((value, index) => (
                      <Typography
                        key={index}
                        font={FontType.MEDIUM_TITLE_02}
                        align={Align.CENTER}
                      >
                        {value}
                      </Typography>
                    ))}
                  </TypoAnimationItem>
                </TypoAnimationStyled>
                <Typography font={FontType.MEDIUM_TITLE_02} marginTop={20}>
                  개발자가 되기 위해 노력중이에요!
                </Typography>
              </Page2DetailInfo>
              <Page2DetailInfo>
                <Typography font={FontType.MEDIUM_TITLE_02} marginBottom={20}>
                  미래,
                </Typography>
                <TypoAnimationStyled>
                  <TypoAnimationItem length={5}>
                    {[
                      '오래 함께하고 싶은',
                      '타인에게 좋은 자극을 주는',
                      '걱정 없이 기댈 수 있는',
                      '어제보다 오늘 더 발전하는',
                      '가능성을 만들어내는',
                    ].map((value, index) => (
                      <Typography
                        key={index}
                        font={FontType.MEDIUM_TITLE_02}
                        align={Align.CENTER}
                      >
                        {value}
                      </Typography>
                    ))}
                  </TypoAnimationItem>
                </TypoAnimationStyled>
                <Typography font={FontType.MEDIUM_TITLE_02} marginTop={20}>
                  사람으로 기억되고 싶습니다.
                </Typography>
              </Page2DetailInfo>
            </Page2DetailInfoStyled>
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
          <Page3Item
            onClick={() => setTechItem(0)}
            active={techItem === 0}
            {...(techItem !== 0 && cursorHandlers)}
          >
            <Page3ItemTitle>
              <Typography
                font={FontType.SEMI_BOLD_TITLE_02}
                color={techItem === 0 ? Color.DEPTH_L : Color.DEPTH_D}
                marginBottom={50}
              >
                HTML5/CSS3
              </Typography>
              <Page3ItemButton active={techItem === 0} />
            </Page3ItemTitle>
            <Page3LineStyled active={techItem === 0}>
              <DashLineImage stroke={Color.DEPTH_L} />
            </Page3LineStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  시맨틱 마크업을 준수하며,
                  <br />웹 표준을 지키고자 노력합니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>Web</Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  CSS-in-JS 기법을
                  <br />
                  활용할 수 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Emotion
                    </Typography>
                  </Page3ItemTag>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      styled-components
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  여러 브라우저를
                  <br />
                  지원할 수 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Media Query
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
          <Page3Item
            onClick={() => setTechItem(1)}
            active={techItem === 1}
            {...(techItem !== 1 && cursorHandlers)}
          >
            <Page3ItemTitle>
              <Typography
                font={FontType.SEMI_BOLD_TITLE_02}
                color={techItem === 1 ? Color.DEPTH_L : Color.DEPTH_D}
                marginBottom={50}
              >
                Javascript (ES6+)
              </Typography>
              <Page3ItemButton active={techItem === 1} />
            </Page3ItemTitle>
            <Page3LineStyled active={techItem === 1}>
              <DashLineImage stroke={Color.DEPTH_L} />
            </Page3LineStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  ES2015 이후의
                  <br />
                  자바스크립트 문법에 익숙합니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Javascript (ES6+)
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  자바스크립트
                  <br />
                  정적 타입 분석 경험이 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Typescript
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  서버 사이드 렌더링 (SSR)
                  <br />
                  개발 경험이 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Next.js
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
          <Page3Item
            onClick={() => setTechItem(2)}
            active={techItem === 2}
            {...(techItem !== 2 && cursorHandlers)}
          >
            <Page3ItemTitle>
              <Typography
                font={FontType.SEMI_BOLD_TITLE_02}
                color={techItem === 2 ? Color.DEPTH_L : Color.DEPTH_D}
                marginBottom={50}
              >
                React
              </Typography>
              <Page3ItemButton active={techItem === 2} />
            </Page3ItemTitle>
            <Page3LineStyled active={techItem === 2}>
              <DashLineImage stroke={Color.DEPTH_L} />
            </Page3LineStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  리액트 사용에 익숙하며,
                  <br />
                  리액트 훅을 주로 사용합니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>React</Typography>
                  </Page3ItemTag>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      React Hooks
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  상태 관리 라이브러리
                  <br />
                  사용 경험이 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>MobX</Typography>
                  </Page3ItemTag>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>Redux</Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  모바일 크로스 플랫폼
                  <br />
                  개발 경험이 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      React Native
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
          <Page3Item
            onClick={() => setTechItem(3)}
            last={true}
            active={techItem === 3}
            {...(techItem !== 3 && cursorHandlers)}
          >
            <Page3ItemTitle>
              <Typography
                font={FontType.SEMI_BOLD_TITLE_02}
                color={techItem === 3 ? Color.DEPTH_L : Color.DEPTH_D}
                marginBottom={50}
              >
                TOOLING
              </Typography>
              <Page3ItemButton active={techItem === 3} />
            </Page3ItemTitle>
            <Page3LineStyled active={techItem === 3}>
              <DashLineImage stroke={Color.DEPTH_L} />
            </Page3LineStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  개발 환경을 구축한
                  <br />
                  경험이 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Webpack
                    </Typography>
                  </Page3ItemTag>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>Babel</Typography>
                  </Page3ItemTag>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>ESLint</Typography>
                  </Page3ItemTag>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Prettier
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  테스트 및 배포 자동화
                  <br />
                  경험이 있습니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      CI / CD
                    </Typography>
                  </Page3ItemTag>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>
                      Github Action
                    </Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
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
                  font={FontType.MEDIUM_TITLE_03}
                  color={Color.DEPTH_L}
                >
                  분산 버전 관리 시스템
                  <br />
                  이용에 익숙합니다.
                </Typography>
                <Page3ItemTagStyled>
                  <Page3ItemTag>
                    <Typography font={FontType.BOLD_BODY_02}>Git</Typography>
                  </Page3ItemTag>
                </Page3ItemTagStyled>
              </Page3ItemInfo>
            </Page3ItemBox>
          </Page3Item>
        </Page3Styled>
        <Page4Styled>
          <Dot />
          <Page4InfoStyled>
            <Page4Navigation>
              <Page4PrograssBarStyled>
                <Page4State>
                  <Typography
                    tag="span"
                    font={FontType.BOLD_BODY_01}
                    marginRight={30}
                  >
                    0{projectItem + 1}
                  </Typography>
                  <Typography tag="span" font={FontType.MEDIUM_BODY_02}>
                    / 07
                  </Typography>
                </Page4State>
                <Page4PrograssBar>
                  <Page4Prograss width={(projectItem + 1) * 14.3} />
                  <Page4Background />
                </Page4PrograssBar>
              </Page4PrograssBarStyled>
              <Page4ControlButtonStyled>
                <Page4PrevButton
                  disabled={projectItem === 0}
                  onClick={() =>
                    projectItem > 0 && setProjectItem((prev) => prev - 1)
                  }
                  {...cursorHandlers}
                >
                  이전
                </Page4PrevButton>
                <Page4NextButton
                  disabled={projectItem === 6}
                  onClick={() =>
                    projectItem < 6 && setProjectItem((prev) => prev + 1)
                  }
                  {...cursorHandlers}
                >
                  다음
                </Page4NextButton>
              </Page4ControlButtonStyled>
            </Page4Navigation>
            <Page4BoxStyled>
              <Page4Container index={projectItem}>
                <Page4Box>
                  <Page4Info>
                    <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
                      FLOOM (2021.09 ~ 2021.11)
                    </Typography>
                    <Typography
                      font={FontType.MEDIUM_TITLE_03}
                      marginBottom={60}
                    >
                      몰입 👀 분위기 형성 웹 서비스
                    </Typography>
                    <Page4Tags>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Typescript
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Next.js
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          React
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          SWR
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Emotion
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Lottie
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Figma
                        </Typography>
                      </Page4TagItem>
                    </Page4Tags>
                    <Page4LineStyled>
                      <DashLineImage stroke={Color.DEPTH_D} />
                    </Page4LineStyled>
                    <Typography
                      font={FontType.SEMI_BOLD_BODY_01}
                      marginBottom={40}
                    >
                      🔍 주요 업무 : PM 역할과 프론트엔드 개발을 담당함.
                    </Typography>
                    <Typography font={FontType.LIGHT_BODY_02}>
                      - 사용자 피드백을 바탕으로 하는 3번의 MVP 검증 과정 진행
                      <br />- 가로 스크롤 및 애니메이션을 적용한 서비스 소개
                      페이지 구현
                      <br />- 전반적인 UI 구현 및 API 연동을 혼자 전담하여 업무
                      수행
                    </Typography>
                    <Page4LinkButtonStyled>
                      <Page4LinkButton
                        href="https://floom.vercel.app/intro"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Website
                        </Typography>
                      </Page4LinkButton>
                    </Page4LinkButtonStyled>
                  </Page4Info>
                </Page4Box>
                <Page4Box>
                  <Page4Info>
                    <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
                      본캐마스터 (2021.07 ~ 2021.09)
                    </Typography>
                    <Typography
                      font={FontType.MEDIUM_TITLE_03}
                      marginBottom={60}
                    >
                      루틴 메이커 ✍️ 앱 서비스
                    </Typography>
                    <Page4Tags>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Typescript
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          React Native
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          SWR
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          MobX
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Emotion
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Lottie
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          FCM
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Figma
                        </Typography>
                      </Page4TagItem>
                    </Page4Tags>
                    <Page4LineStyled>
                      <DashLineImage stroke={Color.DEPTH_D} />
                    </Page4LineStyled>
                    <Typography
                      font={FontType.SEMI_BOLD_BODY_01}
                      marginBottom={40}
                    >
                      🔍 주요 업무 : 공동 PM 역할과 프론트엔드 개발을 담당함.
                    </Typography>
                    <Typography font={FontType.LIGHT_BODY_02}>
                      - 카카오 로그인 연동 및 리다이렉션
                      <br />
                      - 메인 화면의 테스크 리스트 뷰, 설정 페이지, 친구 초대
                      페이지 UI 및 기능 구현
                      <br />- 커스텀 텍스트, 모달, 헤더 및 상태바, Toast 메시지
                      컴포넌트 구현 및 적용
                      <br />- 푸시알림 구현을 위한 FCM 설정, Pretendard 폰트
                      적용
                    </Typography>
                    <Page4LinkButtonStyled>
                      <Page4LinkButton
                        href="https://play.google.com/store/apps/details?id=com.routine"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Android
                        </Typography>
                      </Page4LinkButton>
                      <Page4LinkButton
                        href="https://github.com/Nexters/gamsung-routine-front"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Github
                        </Typography>
                      </Page4LinkButton>
                    </Page4LinkButtonStyled>
                  </Page4Info>
                </Page4Box>
                <Page4Box>
                  <Page4Info>
                    <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
                      작업공간 : v2 (2021.01 ~ 현재)
                    </Typography>
                    <Typography
                      font={FontType.MEDIUM_TITLE_03}
                      marginBottom={60}
                    >
                      작업 🧑‍💻 하기 좋은 주변 카페 추천 앱 서비스
                    </Typography>
                    <Page4Tags>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Javascript
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          React Native
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          SWR
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Emotion
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Zeplin
                        </Typography>
                      </Page4TagItem>
                    </Page4Tags>
                    <Page4LineStyled>
                      <DashLineImage stroke={Color.DEPTH_D} />
                    </Page4LineStyled>
                    <Typography
                      font={FontType.SEMI_BOLD_BODY_01}
                      marginBottom={40}
                    >
                      🔍 주요 업무 : 로그인 및 상세 화면 UI 및 기능 구현을
                      담당함.
                    </Typography>
                    <Typography font={FontType.LIGHT_BODY_02}>
                      - 카카오 로그인 구현
                      <br />
                      - 로그인 화면의 사용자 프로필 이미지 변경, 닉네임 변경,
                      선호 태그 선택 기능 구현
                      <br />- 상세 화면의 UI 및 기능 구현 (카페 정보 표시,
                      좋아요 및 북마크 기능, 태그 및 댓글 등록 기능)
                      <br />- 페이스북 이미지 형태의 그리드 컴포넌트, 모달 및
                      슬라이드 기능 구현
                    </Typography>
                    <Page4LinkButtonStyled>
                      <Page4LinkButton
                        href="https://play.google.com/store/apps/details?id=com.yonghochoi.nomadcafeapp"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Android
                        </Typography>
                      </Page4LinkButton>
                      <Page4LinkButton
                        href="https://github.com/working-space/working-space-react-native"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Github
                        </Typography>
                      </Page4LinkButton>
                    </Page4LinkButtonStyled>
                  </Page4Info>
                </Page4Box>
                <Page4Box>
                  <Page4Info>
                    <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
                      Matching42 (2021.03 ~ 현재)
                    </Typography>
                    <Typography
                      font={FontType.MEDIUM_TITLE_03}
                      marginBottom={60}
                    >
                      42 Seoul 카뎃을 대상으로 하는 스터디 매칭 🤝 웹 서비스
                    </Typography>
                    <Page4Tags>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Javascript
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          React
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          SWR
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          styled-components
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Github Action
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          AWS S3 / EC2
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Adobe XD
                        </Typography>
                      </Page4TagItem>
                    </Page4Tags>
                    <Page4LineStyled>
                      <DashLineImage stroke={Color.DEPTH_D} />
                    </Page4LineStyled>
                    <Typography
                      font={FontType.SEMI_BOLD_BODY_01}
                      marginBottom={40}
                    >
                      🔍 주요 업무 : 팀 내 프론트엔드 개발 리더 역할로, 전반적인
                      프론트엔드 개발 상황을 파악하고 관리하는 역할을 담당함.
                    </Typography>
                    <Typography font={FontType.LIGHT_BODY_02}>
                      - 프로젝트 환경셋팅 및 역할 분담 관리, 분기별 리팩토링
                      담당 (전반적인 UI 및 기능 개선)
                      <br />- 프로젝트 배포 및 자동화 (CI/CD) 설정
                    </Typography>
                    <Page4LinkButtonStyled>
                      <Page4LinkButton
                        href="https://matching42.com"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Website
                        </Typography>
                      </Page4LinkButton>
                      <Page4LinkButton
                        href="https://github.com/Matching42/Matching42-front"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Github
                        </Typography>
                      </Page4LinkButton>
                    </Page4LinkButtonStyled>
                  </Page4Info>
                </Page4Box>
                <Page4Box>
                  <Page4Info>
                    <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
                      RNDOC (2021.04 ~ 2021.05)
                    </Typography>
                    <Typography
                      font={FontType.MEDIUM_TITLE_03}
                      marginBottom={60}
                    >
                      리액트 네이티브 스터디 🌱 에서 출발한 공식 문서 한글 번역
                      앱 서비스
                    </Typography>
                    <Page4Tags>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          React Native
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Expo
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Emotion
                        </Typography>
                      </Page4TagItem>
                    </Page4Tags>
                    <Page4LineStyled>
                      <DashLineImage stroke={Color.DEPTH_D} />
                    </Page4LineStyled>
                    <Typography
                      font={FontType.SEMI_BOLD_BODY_01}
                      marginBottom={40}
                    >
                      🔍 주요 업무 : 스터디를 개설하고 운영했기 때문에
                      자연스럽게 프로젝트 팀장 역할을 수행함. PM 및 디자인,
                      프론트엔드 개발을 담당함.
                    </Typography>
                    <Typography font={FontType.LIGHT_BODY_02}>
                      - 프로젝트 환경셋팅과 구조 설계, 디자인 및 전반적인 UI
                      구현
                      <br />- 햄버거 메뉴 기능 구현
                    </Typography>
                    <Page4LinkButtonStyled>
                      <Page4LinkButton
                        href="https://play.google.com/store/apps/details?id=com.hyuna.rnproject"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Android
                        </Typography>
                      </Page4LinkButton>
                      <Page4LinkButton
                        href="https://fnd.io/#/kr/ios-universal-app/1570059041-rndoc-by-minsung-kim"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          iOS
                        </Typography>
                      </Page4LinkButton>
                      <Page4LinkButton
                        href="https://github.com/React-Native-docs/React-Native-docs"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Github
                        </Typography>
                      </Page4LinkButton>
                    </Page4LinkButtonStyled>
                  </Page4Info>
                </Page4Box>
                <Page4Box>
                  <Page4Info>
                    <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
                      Yanolja Renewal Project (2020.03 ~ 2020.06)
                    </Typography>
                    <Typography
                      font={FontType.MEDIUM_TITLE_03}
                      marginBottom={60}
                    >
                      국내 숙박 어플리케이션 야놀자 UX 개선 ✨ 프로젝트
                    </Typography>
                    <Page4Tags>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          HTML/CSS
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Javascript
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          GSAP
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Scroll Magic
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Adobe XD
                        </Typography>
                      </Page4TagItem>
                    </Page4Tags>
                    <Page4LineStyled>
                      <DashLineImage stroke={Color.DEPTH_D} />
                    </Page4LineStyled>
                    <Typography
                      font={FontType.SEMI_BOLD_BODY_01}
                      marginBottom={40}
                    >
                      🔍 주요 업무 : 서비스 기획 및 랜딩페이지 제작 역할을
                      담당함.
                    </Typography>
                    <Typography font={FontType.LIGHT_BODY_02}>
                      - UX 분석에 따른 아이디어 도출 및 인터뷰 진행
                      <br />
                      - A/B 테스트 화면 와이어프레임 제작
                      <br />- 서비스소개 웹 사이트 UI 및 스크롤 애니메이션 구현
                    </Typography>
                    <Page4LinkButtonStyled>
                      <Page4LinkButton
                        href="https://leejiwonn.github.io/yanolja/"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Website
                        </Typography>
                      </Page4LinkButton>
                    </Page4LinkButtonStyled>
                  </Page4Info>
                </Page4Box>
                <Page4Box>
                  <Page4Info>
                    <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
                      Radi (2020.03 ~ 2020.06)
                    </Typography>
                    <Typography
                      font={FontType.MEDIUM_TITLE_03}
                      marginBottom={60}
                    >
                      주의력결핍장애 아동을 위한 인공지능 🤖 멘탈 헬스케어
                      서비스
                    </Typography>
                    <Page4Tags>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          HTML/CSS
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Javascript
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          GSAP
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Scroll Magic
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          SpeechRecongnition API
                        </Typography>
                      </Page4TagItem>
                      <Page4TagItem>
                        <Typography
                          font={FontType.BOLD_BODY_02}
                          color={Color.DEPTH_L}
                        >
                          Adobe XD
                        </Typography>
                      </Page4TagItem>
                    </Page4Tags>
                    <Page4LineStyled>
                      <DashLineImage stroke={Color.DEPTH_D} />
                    </Page4LineStyled>
                    <Typography
                      font={FontType.SEMI_BOLD_BODY_01}
                      marginBottom={40}
                    >
                      🔍 주요 업무 : 서비스 기획 및 랜딩페이지 제작을 담당함.
                    </Typography>
                    <Typography font={FontType.LIGHT_BODY_02}>
                      - 연구계획서 작성, 사용자 분석 및 그에 따른 기능 도출
                      <br />
                      - 서비스소개 웹 사이트 UI 및 스크롤 애니메이션 구현
                      <br />- 음성인식에 따른 동작 기능 구현
                    </Typography>
                    <Page4LinkButtonStyled>
                      <Page4LinkButton
                        href="https://leejiwonn.github.io/radi"
                        target="_blank"
                        {...cursorHandlers}
                      >
                        <Typography
                          font={FontType.SEMI_BOLD_BODY_02}
                          color={Color.DEPTH_D}
                        >
                          Website
                        </Typography>
                      </Page4LinkButton>
                    </Page4LinkButtonStyled>
                  </Page4Info>
                </Page4Box>
              </Page4Container>
            </Page4BoxStyled>
          </Page4InfoStyled>
        </Page4Styled>
        <Page5Styled>
          <Dot />
          <Page5Box>
            <Page5BoxItem
              href="https://42seoul.kr/seoul42/main/view"
              target="_blank"
              {...cursorHandlers}
              onMouseOver={() => setActivityItem(0)}
              onMouseOut={() => setActivityItem(-1)}
            >
              <ArrowIconStyled active={activityItem === 0}>
                <ArrowIcon />
              </ArrowIconStyled>
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
                    font={FontType.SEMI_BOLD_TITLE_03}
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
            <Page5BoxItem
              href="http://teamnexters.com/"
              target="_blank"
              {...cursorHandlers}
              onMouseOver={() => setActivityItem(1)}
              onMouseOut={() => setActivityItem(-1)}
            >
              <ArrowIconStyled active={activityItem === 1}>
                <ArrowIcon />
              </ArrowIconStyled>
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
                    font={FontType.SEMI_BOLD_TITLE_03}
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
            <Page5BoxItem
              href="https://www.depromeet.com/"
              target="_blank"
              {...cursorHandlers}
              onMouseOver={() => setActivityItem(2)}
              onMouseOut={() => setActivityItem(-1)}
            >
              <ArrowIconStyled active={activityItem === 2}>
                <ArrowIcon />
              </ArrowIconStyled>
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
                    font={FontType.SEMI_BOLD_TITLE_03}
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
            <Page5BoxItem
              href="https://touistory.tistory.com/"
              target="_blank"
              {...cursorHandlers}
              onMouseOver={() => setActivityItem(3)}
              onMouseOut={() => setActivityItem(-1)}
            >
              <ArrowIconStyled active={activityItem === 3}>
                <ArrowIcon />
              </ArrowIconStyled>
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
                    font={FontType.SEMI_BOLD_TITLE_03}
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
            <Typography font={FontType.EXTRA_BOLD_HEAD_02} marginBottom={60}>
              Want to talk about anything?
              <br />
              Let’s do it! 😄
            </Typography>
            <DashLineImage stroke={Color.DEPTH_D} />
            <Typography
              font={FontType.SEMI_BOLD_TITLE_03}
              marginTop={140}
              marginBottom={10}
            >
              EMAIL 📬
            </Typography>
            <EmailStyled>
              <a href="mailto:bbongwa123@gmail.com" {...cursorHandlers}>
                <Typography tag="span" font={FontType.LIGHT_TITLE_02}>
                  bbongwa123@gmail.com
                </Typography>
              </a>
              <CopyButton
                onClick={() => handleCopyClipBoard('bbongwa123@gmail.com')}
                {...cursorHandlers}
              >
                <CopyIcon width="100%" height="100%" />
              </CopyButton>
            </EmailStyled>
          </Page6Box>
        </Page6Styled>
        <EndStyled>
          <LinkButton
            href="https://www.facebook.com/bbongwa/"
            target="_blank"
            {...cursorHandlers}
          >
            <FacebookIcon width="100%" height="100%" />
          </LinkButton>
          <LinkButton
            href="https://www.instagram.com/ljiwon_b/?hl=ko"
            target="_blank"
            {...cursorHandlers}
          >
            <InstagramIcon width="100%" height="100%" />
          </LinkButton>
          <LinkButton
            href="https://www.linkedin.com/in/jiwon-lee-b31020186/"
            target="_blank"
            {...cursorHandlers}
          >
            <LinkedinIcon width="100%" height="100%" />
          </LinkButton>
        </EndStyled>
      </HomeStyled>
      <Noise />
      <PagePrograssBarStyled ref={prograssRef}>
        <PagePrograssBar width={scrollWidth} />
      </PagePrograssBarStyled>
    </>
  );
};

const HomeStyled = styled.div`
  width: 700%;
  height: calc(100vh - 0.7em);
  display: flex;
  padding-top: 6em;
`;

const Page1Styled = styled.section`
  width: 140em;
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const ScrollImageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 6em;
  right: 6em;
`;

const ScrollImage = styled.img`
  width: 18em;
`;

const ScrollIcon = styled.div`
  width: 2.5em;
  height: 4em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${Color.POINT_O};
  border-radius: 2em;
`;

const ScrollIconWheel = styled.div`
  width: 1em;
  height: 1em;
  position: absolute;
  top: 0.7em;
  left: 30%;
  background-color: ${Color.DEPTH_L};
  border-radius: 50%;
  animation: mouse-wheel 1.2s ease-out infinite;

  @keyframes mouse-wheel {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(0.8em);
    }
  }
`;

const Page1MainTitle = styled.div`
  padding-left: 10em;
  padding-bottom: 4em;
`;

const Page1SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 10em;
  bottom: 4.5em;
`;

const Page1Arrow = styled.div`
  width: 45em;
  height: 0.25em;
  position: relative;
  border-radius: 30em;
  background-color: ${Color.DEPTH_D};
  margin-left: 2em;

  ::after,
  ::before {
    content: '';
    width: 1.6em;
    height: 0.25em;
    position: absolute;
    border-radius: 30em;
    background-color: ${Color.DEPTH_D};
  }
  ::after {
    transform: rotate(45deg);
    top: -0.5em;
    right: -0.25em;
  }
  ::before {
    transform: rotate(-45deg);
    top: 0.5em;
    right: -0.25em;
  }
`;

const Page2Styled = styled.section`
  width: 210em;
  position: relative;
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
  padding-left: 14em;
`;

const Page2TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10em;
`;

const Page2TitleBigStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
`;

const BigTypoAnimationStyled = styled.div`
  width: 70em;
  height: 8em;
  display: inline-block;
  overflow: hidden;
  border-radius: 1em;
  background-color: ${Color.POINT_B};
`;

const BigTypoAnimationItem = styled.div`
  animation: flip-big 16s cubic-bezier(0.13, 0.8, 0.22, 1) infinite;

  @keyframes flip-big {
    0% {
      margin-top: -29.8em;
    }
    10% {
      margin-top: -29.8em;
    }
    20% {
      margin-top: -22.2em;
    }
    30% {
      margin-top: -22.2em;
    }
    40% {
      margin-top: -14.6em;
    }
    50% {
      margin-top: -14.6em;
    }
    60% {
      margin-top: -7.4em;
    }
    70% {
      margin-top: -7.4em;
    }
    85% {
      margin-top: 0em;
    }
    100% {
      margin-top: -29.8em;
    }
  }
`;

const Page2SubTitleStyled = styled.div`
  position: absolute;
  top: 1.5vh;
  left: 96.6em;
  animation: elastic 0.6s ease-out infinite alternate;

  @keyframes elastic {
    0% {
      transform: translateY(0%);
    }

    36% {
      transform: translateY(-8%);
    }

    48% {
      transform: translateY(-6%);
    }
  }
`;

const Page2SubTitleBox = styled.div`
  position: relative;
  padding: 0.8em 1.2em;
  border-radius: 10px;
  background-color: ${Color.DEPTH_D};
`;

const SpeechIconStyled = styled.div`
  position: absolute;
  top: 3.5em;
  left: 50%;
`;

const Page2DetailInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const Page2DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8em;
  margin-right: 10em;
`;

const TypoAnimationStyled = styled.div`
  width: 36em;
  height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 1em;
  background-color: ${Color.POINT_B};
  padding-top: 0.1em;
`;

const TypoAnimationItem = styled.div<{ length: number }>`
  animation: ${({ length }) =>
    `flip-${length} ${
      length * 2 + 's'
    } cubic-bezier(0.13, 0.8, 0.22, 1) infinite`};

  @keyframes flip-3 {
    0% {
      margin-top: -7.2em;
    }
    20% {
      margin-top: -7.2em;
    }
    40% {
      margin-top: -3.5em;
    }
    60% {
      margin-top: -3.5em;
    }
    90% {
      margin-top: 0em;
    }
    100% {
      margin-top: -7.2em;
    }
  }

  @keyframes flip-5 {
    0% {
      margin-top: -14.3em;
    }
    10% {
      margin-top: -14.3em;
    }
    20% {
      margin-top: -10.7em;
    }
    30% {
      margin-top: -10.7em;
    }
    40% {
      margin-top: -7.1em;
    }
    50% {
      margin-top: -7.1em;
    }
    60% {
      margin-top: -3.5em;
    }
    70% {
      margin-top: -3.5em;
    }
    85% {
      margin-top: 0.2em;
    }
    100% {
      margin-top: -14.3em;
    }
  }
`;

const Page2Deco = styled.div`
  width: auto;
  height: 86%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Page3Styled = styled.section`
  width: 120em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
`;

const Page3Item = styled.button<{ last?: boolean; active: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ active }) => (active ? 'flex-start' : 'center')};
  align-items: flex-start;
  border-bottom: ${({ last }) => !last && `3px solid ${Color.DEPTH_D}`};
  padding: 0 3em;
  padding-top: ${({ active }) => (active ? '1.6em' : '1em')};
  background-color: ${({ active }) => active && Color.DEPTH_D};
  transition: 0.6s;

  :hover {
    background-color: ${({ active }) => !active && 'rgba(206, 233, 247, 0.25)'};
    transition: 0.4s;
  }
`;

const Page3ItemTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Page3ItemButton = styled.div<{ active: boolean }>`
  width: 2.5em;
  height: 2.5em;
  position: relative;

  ::before,
  ::after {
    content: '';
    width: 2.5em;
    height: 0.25em;
    position: absolute;
    top: ${({ active }) => (active ? '0.25em' : '0.5em')};
    left: 0;
    background-color: ${({ active }) =>
      active ? Color.DEPTH_L : Color.DEPTH_D};
    transition: 0.3s;
  }
  ::before {
    transform: ${({ active }) => (active ? 'rotate(45deg)' : 'rotate(90deg)')};
  }
  ::after {
    transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }
`;

const Page3LineStyled = styled.div<{ active: boolean }>`
  width: calc(100% + 5em);
  margin-top: 0.8em;
  margin-left: -2.5em;
  display: ${({ active }) => (!active ? 'none' : 'flex')};
`;

const Page3ItemBox = styled.div<{ active: boolean }>`
  width: 100%;
  height: ${({ active }) => (active ? '55vh' : 0)};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: 0.6s;
`;

const Page3ItemInfo = styled.div`
  margin-top: -5em;
`;

const Page3ItemTagStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3em;
`;

const Page3ItemTag = styled.div`
  display: inline-flex;
  background-color: ${Color.DEPTH_L};
  border-radius: 4em;
  padding: 0.6em 1.2em;
  margin-right: 1em;
`;

const Page4Styled = styled.section`
  width: 170em;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
  padding-right: 22em;
`;

const Page4InfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  padding-left: 14em;
`;

const Page4Navigation = styled.div`
  width: 90%;
  position: absolute;
  top: -3.2em;
  left: 10%;
  z-index: 999;
`;

const Page4PrograssBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Page4State = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 0.5em;
`;

const Page4PrograssBar = styled.div`
  width: 60%;
  height: 0.5em;
  position: relative;
  overflow: hidden;
  border-radius: 30em;
`;

const Page4Prograss = styled.div<{ width: number }>`
  width: ${({ width }) => width + '%'};
  height: 0.5em;
  position: absolute;
  left: 0;
  background-color: ${Color.POINT_O};
  transition: 0.2s;
  border-radius: 30em;
`;

const Page4Background = styled.div`
  width: 100%;
  height: 0.5em;
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${Color.POINT_O};
  opacity: 0.3;
`;

const Page4ControlButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0.5em;
`;

const Page4PrevButton = styled.button<{ disabled: boolean }>`
  padding: 0.5em;
  opacity: ${({ disabled }) => disabled && 0.4};
`;

const Page4NextButton = styled.button<{ disabled: boolean }>`
  padding: 0.5em;
  opacity: ${({ disabled }) => disabled && 0.4};
`;

const Page4BoxStyled = styled.div`
  width: 100%;
  height: 42em;
  position: relative;
  overflow: hidden;
`;

const Page4Container = styled.div<{ index: number }>`
  width: 100%;
  height: auto;
  margin-top: ${({ index }) => index * -42 + 'em'};
`;

const Page4Box = styled.div`
  width: 100%;
  height: 42em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Page4Info = styled.div`
  width: 60%;
  margin-top: 2.5em;
`;

const Page4Tags = styled.div`
  margin-bottom: 3em;
`;

const Page4LineStyled = styled.div`
  width: 100%;
  margin-bottom: 3em;

  svg {
    width: 100%;
  }
`;

const Page4TagItem = styled.div`
  display: inline-flex;
  padding: 0.5em 1em;
  border-radius: 40px;
  background-color: ${Color.DEPTH_D};
  margin-right: 0.8em;
`;

const Page4LinkButtonStyled = styled.div`
  margin-top: 3em;
`;

const Page4LinkButton = styled.a`
  display: inline-flex;
  padding: 0.5em 1em;
  border-radius: 40px;
  border: 2px solid ${Color.DEPTH_D};
  margin-right: 0.8em;
  transition: 0.2s;

  :hover {
    background-color: rgba(206, 233, 247, 0.3);
    transition: 0.4s;
  }
`;

// const Page4ImageView = styled.div`
//   width: 50%;
//   height: 40em;
//   background-color: ${Color.DEPTH_D};
//   margin-left: 6em;
// `;

const Page5Styled = styled.section`
  width: 200em;
  position: relative;
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
  margin: 0 14em;
`;

const Page5BoxItem = styled.a`
  width: 36em;
  height: 45vh;
  position: relative;
  border: 4px solid ${Color.DEPTH_D};
  border-radius: 10px;
  margin: 0 1.5em;
  transition: 0.2s;

  :hover {
    background-color: rgba(206, 233, 247, 0.25);
    transition: 0.4s;
  }
`;

const ArrowIconStyled = styled.div<{ active: boolean }>`
  position: absolute;
  top: 7em;
  right: 2em;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: 0.2s;
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

const Page6Styled = styled.section`
  width: 130em;
  position: relative;
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
  padding-left: 14em;
  padding-right: 30em;
`;

const EmailStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CopyButton = styled.button`
  width: 1.6em;
  height: 1.6em;
  margin-top: 0.4em;
  margin-left: 0.9em;
  opacity: 0.8;
`;

const EndStyled = styled.section`
  width: 6em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Color.DEPTH_D};
  padding: 0 2em;
  padding-bottom: 15em;
  z-index: 999;
`;

const LinkButton = styled.a`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  margin: 1em 0;
  opacity: 0.85;
  transition: 0.2s;

  :hover {
    opacity: 1;
    transition: 0.4s;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const PagePrograssBarStyled = styled.div`
  width: 100%;
  height: 0.7em;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgba(64, 75, 80, 0.2);
`;

const PagePrograssBar = styled.div<{ width: number }>`
  width: ${({ width }) => width + '%'};
  height: 100%;
  position: absolute;
  left: 0;
  background-color: ${Color.DEPTH_D};
  transition: 0.2s ease-out;
`;

export default Home;
