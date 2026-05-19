import styled, { css } from 'styled-components';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';

const ArrowIconInner = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.65, -0.19, 0.37, 1.16);
  transform: scale(1);
  transform-origin: center;
`;

const ArrowIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color('red')};

  ${({ $preventHoverColourChange }) => !$preventHoverColourChange && css`
    @media (min-width: ${breakpointValues.L}px) {
      background: ${({ theme }) => theme.color('grey_4')};
    }
  `}

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
`;

const ArrowIconOuter = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export { ArrowIconInner, ArrowIconWrapper, ArrowIconOuter };
