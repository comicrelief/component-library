import styled, { css } from 'styled-components';
import playIcon from './assets/Play.svg';
import pauseIcon from './assets/Pause.svg';

const PlayButton = styled.button`
  // visibility: hidden; // debug
  // opacity: 0; // debug
  transition: opacity 0.2s, visibility 0.2s;
  width: 50px;
  height: 50px;
  background: none;
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  margin: 0;

  // Re-align button accordingly
  ${({ copyLeft }) => !copyLeft && css`
    right: auto;
    left: 10px;
  `}
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
`;

const ProgressRingSVG = styled.svg`
//
`;

const ProgressRingCircle = styled.circle`
    z-index: 100;
    transition: stroke-dashoffset 0.3s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke-dashoffset: ${({ strokeDashOffsetStyle }) => strokeDashOffsetStyle};
    stroke: white; // need to changed based on Promo settings
    fill: transparent;

    ${({ isPlaying }) => !isPlaying && css`
      // transition: stroke-dashoffset 0.1s;
  `}
`;

const Icon = styled.span`
  height: 40px;
  width: 40px;
  background-color: white; // need to changed based on Promo settings
  -webkit-mask-image: url(${playIcon});
  mask-image: url(${playIcon});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 25px;

  ${({ isPlaying }) => isPlaying && css`
    -webkit-mask-image: url(${pauseIcon});
    mask-image: url(${pauseIcon});
    mask-repeat: no-repeat;
  `}
`;

export {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle, PlayButton, PlayButtonWrapper, Icon
};
