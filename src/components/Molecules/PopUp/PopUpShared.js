import {
  useCallback, useEffect, useRef, useState
} from 'react';
import styled, { css, keyframes } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';

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

// Keep in step with the closeOverlay animation below
const CLOSE_DURATION = 200;

export const PopUpWindow = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  background-color: ${({ theme, $backgroundColour }) => theme.color($backgroundColour)};
  color: ${({ theme, $textColour }) => theme.color($textColour)};
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  border-radius: 1rem;

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
  `}

  ${({ $isClosing }) => $isClosing && css`
    animation: ${closeOverlay} ${CLOSE_DURATION}ms ease-in forwards;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

/**
 * Hidden rather than unmounted when open, so the closed trigger keeps its
 * space and content below the popup doesn't do the janky move around when it overlays/opens
 */
export const Trigger = styled.div`
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    right: 0.7rem;
    top: 0.7rem;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    svg {
      width: 24px;
      height: 24px;
    }
  }

`;

/**
 * Tracks open state and reports changes to the parent via onOpenChange
 */
export const usePopUpOpen = onOpenChange => {
  // 'closed' -> 'open' -> 'closing' -> 'closed'; 'closing' keeps the popup
  // mounted long enough to play its exit animation
  const [phase, setPhase] = useState('closed');
  const containerRef = useRef(null);

  const isOpen = phase === 'open';

  const openPopUp = () => {
    setPhase('open');
    if (onOpenChange) {
      onOpenChange(true);
    }
  };

  const closePopUp = useCallback(() => {
    setPhase('closing');
    if (onOpenChange) {
      onOpenChange(false);
    }
  }, [onOpenChange]);

  // Unmount once the exit animation has finished
  useEffect(() => {
    if (phase !== 'closing') {
      return undefined;
    }

    const timer = setTimeout(() => setPhase('closed'), CLOSE_DURATION);
    return () => clearTimeout(timer);
  }, [phase]);

  // Close when a press lands outside the popup while it is open
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closePopUp();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen, closePopUp]);

  return {
    isOpen,
    isClosing: phase === 'closing',
    isRendered: phase !== 'closed',
    containerRef,
    openPopUp,
    closePopUp
  };
};
