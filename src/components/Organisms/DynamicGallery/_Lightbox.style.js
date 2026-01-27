import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 0;
`;

export const Dialog = styled.dialog`
  display: block;
  padding: 0.5rem;
  background: transparent;
  border: none;
  z-index: 1;
`;

export const LightboxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 1rem;
  background: #ffffff;
  border-radius: 0.5rem;
  // max-width: 1024px;
  // max-height: 1024px;
`;

export const LightboxImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  border-radius: 0.4rem;
  overflow: hidden;
  
  & img {
    max-height: 60vh;
    opacity: 0;
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.1s ease-in-out;
  }
`;

export const LightboxSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LightboxDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color('black')};
`;

export const Caption = styled.p`
  font-size: ${({ theme }) => theme.fontSize('xs')};
  font-family: ${({ theme }) => theme.font.regular};
  line-height: 1;
`;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color('black')};
`;

export const NavButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: white;
  cursor: pointer;
  z-index: 10;

  svg {
    transition: all 0.1s ease-out;
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.color('red')};
    }
  }

  &:focus-visible {
    outline: 2px solid #000000;
  }
`;

export const CloseButton = styled(NavButton)`
  top: 0;
  right: 0;
`;

export const PreviousButton = styled(NavButton)`
  top: 30%;
  left: 0;
  transform: translate(0, -50%);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: fixed;
    top: 50%;
  }
`;

export const NextButton = styled(NavButton)`
  top: 30%;
  right: 0;
  transform: translate(0, -50%);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: fixed;
   top: 50%;
  }
`;

export const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
