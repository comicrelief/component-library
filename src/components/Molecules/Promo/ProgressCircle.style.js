import styled, { css } from 'styled-components';

const PlayButton = styled.button`
  // visibility: hidden; // debug
  // opacity: 0; // debug
  transition: opacity 0.2s, visibility 0.2s;
  width: 50px;
  height: 50px;
  background-color: red;
  display: flex;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  margin: 0;

  // Re-align button accordingly
  ${({ copyLeft }) => !copyLeft && css`
    right: auto;
    left: 15px;
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
    transition: stroke-dashoffset 0.5s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke-dashoffset: ${({ strokeDashOffsetStyle }) => strokeDashOffsetStyle};
    stroke: black;
    fill: transparent;
`;

export {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle, PlayButton, PlayButtonWrapper
};
