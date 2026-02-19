import styled from 'styled-components';

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
  gap: 0.5rem;
  background: #ffffff;
  padding: 1rem;
  flex: 1 1 auto;
  border-radius: 1rem;
`;

export const StatValue = styled.div`
  display: flex;
  text-transform: uppercase;
//   font-family: Courier New, Courier, monospace;
  font-family: ${({ theme }) => theme.fontFamilies('Anton')};
  font-size: ${({ theme }) => theme.fontSize('l')};
  line-height: 1;
`;

export const AnimatedDigit = styled.div`
    position: absolute;
    top: 0;
    left: 0;

  transition-delay: var(--delay);
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: linear(0, 0.192 4.1%, 0.361 8.2%, 0.513 12.5%, 0.645 16.9%, 0.703 19.1%, 0.758 21.4%, 0.808 23.7%, 0.854 26.1%, 0.895 28.5%, 0.932 31%, 0.964 33.5%, 0.993 36.1%, 1.013 38.3%, 1.031 40.6%, 1.046 42.9%, 1.058 45.3%, 1.067 47.8%, 1.074 50.3%, 1.078 53%, 1.08 55.8%, 1.077 60.4%, 1.069 65.5%, 1.057 70.4%, 1.024 82.4%, 1.01 88.7%, 1.002 94.4%, 1);
`;
