import styled, { keyframes } from 'styled-components';
import Text from '../../Atoms/Text/Text';

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ paddingTop, paddingBottom }) => `${paddingTop} 1rem ${paddingBottom}`};
  background: ${({ theme, backgroundColour }) => theme.color(backgroundColour)};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1152px;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
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
  padding: 1rem;
  flex: 1 1 0px;
  min-width: 30%;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 1rem;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    padding: 2rem;
  }
`;

export const ValueContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
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

  // ease = none and reduced motion both disable the transition

  @media (prefers-reduced-motion: reduce) {
    animation-delay: 0;
    animation-name: none;
  }
  &[data-ease="none"] {
    animation-delay: 0;
    animation-name: none;
  }
`;

export const StatValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilies('Anton')};
  font-size: ${({ theme }) => theme.fontSize('xl')};
  line-height: 1;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
`;

export const Word = styled.span`
  display: flex;
`;

export const AnimatedCharacter = styled.div`
  position: relative;
  overflow: hidden;
  // small amount of extra padding to avoid descending characters like "," from being cut off;
  // we shouldn't need to worry about longer descenders like "g" as we're using caps
  padding-bottom: 0.06rem;
`;

export const SpacingCharacter = styled.div`
  visibility: hidden;
  white-space: pre-wrap;
`;

export const AnimatedDigit = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transition-delay: ${({ delay }) => delay}ms;
  transition-property: transform;
  transition-duration: ${({ duration }) => duration};

  // ease = none and reduced motion both disable the transition
  @media (prefers-reduced-motion: reduce) {
    transition-property: none;
    transition-delay: 0;
  }
  &[data-ease="none"] {
    transition-property: none;
    transition-delay: 0;
  }

  // easing functions from https://easingwizard.com/
  &[data-ease="cubic"] {
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }
  &[data-ease="overshoot"] {
    transition-timing-function: linear(
      0,
      0.329 8.8%,
      0.59 18%,
      0.787 27.7%,
      0.863 32.8%,
      0.926 38.2%,
      0.968 43.1%,
      1 48.3%,
      1.022 53.7%,
      1.034 59.6%,
      1.035 69.8%,
      1.006 90.7%,
      1
    );
  }
  &[data-ease="bounce"] {
    transition-timing-function: linear(0, 0.384 15.4%, 0.833 35.8%, 1 44.7%, 0.919 51.5%, 0.9 54.7%, 0.894 58%, 0.911 63.8%, 1 77.4%, 0.985 84.4%, 1);
  }
`;

export const AccessibleValue = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilies('Anton')};
  font-size: ${({ theme }) => theme.fontSize('xl')};
  line-height: 1;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
`;

export const Body = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize('s')};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    font-size: ${({ theme }) => theme.fontSize('m')};
  }
`;
