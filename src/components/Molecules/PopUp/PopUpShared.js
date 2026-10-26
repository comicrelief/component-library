import { useState } from 'react';
import styled, { css } from 'styled-components';

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

  ${({ $hoverColour, theme }) => $hoverColour && css`
    &:hover svg {
      fill: ${theme.color($hoverColour)};
    }
  `}
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
