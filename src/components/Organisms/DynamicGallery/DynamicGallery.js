import { throttle, orderBy, floor } from 'lodash';
import PropTypes from 'prop-types';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpointValues2026 as breakpointValues } from '../../../theme/shared/breakpoints2026';
import Picture from '../../Atoms/Picture/Picture';
import Lightbox, { LightboxContext } from './_Lightbox';
import {
  Caption,
  Column,
  Container,
  Details,
  EmptyMessage,
  GalleryNode,
  ImageContainer,
  ImageGrid,
  InteractiveGalleryNode,
  Title
} from './DynamicGallery.style';

// MARK: Gallery
/**
 * the Dynamic Gallery component displays a grid of images,
 * by default using dynamic heights per image to create an more organic look
 */
const DynamicGallery = ({
  // options
  pageBackgroundColour = 'transparent',
  gridWidth = 3,
  // loadingBehaviour = 'lazy',
  // displayOrder = 'ascending',
  imageRatio = 'dynamic',
  useLightbox = true,
  nodes = [],
  paddingTop = '0rem',
  paddingBottom = '2rem'
}) => {
  const hasNodes = nodes?.length > 0;

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
  }, [isSmall, isMedium, gridWidth, setColumnCount]);

  // handle selected node
  const [selectedNode, setSelectedNode] = useState(null);

  function handleNextNode(node) {
    const nodeIndex = nodes.indexOf(node);
    const nextNodeIndex = (nodeIndex + 1) % nodes.length;
    setSelectedNode(nodes[nextNodeIndex]);
  }
  function handlePreviousNode(node) {
    const nodeIndex = nodes.indexOf(node);
    const previousNodeIndex = (nodeIndex - 1 + nodes.length) % nodes.length;
    setSelectedNode(nodes[previousNodeIndex]);
  }

  // assign a manual tabbing order to gallery images based on their position in the DOM,
  // starting from top-left and working downwards in a natural order
  const containerRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (containerRef.current) {
        const galleryNodes = containerRef.current.querySelectorAll('.gallery-node');
        const sortedNodes = orderBy(galleryNodes, node => {
          const { top, left } = node.getBoundingClientRect();
          return floor(top, -2) + Math.floor(left) / 1000;
        }, 'asc');

        sortedNodes.forEach((galleryNode, index) => {
          galleryNode.setAttribute('data-order', String(index));
        });
      }
    }, 1000);
  }, [columnCount]);

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
        const nodeIndex = +event.target.dataset.order;
        if (Number.isNaN(nodeIndex)) return;
        const galleryContainer = event.target.closest('.gallery-container');
        if (!galleryContainer) return;

        let newNodeIndex;

        if (event.shiftKey) {
          // shift-tab: move to the previous image
          newNodeIndex = nodeIndex - 1;
          if (newNodeIndex < 0) return;
          event.preventDefault();
          galleryContainer.querySelector(`[data-order="${newNodeIndex}"]`).focus();
        } else {
          // tab: move to the next image
          newNodeIndex = nodeIndex + 1;
          if (newNodeIndex >= nodes.length) {
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
          galleryContainer.querySelector(`[data-order="${newNodeIndex}"]`).focus();
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
      pageBackgroundColour={pageBackgroundColour}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <LightboxContext.Provider
        value={{
          useLightbox,
          selectedNode,
          setSelectedNode,
          nextNode: handleNextNode,
          previousNode: handlePreviousNode
        }}
      >
        <ImageGrid className="gallery-grid" onKeyDown={event => handleKeyDown(event)}>
          {hasNodes
          && Array(columnCount)
            .fill(null)
            .map((column, columnIndex) => (
              <ColumnComponent
                // disabling the lint rule here
                // as we're chunking an array and have no unique keys
                // eslint-disable-next-line react/no-array-index-key
                key={columnIndex}
                columnIndex={columnIndex}
                columnCount={columnCount}
                nodes={nodes}
                imageRatio={imageRatio}
              />
            ))}

          <EmptyMessage isEmpty={!hasNodes}>No images to display</EmptyMessage>
        </ImageGrid>
        <Lightbox />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div className="gallery-focus-trap" tabIndex={0} />
      </LightboxContext.Provider>
      {/* <Button onClick={handleLoadMore}>Load more</Button> */}
    </Container>
  );
};

// MARK: Gallery Props
const GalleryNodeType = PropTypes.shape({
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  body: PropTypes.string,
  caption: PropTypes.string,
  centredText: PropTypes.bool
});

DynamicGallery.propTypes = {
  // title: PropTypes.string,
  pageBackgroundColour: PropTypes.string,
  gridWidth: PropTypes.oneOf([2, 3, 4, 5]),
  // loadingBehaviour: PropTypes.oneOf([
  //   'lazy',
  //   'eager'
  // ]),
  // displayOrder: PropTypes.oneOf([
  //   'random',
  //   'ascending',
  //   'descending'
  // ]),
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

// MARK: Column
/**
 * a separate component to handle columns of images;
 * this component handles aspect ratio calculations to enfore a min/max ratio for its images
 */
function ColumnComponent({
  nodes,
  imageRatio,
  columnIndex,
  columnCount
}) {
  const [minHeight, setMinHeight] = useState();
  const [maxHeight, setMaxHeight] = useState();
  const elRef = useRef(null);

  const updateMinMaxHeight = useCallback(() => {
    if (!elRef.current) return;

    let minAspectRatio;
    let maxAspectRatio;

    // handle aspect ratio;
    // for dynamic aspect ratio, we use a min/max ratio of 2.35:1 and 9:16
    // but if a specific aspect ratio is provided, use that instead
    switch (imageRatio) {
      case '4:3':
        minAspectRatio = 4 / 3;
        maxAspectRatio = 4 / 3;
        break;
      default:
        minAspectRatio = 2.35 / 1;
        maxAspectRatio = 9 / 16;
        break;
    }

    const columnWidth = elRef.current.clientWidth;
    setMinHeight(columnWidth / minAspectRatio);
    setMaxHeight(columnWidth / maxAspectRatio);
  }, [imageRatio, setMinHeight, setMaxHeight]);

  // call repeatedly on column resize
  useEffect(() => {
    // when the column width changes, recalculate the min/max height for images
    const handleResize = throttle(() => {
      updateMinMaxHeight();
    }, 250);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(elRef.current);

    // call once on initial mount
    updateMinMaxHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateMinMaxHeight]);

  const { useLightbox, setSelectedNode } = useContext(LightboxContext);

  // on click, open the image in the lightbox;
  // conditionally enabled depending on the gallery settings
  function handlePointerUp(node) {
    setSelectedNode(node);
  }

  const NodeComponent = useLightbox ? InteractiveGalleryNode : GalleryNode;

  return (
    <Column ref={elRef} className="gallery-column">
      {nodes
        ?.filter((_, nodeIndex) => nodeIndex % columnCount === columnIndex)
        .map((node, nodeIndex) => (
          <NodeComponent
            className="gallery-node"
            title={node.title}
            aria-label={node.title}
            data-node-index={nodeIndex}
            // disabling the lint rule here as we're chunking an array and have no unique keys
            // eslint-disable-next-line react/no-array-index-key
            key={nodeIndex}
            onPointerUp={useLightbox ? () => handlePointerUp(node) : undefined}
            tabIndex={0}
          >
            <ImageContainer style={{ minHeight, maxHeight }}>
              <Picture
                // no alt text here as we set the title on the containing button
                image={node.image}
                height="100%"
                objectFit="cover"
              />
            </ImageContainer>
            <Details>
              <Title>{node.title}</Title>
              {node.caption && <Caption>{node.caption}</Caption>}
            </Details>
          </NodeComponent>
        ))}
    </Column>
  );
}

// MARK: Column Props
ColumnComponent.propTypes = {
  nodes: PropTypes.arrayOf(GalleryNodeType),
  imageRatio: PropTypes.oneOf([
    'dynamic',
    '4:3'
  ]),
  columnIndex: PropTypes.number,
  columnCount: PropTypes.number
};
