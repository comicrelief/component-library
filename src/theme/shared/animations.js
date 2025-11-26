import { keyframes } from 'styled-components';

const pulseIn = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  75% {
    transform: scale3d(1.03, 1.03, 1.03);
  }
  to {
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

const pulseOut = keyframes`
  from {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  50% {
    transform: scale3d(1, 1, 1);
  }
  75% {
    transform: scale3d(1.02, 1.02, 1.02);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

export {
  pulseIn, pulseOut
};
