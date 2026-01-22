import React, { useContext, useEffect, useRef } from 'react';
import Picture from '../../Atoms/Picture/Picture';
import {
  Backdrop,
  Card,
  CardAgeGroup,
  CardImage,
  CardTitle,
  Container,
  Dialog,
  CardNavButton
} from './Lightbox.style';

/**
 * lightbox context:
 * - selectedCard: the card that is currently selected
 * - setSelectedCard:  set the selected card
 * - nextCard/previousCard: navigate to the next/previous card
 */
export const LightboxContext = React.createContext(null);

/**
 * the Lightbox component is a modal that displays a single image,
 * along with UI to navigate through the gallery
 * .
 * accessibility features like tabbing and focus management are currently implemented here;
 * a better long-term approach would be to use an established modal/dialog library,
 * but to avoid friction with the build process we've gone custom for now
 * .
 * TODO: hide the main window scroll bar in a nicer way, see:
 * https://www.npmjs.com/package/react-remove-scroll
 */
const Lightbox = () => {
  const {
    selectedCard,
    setSelectedCard,
    nextCard,
    previousCard
  } = useContext(LightboxContext);

  const hasCard = !!selectedCard;
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  // get all focusable elements within the dialog
  function getFocusableElements() {
    if (!dialogRef.current) return [];

    const focusableSelectors = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');
    return Array.from(dialogRef.current.querySelectorAll(focusableSelectors));
  }

  useEffect(() => {
    // trap focus within the dialog
    function handleTabKey(event) {
      if (!hasCard) return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const currentElement = document.activeElement;

      // if shift+tab is pressed and we're on the first element, move to the last
      if (event.shiftKey && currentElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && currentElement === lastElement) {
        // if tab is pressed and we're on the last element, move to the first
        event.preventDefault();
        firstElement.focus();
      }
    }

    function handleKeyDown(event) {
      // TODO: add other key handling here
      switch (event.key) {
        case 'Escape':
          setSelectedCard(null);
          break;
        case 'Tab':
          handleTabKey(event);
          break;
        default:
          break;
      }
    }

    if (hasCard) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasCard, setSelectedCard]);

  // handle focus management when dialog opens/closes
  useEffect(() => {
    if (hasCard) {
      // store the previously focused element
      previousFocusRef.current = document.activeElement;
      // prevent body scroll
      document.body.style.overflow = 'hidden';
      // move focus to the first focusable element in the dialog
      setTimeout(() => {
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }, 0);
    } else {
      // restore body scroll
      document.body.style.overflow = 'auto';
      // return focus to the previously focused element
      if (
        previousFocusRef.current
        && typeof previousFocusRef.current.focus === 'function'
      ) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }
  }, [hasCard]);

  function handleBackdropClick() {
    setSelectedCard(null);
  }

  return (
    <Container isOpen={hasCard}>
      <Backdrop onClick={() => handleBackdropClick()} />
      <Dialog
        ref={dialogRef}
        aria-labelledby="lightboxTitle"
        aria-describedby="lightboxDescription"
      >
        <Card>
          <CardImage>
            {hasCard && (
              <Picture
                key={selectedCard?.image}
                alt={selectedCard?.title}
                image={selectedCard?.image}
                width="100%"
                height="100%"
                objectFit="contain"
              />
            )}
          </CardImage>
          <CardTitle id="lightboxTitle">{selectedCard?.title}</CardTitle>
          <CardAgeGroup id="lightboxDescription">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Age group: {selectedCard?.ageGroup}
          </CardAgeGroup>
          <CardNavButton type="button" onClick={() => setSelectedCard(null)}>
            Close
          </CardNavButton>
          <CardNavButton
            type="button"
            onClick={() => previousCard(selectedCard)}
          >
            Previous
          </CardNavButton>
          <CardNavButton type="button" onClick={() => nextCard(selectedCard)}>
            Next
          </CardNavButton>
        </Card>
      </Dialog>
    </Container>
  );
};

export default Lightbox;
