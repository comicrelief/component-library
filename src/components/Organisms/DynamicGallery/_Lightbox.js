import React, { useContext, useEffect, useRef } from 'react';
import Picture from '../../Atoms/Picture/Picture';
import {
  Backdrop,
  LightboxContent,
  LightboxImage,
  Container,
  Dialog,
  ScreenReaderOnly,
  CloseButton,
  PreviousButton,
  NextButton,
  Title,
  Caption
} from './_Lightbox.style';
import Arrow from '../../Atoms/Icons/Arrow';
import Cross from '../../Atoms/Icons/Cross';

/**
 * lightbox context:
 * - selectedNode: the node that is currently selected
 * - setSelectedNode:  set the selected node
 * - nextNode/previousNode: navigate to the next/previous node
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
    selectedNode,
    setSelectedNode,
    nextNode,
    previousNode
  } = useContext(LightboxContext);

  const hasNode = !!selectedNode;
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
      if (!hasNode) return;

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
          setSelectedNode(null);
          break;
        case 'Tab':
          handleTabKey(event);
          break;
        default:
          break;
      }
    }

    if (hasNode) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasNode, setSelectedNode]);

  // handle focus management when dialog opens/closes
  useEffect(() => {
    if (hasNode) {
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
  }, [hasNode]);

  function handleBackdropClick() {
    setSelectedNode(null);
  }

  return (
    <Container isOpen={hasNode}>
      <Backdrop onPointerUp={() => handleBackdropClick()} />
      <Dialog
        ref={dialogRef}
        aria-labelledby="lightboxTitle"
        aria-describedby="lightboxDescription"
      >
        <LightboxContent>
          <LightboxImage>
            {hasNode && (
              <Picture
                key={selectedNode?.image}
                alt={selectedNode?.title}
                image={selectedNode?.image}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            )}
            <CloseButton type="button" onClick={() => setSelectedNode(null)}>
              <ScreenReaderOnly>Close</ScreenReaderOnly>
              <Cross colour="black" size={16} />
            </CloseButton>
            <PreviousButton type="button" onClick={() => previousNode(selectedNode)}>
              <ScreenReaderOnly>Previous</ScreenReaderOnly>
              <Arrow direction="left" colour="black" size={16} />
            </PreviousButton>
            <NextButton type="button" onClick={() => nextNode(selectedNode)}>
              <ScreenReaderOnly>Next</ScreenReaderOnly>
              <Arrow direction="right" colour="black" size={16} />
            </NextButton>
          </LightboxImage>
          <Title id="lightboxTitle">{selectedNode?.title}</Title>
          <Caption id="lightboxDescription">
            {selectedNode?.ageGroup}
          </Caption>
        </LightboxContent>
      </Dialog>
    </Container>
  );
};

export default Lightbox;
