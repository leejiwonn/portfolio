import styled from '@emotion/styled';

interface Props {
  maxWidth: number;
}

const Noise = ({ maxWidth }: Props) => {
  return (
    <NoiseStyled maxWidth={maxWidth}>
      <NoiseBox></NoiseBox>
    </NoiseStyled>
  );
};

const NoiseStyled = styled.div<{ maxWidth: number }>`
  width: ${({ maxWidth }) => maxWidth + 'px'};
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const NoiseBox = styled.div`
  width: 100%;
  height: 100%;
  background: transparent
    url('https://www.dropbox.com/s/h7ab1c82ctzy83n/noise.png?raw=1') 0 0;
  background-size: contain;
  background-repeat: repeat;
  opacity: 0.2;
  animation: noise 1s steps(8, end) infinite both;

  @keyframes noise {
    0% {
      background-position: 10px 200px;
    }
    20% {
      background-position: -50px 0;
    }
    40% {
      background-position: 100px -10px;
    }
    60% {
      background-position: 0 -150px;
    }
    80% {
      background-position: -100px -30px;
    }
    100% {
      background-position: 160px -60px;
    }
  }
`;

export default Noise;
