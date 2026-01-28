import React, {
  useContext, useEffect, useRef, useState
} from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import Arrow from '../../Atoms/Icons/Arrow';
import Cross from '../../Atoms/Icons/Cross';
import Picture from '../../Atoms/Picture/Picture';
import {
  Backdrop,
  CloseButton,
  Container,
  Dialog,
  LightboxContent,
  LightboxDetails,
  LightboxImage,
  LightboxSpinner,
  NextButton,
  PreviousButton,
  ScreenReaderOnly
} from './_Lightbox.style';

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

  /**
  * handle keyboard events within the lightbox;
  * - trapped focus between UI elements
  * - navigation between images
  * - closing the lightbox
   */
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
        case 'ArrowLeft':
          previousNode(selectedNode);
          break;
        case 'ArrowRight':
          nextNode(selectedNode);
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
  }, [hasNode, selectedNode, setSelectedNode, previousNode, nextNode]);

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

  /**
   * close the lightbox when the backdrop is clicked
   */
  function handleBackdropClick() {
    setSelectedNode(null);
  }

  // handle transitions between images nicely;
  const [imageDimensions, setImageDimensions] = useState({ width: '0px', height: '0px' });

  /**
   * when the image loads, check to see how best we can fit it on screen,
   * then set width and height on the element;
   * this lets us transition nicely to the new size
   */
  function onLoad(event) {
    const { target } = event;
    const imageWidth = target.naturalWidth;
    const imageHeight = target.naturalHeight;
    const maxWidth = Math.min.apply(null, [imageWidth, 1024, window.innerWidth * 0.85]);
    const maxHeight = Math.min.apply(null, [imageHeight, 1024, window.innerHeight * 0.6]);
    const scaleX = maxWidth / imageWidth;
    const scaleY = maxHeight / imageHeight;
    const scale = Math.min(scaleX, scaleY);
    const width = imageWidth * scale;
    const height = imageHeight * scale;

    // set the width and height on the image element, and make it visible
    setImageDimensions({ width: `${width}px`, height: `${height}px` });
    target.style.opacity = '1';
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
          <LightboxImage className="lightbox-image">
            <LightboxSpinner>
              <PulseLoader height={16} width={2} color="#E1E2E3" />
            </LightboxSpinner>
            {hasNode && (
              <Picture
                key={selectedNode?.image}
                alt={selectedNode?.title}
                image={selectedNode?.image}
                width={imageDimensions.width}
                height={imageDimensions.height}
                objectFit="contain"
                onLoad={event => onLoad(event)}
              />
            )}
          </LightboxImage>
          <LightboxDetails id="lightboxDescription" aria-live="polite" aria-atomic="true">
            <div id="lightboxTitle">{selectedNode?.title}</div>
            {selectedNode?.caption && (
              <div>
                {selectedNode?.caption}
              </div>
            )}
            {selectedNode?.body && (
              <div>
                {selectedNode.body}
              </div>
            )}
          </LightboxDetails>
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
        </LightboxContent>
      </Dialog>
    </Container>
  );
};

export default Lightbox;
