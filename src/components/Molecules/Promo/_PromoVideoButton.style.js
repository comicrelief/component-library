import styled, { css } from 'styled-components';
import playWhite from './assets/Play--white.svg';
import pauseWhite from './assets/Pause--white.svg';
import playBlack from './assets/Play--black.svg';
import pauseBlack from './assets/Pause--black.svg';

const PlayButton = styled.button`
  // visibility: hidden; // debug
  // opacity: 0; // debug
  transition: opacity 0.2s, visibility 0.2s;

  width: 50px;
  height: 50px;
  background: none;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  background: black;

  // DARK VIDEO:
  ${({ lightVideo }) => !lightVideo && css`
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

  &:hover {
    button {
      // visibility: visible; // debug
      // opacity: 1; // debug
    }
  }
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

    // DARK VIDEO, WHITE BUTTON SO STROKE IS BLACK:
    ${({ lightVideo }) => !lightVideo && css`
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

  // LIGHT VIDEO, BLACK BUTTON SO ICONS ARE WHITE
  ${({ lightVideo, isPlaying }) => (lightVideo && !isPlaying) && css`
    background-image: url(${playWhite});
  `}

  // LIGHT VIDEO, BLACK BUTTON SO ICONS ARE WHITE
  ${({ lightVideo, isPlaying }) => (lightVideo && isPlaying) && css`
    background-image: url(${pauseWhite});
  `}

  // DARK VIDEO, WHITE BUTTON SO ICONS ARE BLACK
  ${({ lightVideo, isPlaying }) => (!lightVideo && !isPlaying) && css`
    background-image: url(${playBlack});
  `}

  // DARK VIDEO, WHITE BUTTON SO ICONS ARE BLACK
  ${({ lightVideo, isPlaying }) => (!lightVideo && isPlaying) && css`
    background-image: url(${pauseBlack});
  `}
`;

export {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle, PlayButton, PlayButtonWrapper, Icon
};
