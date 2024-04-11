import { keyframes } from 'styled-components';

const LogoRotateHoverOn = keyframes`
    0% { transform: rotate(0deg); }
    20% { transform: rotate(-18deg); }
    60% { transform: rotate(-12deg); }
    80% { transform: rotate(-15deg); }
    100% { transform: rotate(-14deg); }
`;

const LogoRotateHoverOff = keyframes`
    0% { transform: rotate(-14deg); }
    20% { transform: rotate(3deg); }
    60% { transform: rotate(-3deg); }
    80% { transform: rotate(1deg); }
    100% { transform: rotate(0deg); }
`;

const ChevronRotateHoverOn = keyframes`
    0% { transform: rotate(0deg); }
    20% { transform: rotate(-200deg); }
    60% { transform: rotate(-160deg); }
    80% { transform: rotate(-190deg); }
    100% { transform: rotate(-180deg); }
`;

const ChevronRotateHoverOff = keyframes`
    0% { transform: rotate(-180deg); }
    20% { transform: rotate(10deg); }
    60% { transform: rotate(-10deg); }
    80% { transform: rotate(-5deg); }
    100% { transform: rotate(0); }
`;

export {
  LogoRotateHoverOn, LogoRotateHoverOff, ChevronRotateHoverOn, ChevronRotateHoverOff
};
