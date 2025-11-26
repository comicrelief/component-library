import { keyframes } from 'styled-components';

const pulseIn = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.04, 1.04, 1.04);
  }
  60% {
    transform: scale3d(1.02, 1.02, 1.02);
  }
  to {
    transform: scale3d(1.04, 1.04, 1.04);
  }
`;

const pulseOut = keyframes`
  from {
    transform: scale3d(1.04, 1.04, 1.04);
  }
  30% {
    transform: scale3d(1, 1, 1);
  }
  60% {
    transform: scale3d(1.01, 1.01, 1.01);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

export {
  pulseIn, pulseOut
};
