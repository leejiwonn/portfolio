import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const cursorHandlers = useCursorHandlers();

  const [techItem, setTechItem] = useState(0);

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
            <Typography font={FontType.MEDIUM_TITLE_03}>
              오늘도 능동적으로 성장하고자
              <br />
              열심히 🔥 움직이고 있습니다.
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
                  <TypoAnimationItem length={5}>
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
                  </TypoAnimationItem>
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
          <PageFooter>
            <Typography font={FontType.MEDIUM_HEAD_02}>ABOUT</Typography>
          </PageFooter>
        </Page2Styled>
        <Page3Styled>
          <Page3Item
            onClick={() => setTechItem(0)}
            active={techItem === 0}
            {...(techItem !== 0 && cursorHandlers)}
          >
            <Typography
              font={FontType.SEMI_BOLD_TITLE_02}
              color={techItem === 0 ? Color.DEPTH_L : Color.DEPTH_D}
              marginBottom={50}
            >
              HTML5/CSS3
            </Typography>
            <Page3LineStyled active={techItem === 0}>
              <Page3Line src="/images/image-dash-line.png" />
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
            <Typography
              font={FontType.SEMI_BOLD_TITLE_02}
              color={techItem === 1 ? Color.DEPTH_L : Color.DEPTH_D}
              marginBottom={50}
            >
              JAVASCRIPT (ES6+)
            </Typography>
            <Page3LineStyled active={techItem === 1}>
              <Page3Line src="/images/image-dash-line.png" />
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
            <Typography
              font={FontType.SEMI_BOLD_TITLE_02}
              color={techItem === 2 ? Color.DEPTH_L : Color.DEPTH_D}
              marginBottom={50}
            >
              REACT
            </Typography>
            <Page3LineStyled active={techItem === 2}>
              <Page3Line src="/images/image-dash-line.png" />
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
            <Typography
              font={FontType.SEMI_BOLD_TITLE_02}
              color={techItem === 3 ? Color.DEPTH_L : Color.DEPTH_D}
              marginBottom={50}
            >
              TOOLING
            </Typography>
            <Page3LineStyled active={techItem === 3}>
              <Page3Line src="/images/image-dash-line.png" />
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
          <PageFooter>
            <Typography font={FontType.MEDIUM_HEAD_02}>
              TECHS {'&'} TOOLS
            </Typography>
          </PageFooter>
        </Page3Styled>
        <Page4Styled>
          <Dot />
          <Page4Box>
            <Typography font={FontType.BOLD_TITLE_02} marginBottom={28}>
              본캐마스터 (2021.07 ~ 2021.09)
            </Typography>
            <Typography font={FontType.MEDIUM_TITLE_03} marginBottom={60}>
              루틴 메이커 앱 👩🏻‍💻 서비스
            </Typography>
            <Page4Tags>
              <Page4TagItem>
                <Typography font={FontType.BOLD_BODY_02} color={Color.DEPTH_L}>
                  Typescript
                </Typography>
              </Page4TagItem>
              <Page4TagItem>
                <Typography font={FontType.BOLD_BODY_02} color={Color.DEPTH_L}>
                  React Native
                </Typography>
              </Page4TagItem>
              <Page4TagItem>
                <Typography font={FontType.BOLD_BODY_02} color={Color.DEPTH_L}>
                  SWR
                </Typography>
              </Page4TagItem>
              <Page4TagItem>
                <Typography font={FontType.BOLD_BODY_02} color={Color.DEPTH_L}>
                  MobX
                </Typography>
              </Page4TagItem>
              <Page4TagItem>
                <Typography font={FontType.BOLD_BODY_02} color={Color.DEPTH_L}>
                  Emotion
                </Typography>
              </Page4TagItem>
              <Page4TagItem>
                <Typography font={FontType.BOLD_BODY_02} color={Color.DEPTH_L}>
                  Lottie
                </Typography>
              </Page4TagItem>
              <Page4TagItem>
                <Typography font={FontType.BOLD_BODY_02} color={Color.DEPTH_L}>
                  day.js
                </Typography>
              </Page4TagItem>
            </Page4Tags>
            <Typography font={FontType.SEMI_BOLD_BODY_01} marginBottom={40}>
              🔍 주요 업무 : 공동 PM 역할과 프론트엔드 개발을 담당함.
            </Typography>
            <Typography font={FontType.LIGHT_BODY_02}>
              - 카카오 로그인 연동 및 리다이렉션
              <br />
              - 메인 화면의 테스크 리스트 뷰, 설정 페이지, 친구 초대 페이지 UI
              및 기능 구현
              <br />- 커스텀 텍스트, 모달, 헤더 및 상태바, Toast 메시지 컴포넌트
              구현 및 적용
              <br />- 푸시알림 구현을 위한 FCM 설정, Pretendard 폰트 적용
            </Typography>
            <Page4LinkButtonStyled>
              <Page4LinkButton>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_02}
                  color={Color.DEPTH_D}
                >
                  VIEW SITE
                </Typography>
              </Page4LinkButton>
              <Page4LinkButton>
                <Typography
                  font={FontType.SEMI_BOLD_BODY_02}
                  color={Color.DEPTH_D}
                >
                  GITHUB
                </Typography>
              </Page4LinkButton>
            </Page4LinkButtonStyled>
          </Page4Box>
          <Page4ImageView />
          <PageFooter>
            <Typography font={FontType.MEDIUM_HEAD_02}>PROJECTS</Typography>
          </PageFooter>
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
                <Typography font={FontType.SEMI_BOLD_TITLE_02}>
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
            <Page5BoxItem>
              <Page5BoxItemBar>
                <Page5BoxItemCircle color={Color.POINT_O} />
                <Page5BoxItemCircle color={Color.POINT_B} />
                <Page5BoxItemCircle color={Color.DEPTH_L} />
              </Page5BoxItemBar>
              <Page5BoxInfo>
                <Typography font={FontType.SEMI_BOLD_TITLE_02}>
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
            <Page5BoxItem>
              <Page5BoxItemBar>
                <Page5BoxItemCircle color={Color.POINT_O} />
                <Page5BoxItemCircle color={Color.POINT_B} />
                <Page5BoxItemCircle color={Color.DEPTH_L} />
              </Page5BoxItemBar>
              <Page5BoxInfo>
                <Typography font={FontType.SEMI_BOLD_TITLE_02}>
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
            <Page5BoxItem>
              <Page5BoxItemBar>
                <Page5BoxItemCircle color={Color.POINT_O} />
                <Page5BoxItemCircle color={Color.POINT_B} />
                <Page5BoxItemCircle color={Color.DEPTH_L} />
              </Page5BoxItemBar>
              <Page5BoxInfo>
                <Typography font={FontType.SEMI_BOLD_TITLE_02}>
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
          <PageFooter>
            <Typography font={FontType.MEDIUM_HEAD_02}>
              EDU {'&'} ACTIVITIES
            </Typography>
          </PageFooter>
        </Page5Styled>
        <Page6Styled>
          <Dot />
          <Page6Box>
            <Typography font={FontType.EXTRA_BOLD_HEAD_02} marginBottom={120}>
              Want to talk about anything?
              <br />
              Let’s do it! 😄
            </Typography>
            <Typography font={FontType.SEMI_BOLD_TITLE_03} marginBottom={10}>
              EMAIL 📬
            </Typography>
            <Typography font={FontType.LIGHT_TITLE_02}>
              bbongwa123@gmail.com
            </Typography>
          </Page6Box>
          <PageFooter>
            <Typography font={FontType.MEDIUM_HEAD_02}>CONTACT</Typography>
          </PageFooter>
        </Page6Styled>
        <EndStyled>
          <LinkButton>F</LinkButton>
          <LinkButton>I</LinkButton>
          <LinkButton>L</LinkButton>
        </EndStyled>
      </HomeStyled>
      <Noise />
    </>
  );
};

const HomeStyled = styled.div`
  width: 700%;
  height: calc(100vh - 8.8em);
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
  padding-right: 37em;
`;

const Page1SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 10em;
  bottom: -3em;
`;

const Page1Arrow = styled.div`
  width: 75em;
  height: 0.25em;
  position: relative;
  background-color: ${Color.DEPTH_D};
  margin-left: 4em;

  ::after,
  ::before {
    content: '';
    width: 2em;
    height: 0.25em;
    position: absolute;
    background-color: ${Color.DEPTH_D};
  }
  ::after {
    transform: rotate(45deg);
    top: -0.65em;
    right: -0.25em;
  }
  ::before {
    transform: rotate(-45deg);
    top: 0.65em;
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
  border-bottom: 3px solid ${Color.DEPTH_D};
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
  padding-top: 8em;
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

const Page2SubTitleStyled = styled.div`
  position: absolute;
  top: 10vh;
  left: 96.5em;
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
      margin-top: -7.8em;
    }
    20% {
      margin-top: -7.8em;
    }
    40% {
      margin-top: -3.9em;
    }
    60% {
      margin-top: -3.9em;
    }
    90% {
      margin-top: 0em;
    }
    100% {
      margin-top: -7.8em;
    }
  }

  @keyframes flip-5 {
    0% {
      margin-top: -15.6em;
    }
    10% {
      margin-top: -15.6em;
    }
    20% {
      margin-top: -11.7em;
    }
    30% {
      margin-top: -11.7em;
    }
    40% {
      margin-top: -7.8em;
    }
    50% {
      margin-top: -7.8em;
    }
    60% {
      margin-top: -3.9em;
    }
    70% {
      margin-top: -3.9em;
    }
    85% {
      margin-top: 0em;
    }
    100% {
      margin-top: -15.6em;
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
  border-bottom: 3px solid ${Color.DEPTH_D};
`;

const Page3Item = styled.button<{ last?: boolean; active: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${({ active }) => (active ? 'flex-start' : 'center')};
  align-items: flex-start;
  border-bottom: ${({ last }) => !last && `3px solid ${Color.DEPTH_D}`};
  padding: 0 5em;
  padding-top: ${({ active }) => (active ? '1.5em' : '1em')};
  background-color: ${({ active }) => active && Color.DEPTH_D};
  transition: 0.6s;
`;

const Page3LineStyled = styled.div<{ active: boolean }>`
  width: calc(100% + 10em);
  margin-left: -5em;
  display: ${({ active }) => (!active ? 'none' : 'flex')};
`;

const Page3Line = styled.img`
  width: 100%;
`;

const Page3ItemBox = styled.div<{ active: boolean }>`
  width: 100%;
  height: ${({ active }) => (active ? '50vh' : 0)};
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
  border-bottom: 3px solid ${Color.DEPTH_D};
  padding-right: 22em;
`;

const Page4Box = styled.div`
  padding-left: 14em;
`;

const Page4Tags = styled.div`
  margin-bottom: 3em;
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

const Page4LinkButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 40px;
  border: 3px solid ${Color.DEPTH_D};
  margin-right: 0.8em;
`;

const Page4ImageView = styled.div`
  width: 60em;
  height: 40em;
  background-color: ${Color.DEPTH_D};
  margin-left: 6em;
`;

const Page5Styled = styled.section`
  width: 200em;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
  border-bottom: 3px solid ${Color.DEPTH_D};
`;

const Page5Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 14em;
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

const Page6Styled = styled.section`
  width: 130em;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  border-left: 3px solid ${Color.DEPTH_D};
  border-bottom: 3px solid ${Color.DEPTH_D};
`;

const Page6Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 14em;
  padding-right: 30em;
`;

const EndStyled = styled.section`
  width: 8em;
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

const PageFooter = styled.div`
  width: 100%;
  height: 9em;
  display: flex;
  align-items: center;
  position: absolute;
  left: -0.28em;
  bottom: -9em;
  padding-left: 2em;
  border-left: 3px solid ${Color.DEPTH_D};
`;

export default Home;
