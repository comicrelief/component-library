import styled, { css } from 'styled-components';
import playWhite from './assets/Play--white.svg';
import pauseWhite from './assets/Pause--white.svg';
import playBlack from './assets/Play--black.svg';
import pauseBlack from './assets/Pause--black.svg';

const PlayButton = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.color('black')};
  opacity: 0.75;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 1.0;
  }

  &:focus-visible {
    outline-style: outset;
    outline-width: medium;
  }

  // Non-light coloured video:
  ${({ lightColouredVideo }) => !lightColouredVideo && css`
    background: ${({ theme }) => theme.color('white')};
  `}

  ${({ copyLeft }) => !copyLeft && css`
    right: auto;
    left: 10px;
  `}

  @media ${({ theme }) => theme.breakpoint('medium')} {
    top: 20px;
    right: 20px;

      ${({ copyLeft }) => !copyLeft && css`
      right: auto;
      left: 20px;
    `}
  }
`;

const PlayButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProgressRingWrapper = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
`;

const ProgressRingSVG = styled.svg`
 //
`;

const ProgressRingCircle = styled.circle`
    z-index: 100;
    transition: stroke-dashoffset 0.5s;

    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke-dashoffset: ${({ strokeDashOffsetStyle }) => strokeDashOffsetStyle};
    stroke: white; // need to changed based on Promo settings
    fill: transparent;

    // Non-light coloured video, white button, black stroke
    ${({ lightColouredVideo }) => !lightColouredVideo && css`
      stroke: ${({ theme }) => theme.color('black')};
    `}

    // Cancel the animation
    ${({ isRestarting }) => (isRestarting) && css`
     transition: none;
    `}
`;

const Icon = styled.span`
  height: 50px;
  width: 50px;
  background: no-repeat center/50% url(${playWhite}) transparent;

  // Light-coloured video, black button, white icons
  ${({ lightColouredVideo, isPlaying }) => (lightColouredVideo && !isPlaying) && css`
    background-image: url(${playWhite});
  `}

  ${({ lightColouredVideo, isPlaying }) => (lightColouredVideo && isPlaying) && css`
    background-image: url(${pauseWhite});
  `}

  // Non-light coloured video, white button, black icons
  ${({ lightColouredVideo, isPlaying }) => (!lightColouredVideo && !isPlaying) && css`
    background-image: url(${playBlack});
  `}

  ${({ lightColouredVideo, isPlaying }) => (!lightColouredVideo && isPlaying) && css`
    background-image: url(${pauseBlack});
  `}
`;

export {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle, PlayButton, PlayButtonWrapper, Icon
};
