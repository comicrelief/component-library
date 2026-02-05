import { floor, orderBy, throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpointValues2026 as breakpointValues } from '../../../theme/shared/breakpoints2026';
import Button from '../../Atoms/Button/Button';
import Lightbox, { LightboxContext } from './_Lightbox';
import {
  Container,
  EmptyMessage,
  ImageGrid,
  FocusTrap
} from './DynamicGallery.style';
import DynamicGalleryColumn from './_DynamicGalleryColumn';
import { GalleryNodeType } from './_types';

/**
 * the Dynamic Gallery component displays a grid of images,
 * by default using dynamic heights per image to create an more organic look
 */
const DynamicGallery = ({
  pageBackgroundColour = 'transparent',
  textColour = 'black',
  gridWidth = 3,
  maxWidth = '1500px',
  loadingBehaviour = '25',
  imageRatio = 'dynamic',
  useLightbox = true,
  nodes = [],
  paddingTop = '0rem',
  paddingBottom = '2rem'
}) => {
  const hasNodes = nodes?.length > 0;
  const containerRef = useRef(null);

  // handle loading behaviour;
  // if we're in chunk mode, display images a chunk at a time
  // (or the total number of images if less than the chunk size)
  // or display all images at once
  const isChunked = loadingBehaviour !== 'all';
  const imageChunkSize = +loadingBehaviour;
  const [imageCount, setImageCount] = useState(isChunked
    ? Math.min(imageChunkSize, nodes.length) : nodes.length);

  function handleLoadMore() {
    setImageCount(imageCount + imageChunkSize);
  }

  // assign a manual tabbing order to gallery images based on their position in the DOM,
  // starting from top-left and working downwards in a natural order
  function updateTabOrder() {
    if (!containerRef.current) return;
    const galleryNodes = containerRef.current.querySelectorAll('.gallery-node');
    const sortedNodes = orderBy(galleryNodes, node => {
      const { top, left } = node.getBoundingClientRect();
      return floor(top, -2) + Math.floor(left) / 1000;
    }, 'asc');

    sortedNodes.forEach((galleryNode, index) => {
      galleryNode.setAttribute('data-tab-order', String(index));
    });
  }
  // create a throttled version of the updateTabOrder function
  const throttledUpdateTabOrder = useRef(throttle(updateTabOrder, 2000));

  /**
   * handle column counts;
   * column count is based on a combination of the maxColumns prop and the window width
   * - for small screens columns = 1
   * - for medium screens columns = 2
   * - for large and xl screens we use the maxColumns prop which defaults to 3
   * .
   * we need to use JS here rather than CSS because our columns are created dynamically;
   * this is to allow us to assign nodes in the natural "horizontal" order rather than "vertically"
   */
  const [columnCount, setColumnCount] = useState(gridWidth);
  const isSmall = useMediaQuery({ maxWidth: breakpointValues.S });
  const isMedium = useMediaQuery({ maxWidth: breakpointValues.M });

  useEffect(() => {
    let newColumnCount;
    switch (true) {
      case isSmall:
        newColumnCount = 1;
        break;
      case isMedium:
        newColumnCount = 2;
        break;
      default:
        newColumnCount = gridWidth;
        break;
    }
    setColumnCount(newColumnCount);
    throttledUpdateTabOrder.current();
  }, [isSmall, isMedium, gridWidth, setColumnCount]);

  // handle selected gallery node
  const [selectedNode, setSelectedNode] = useState(null);
  const [focusedNode, setFocusedNode] = useState(null);

  // handle next/previous node events from the lightbox;
  // slightly complicated because we need to use the data-tab-order attribute
  // to navigate between nodes rather than the node index;
  // this reflects the tab ordering in the DOM, rather than the order of the nodes in the array,
  // because the dynamic image heights can confuse the normal order
  function handleNextNode(node) {
    const nodeIndex = nodes.indexOf(node);
    const nodeEl = containerRef.current.querySelector(`[data-node-index="${nodeIndex}"]`);
    const tabOrder = nodeEl.getAttribute('data-tab-order');
    const nextTabOrder = (+tabOrder + 1) % imageCount;
    const nextNodeEl = containerRef.current.querySelector(`[data-tab-order="${nextTabOrder}"]`);
    const nextNodeIndex = nextNodeEl.getAttribute('data-node-index');
    const nextNode = nodes[nextNodeIndex];
    setSelectedNode(nextNode);
  }
  function handlePreviousNode(node) {
    const nodeIndex = nodes.indexOf(node);
    const nodeEl = containerRef.current.querySelector(`[data-node-index="${nodeIndex}"]`);
    const tabOrder = nodeEl.getAttribute('data-tab-order');
    const previousTabOrder = (+tabOrder - 1 + imageCount) % imageCount;
    const previousNodeEl = containerRef.current.querySelector(`[data-tab-order="${previousTabOrder}"]`);
    const previousNodeIndex = previousNodeEl.getAttribute('data-node-index');
    const previousNode = nodes[previousNodeIndex];
    setSelectedNode(previousNode);
  }

  // handle keydown events,
  // including image opening and tabbing
  function handleKeyDown(event) {
    switch (event.key) {
      // if the lightbox is enabled, open the image in the lightbox when the user presses enter
      case 'Enter': {
        if (useLightbox) {
          event.preventDefault();
          const nodeIndex = +event.target.dataset.nodeIndex;
          if (Number.isNaN(nodeIndex)) return;
          setSelectedNode(nodes[nodeIndex]);
          // also store the focused node for focus restoration when the lightbox closes
          setFocusedNode(event.target.closest('.gallery-node'));
        }
        break;
      }
      // handle tabbing between images;
      // there doesn't seem to be a great way to handle this!
      // it's tied into the way the grid is structured, and the way the nodes are rendered;
      // ideal scenario would be a tabbable grid with nice ordering and no gaps,
      // but this isn't currently possible without either getting a bit hacky with CSS or JS
      // our options are:
      // - use a standard CSS grid > ordered and tabble but gappy
      // - use absolute positioning > no gaps but complex and weird DOM order (pinterest approach)
      // - flex-column+order > no gaps but complex (https://mui.com/material-ui/react-masonry/)
      // - columns + custom tabbing > what we're doing here
      case 'Tab': {
        const nodeIndex = +event.target.dataset.tabOrder;
        if (Number.isNaN(nodeIndex)) return;
        const galleryContainer = event.target.closest('.gallery-container');
        if (!galleryContainer) return;

        let newNodeIndex;

        if (event.shiftKey) {
          // shift-tab: move to the previous image
          newNodeIndex = nodeIndex - 1;
          if (newNodeIndex < 0) return;
          event.preventDefault();
          galleryContainer.querySelector(`[data-tab-order="${newNodeIndex}"]`).focus();
        } else {
          // tab: move to the next image
          newNodeIndex = nodeIndex + 1;
          if (newNodeIndex >= imageCount) {
            // if we're on the last image, move to the focus trap
            // before allowing the tab event to continue to the next natural element;
            // this is a bit hacky but is needed for when the "last" image isn't in the last column;
            // eg 10 images divided across 3 columns = [4, 3, 3]
            // when this happens the browser tries to tab into the next column,
            // rather than out of the grid and onwards
            galleryContainer.querySelector('.gallery-focus-trap').focus();
            return;
          }
          event.preventDefault();
          galleryContainer.querySelector(`[data-tab-order="${newNodeIndex}"]`).focus();
        }
        break;
      }
      default:
        break;
    }
  }

  return (
    <Container
      className="gallery-container"
      ref={containerRef}
      maxWidth={maxWidth}
      pageBackgroundColour={pageBackgroundColour}
      textColour={textColour}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <LightboxContext.Provider
        value={{
          useLightbox,
          selectedNode,
          setSelectedNode,
          nextNode: handleNextNode,
          previousNode: handlePreviousNode,
          focusedNode,
          setFocusedNode
        }}
      >
        <ImageGrid className="gallery-grid" onKeyDown={event => handleKeyDown(event)}>
          {hasNodes
          && Array(columnCount)
            .fill(null)
            .map((column, columnIndex) => {
              // eslint prefers template literals for strings, but they break the compiler
              // eslint-disable-next-line prefer-template
              const key = String(columnIndex) + ':' + nodes.length;
              return (
                <DynamicGalleryColumn
                  // disabling the lint rule here
                  // as we're chunking an array and have no unique keys
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  columnIndex={columnIndex}
                  columnCount={columnCount}
                  nodes={nodes.slice(0, imageCount)}
                  imageRatio={imageRatio}
                  updateTabOrder={throttledUpdateTabOrder.current}
                  focusOutlineColour={textColour}
                />
              );
            })}

          <EmptyMessage isEmpty={!hasNodes}>No images to display</EmptyMessage>
        </ImageGrid>
        <Lightbox />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <FocusTrap className="gallery-focus-trap" tabIndex={0}>
          <span>End of gallery</span>
        </FocusTrap>
      </LightboxContext.Provider>
      {imageCount < nodes.length && <Button onClick={() => handleLoadMore()}>Show more</Button>}
    </Container>
  );
};

DynamicGallery.propTypes = {
  // title: PropTypes.string,
  pageBackgroundColour: PropTypes.string,
  textColour: PropTypes.string,
  gridWidth: PropTypes.oneOf([2, 3, 4, 5]),
  maxWidth: PropTypes.string,
  loadingBehaviour: PropTypes.oneOf([
    'all',
    '25'
  ]),
  imageRatio: PropTypes.oneOf([
    'dynamic',
    '4:3'
  ]),
  useLightbox: PropTypes.bool,
  nodes: PropTypes.arrayOf(GalleryNodeType),
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string
};

export default DynamicGallery;
