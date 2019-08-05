import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacings';

const Section = styled.section`
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  padding: ${spacing('xl')};
  background: ${({ theme, bgColor }) => theme.color(bgColor)};
  color: ${({ theme }) => theme.color('deep_violet')};

  ${({ position }) =>
    (position === 'top' &&
      css`
        align-items: flex-start;
      `) ||
    (position === 'center' &&
      css`
        align-items: center;
      `) ||
    (position === 'bottom' &&
      css`
        align-items: flex-end;
      `)}
  p {
    font-size: ${({ theme }) => theme.fontSize('m')};
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
`;

export { Section, CopyWrapper };
