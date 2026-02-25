import styled, { keyframes } from 'styled-components';

export const OuterWrapper = styled.div`
  padding: 2rem;
  background: #eeeeee;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background: #ffffff;
  padding: 2rem;
  flex: 1;
  border-radius: 1rem;
`;

export const ValueContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const clipIn = keyframes`
  0% {
    clip-path: inset(0px 100% 0px 0px);
  }
  100% {
    clip-path: inset(0px 0% 0px 0px);
  }
`;

export const ValueUnderline = styled.img`
  position: absolute;
  width: 100%;
  height: 4px;
  left: 0;
  bottom: 0px;
  animation-name: ${clipIn};
  animation-duration: 0.7s;
  animation-timing-function: cubic-bezier(0.219, -0.011, 0.164, 0.987);
  animation-delay: ${({ delay }) => delay}ms;
  animation-fill-mode: both;
`;

export const StatValue = styled.div`
  display: flex;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilies('Anton')};
  font-size: ${({ theme }) => theme.fontSize('l')};
  line-height: 1;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    font-size: ${({ theme }) => theme.fontSize('xl')};
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
`;

export const AnimatedDigit = styled.div`
    position: absolute;
    top: 0;
    left: 0;

  transition-delay: var(--delay);
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: linear(0, 0.329 8.8%, 0.59 18%, 0.787 27.7%, 0.863 32.8%, 0.926 38.2%, 0.968 43.1%, 1 48.3%, 1.022 53.7%, 1.034 59.6%, 1.035 69.8%, 1.006 90.7%, 1);
`;
