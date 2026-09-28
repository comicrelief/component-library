import styled, { css } from 'styled-components';
import { logoRotateAnimation, pulseInAnimation, pulseOutAnimation } from '../../../theme/shared/animations';

const TitleLabel = styled.span`
  line-height: 0;
  font-size: 0;
  color: transparent;
`;

const LogoLink = styled.a`
  ${({ animateRotate }) => logoRotateAnimation(animateRotate)}
  
  ${({ animatePulse }) => animatePulse && css`
    img {
        ${pulseOutAnimation};
    }
        
    &:hover,
    &:focus {
        img {
            ${pulseInAnimation};
        }
    }
  `}
`;

export { TitleLabel, LogoLink };
