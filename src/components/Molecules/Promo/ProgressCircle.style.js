import styled from 'styled-components';

const ProgressRingWrapper = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const ProgressRingSVG = styled.svg`
`;

const ProgressRingCircle = styled.circle`
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke-dashoffset: ${({ strokeDashOffsetStyle }) => strokeDashOffsetStyle};
    stroke: black;
    fill: transparent;
`;

export {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle
};
