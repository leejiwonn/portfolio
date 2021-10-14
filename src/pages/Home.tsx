import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Typography from '~/components/Typography';
import { Color } from '~/utils/color';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef<HTMLDivElement>(null);

  // horizontal scroll
  useEffect(() => {
    const sections = gsap.utils.toArray('.section');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: '+=3500',
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
      <HomeStyled ref={scrollRef} className="container">
        <Page1Styled className="section">
          <MainTitle className="main-title">
            <Typography font="BOLD_TITLE_01">Hi There! 👋</Typography>
            <Typography font="EXTRA_BOLD_HEAD_01">
              I’m Jiwon Lee,
              <br />
              Front-End Developer.
            </Typography>
          </MainTitle>
        </Page1Styled>
        <Page2Styled className="section">
          <Typography>
            만나서 반가워요!
            <br />
            활발하고 긍정적인 개발자 이지원입니다 😆
          </Typography>
        </Page2Styled>
      </HomeStyled>
      <Footer />
    </>
  );
};

const HomeStyled = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-wrap: no-wrap;
  background-color: ${Color.DEPTH_L};
`;

const Page1Styled = styled.section`
  width: 1800px;
  height: 100vh;
  display: inline-flex;
  align-items: center;
  padding-left: 100px;
`;

const MainTitle = styled.div``;

const Page2Styled = styled.section`
  width: 1000px;
  height: 100vh;
  display: inline-flex;
  align-items: center;
  border-left: 3px solid ${Color.DEPTH_D};
  padding-left: 30px;
`;

export default Home;
