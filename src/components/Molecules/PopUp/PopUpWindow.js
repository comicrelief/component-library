import styled, { css, keyframes } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';

// The overlay mounts when opened, so an entrance animation covers the transition
const openOverlay = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0.5rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PopUpWindow = styled.div`
  background-color: ${({ theme, $backgroundColour }) => theme.color($backgroundColour)};
  color: ${({ theme, $textColour }) => theme.color($textColour)};
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  border-radius: 1rem;
  ${({ $isOpen }) => ($isOpen
    ? css`padding: 1rem;`
    : css`padding: 0;`)}

  ${({ $isOpen }) => $isOpen && css`
    position: absolute;
    top: 0;
    left: 0;
    ${zIndex('high')}
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    animation: ${openOverlay} 250ms ease-out;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}
`;

export default PopUpWindow;
