import { useState } from 'react';
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

export const PopUpWindow = styled.div`
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
  const [isOpen, setIsOpen] = useState(false);

  const updateOpen = nextOpen => {
    setIsOpen(nextOpen);
    if (onOpenChange) {
      onOpenChange(nextOpen);
    }
  };

  return {
    isOpen,
    openPopUp: () => updateOpen(true),
    closePopUp: () => updateOpen(false)
  };
};
