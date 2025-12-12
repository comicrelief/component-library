import { keyframes, css } from 'styled-components';

const pulseIn = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.04, 1.04, 1.04);
  }
  60% {
    transform: scale3d(1.03, 1.03, 1.03);
  }
  to {
    transform: scale3d(1.04, 1.04, 1.04);
  }
`;

const pulseOut = keyframes`
  from {
    transform: scale3d(1.03, 1.03, 1.03);
  }
  30% {
    transform: scale3d(0.99, 0.99, 0.99);
  }
  60% {
    transform: scale3d(1.01, 1.01, 1.01);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

const pulseInAnimation = css`
  animation: ${pulseIn} 0.4s ease-in-out forwards;
`;

const pulseOutAnimation = css`
  ${pulseInAnimation}
  animation-name: ${pulseOut};
`;

export {
  pulseInAnimation, pulseOutAnimation
};
