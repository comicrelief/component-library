import styled, { css, keyframes } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';
import { CLOSE_DURATION } from './PopUpShared.utils';

/**
 * The overlay mounts when opened, so an entrance animation covers the transition
 */
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

/**
 * Plays when the popup closes, before it is unmounted (see CLOSE_DURATION)
 */
const closeOverlay = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
`;

const ExampleContainer = styled.div`
  position: relative;
  padding: 1rem;
  min-height: 100px;
  margin: 0 0 1rem auto;
  border-radius: 6px;
  background: light_grey;
  min-height: 100px;

  /* Shade over the wrapper's content while the popup is open */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`;

const PopUpWindow = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  background-color: ${({ theme, $backgroundColour }) => theme.color($backgroundColour)};
  color: ${({ theme, $textColour }) => theme.color($textColour)};
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  border-radius: 1rem;

  /* Keeps the heading clear of the close button */
  h3 {
    margin-right: 16px;
  }

  ${({ $isOpen }) => $isOpen && css`
    font-size: 0.875rem;
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      font-size: 1rem;
    }

    padding: 1.5rem;
    @media ${({ theme }) => theme.allBreakpoints('L')} {
      padding: 2rem;
    }

    position: absolute;
    top: 0;
    left: 0;
    ${zIndex('high')}
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    animation: ${openOverlay} 250ms ease-out;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
    margin-top: 1rem;
  `}

  ${({ $isClosing }) => $isClosing && css`
    animation: ${closeOverlay} ${CLOSE_DURATION}ms ease-in forwards;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}
`;

/**
 * Covers the whole visible window while a popup is open. Fixed positioning
 * is relative to the viewport, so it is not limited to the parent container
 * (it only is if an ancestor uses transform, filter or similar)
 */
const PageOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  ${zIndex('medium')}
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

/**
 * Hidden rather than unmounted when open, so the closed trigger keeps its
 * space and content below the popup doesn't do the janky move around when it overlays/opens
 */
const Trigger = styled.div`
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`;

const CloseButton = styled.button`
  align-self: flex-end;
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    right: 1rem;
    top: 1rem;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const PopUpHeading = styled.h3`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    font-size: 1rem;
  }
`;

const PopUpBodyText = styled.p`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    font-size: 1rem;
  }
`;

export {
  Container,
  Trigger,
  CloseButton,
  PopUpWindow,
  PopUpHeading,
  PopUpBodyText,
  PageOverlay,
  ExampleContainer
};
