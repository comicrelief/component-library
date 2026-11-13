import {
  useCallback, useEffect, useRef, useState
} from 'react';

/* Keep in step with the closeOverlay animation in PopUpShared.style.js */
export const CLOSE_DURATION = 200;

/**
 * Tracks open state and reports changes to the parent via onOpenChange
 */
export const usePopUpOpen = (onOpenChange) => {
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

    const handlePointerDown = (event) => {
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
