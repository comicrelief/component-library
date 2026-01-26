import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext
} from 'react';
import { breakpointValues2026 as breakpointValues } from '../../../theme/shared/breakpoints2026';
import {
  GalleryNode,
  ImageContainer,
  Column,
  Container,
  Details,
  EmptyMessage,
  ImageGrid,
  Title,
  Caption,
  InteractiveGalleryNode
} from './DynamicGallery.style';
import Picture from '../../Atoms/Picture/Picture';
import Lightbox, { LightboxContext } from './_Lightbox';

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
  // imageRatio = 'dynamic',
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
   * .
   * the resize listener is throttled to allow resizing to happen as the window size changes
   * without being too expensive
   */
  const [columnCount, setColumnCount] = useState(gridWidth);

  const updateColumnCount = useCallback(() => {
    let newColumnCount = 1;
    switch (true) {
      case window.innerWidth < breakpointValues.S:
        newColumnCount = 1;
        break;
      case window.innerWidth < breakpointValues.M:
        newColumnCount = 2;
        break;
      default:
        newColumnCount = gridWidth;
        break;
    }
    setColumnCount(newColumnCount);
  }, [gridWidth, setColumnCount]);

  // call once on initialisation
  const isInitialised = useRef(false);
  if (!isInitialised.current) {
    updateColumnCount();
    isInitialised.current = true;
  }

  // call repeatedly on window resize
  useEffect(() => {
    const handleWindowResize = throttle(updateColumnCount, 250);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [updateColumnCount]);

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

  return (
    <Container
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
        <ImageGrid>
          {hasNodes
            && Array(columnCount)
              .fill(null)
              .map((column, columnIndex) => {
                const columnNodes = nodes?.filter(
                  (_, nodeIndex) => nodeIndex % columnCount === columnIndex
                );
                return (
                  <ColumnComponent
                    // disabling the lint rule here
                    // as we're chunking an array and have no unique keys
                    // eslint-disable-next-line react/no-array-index-key
                    key={columnIndex}
                    columnIndex={columnIndex}
                    nodes={columnNodes}
                  />
                );
              })}

          <EmptyMessage isEmpty={!hasNodes}>No images to display</EmptyMessage>
        </ImageGrid>
        <Lightbox />
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
  // imageRatio: PropTypes.oneOf([
  //   'dynamic',
  //   'locked'
  // ]),
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
function ColumnComponent({ nodes }) {
  const [minHeight, setMinHeight] = useState();
  const [maxHeight, setMaxHeight] = useState();
  const elRef = useRef(null);

  const updateMinMaxHeight = useCallback(() => {
    if (!elRef.current) return;
    const columnWidth = elRef.current.clientWidth;
    const maxAspectRatio = 9 / 16;
    const minAspectRatio = 2.35 / 1;
    setMinHeight(columnWidth / minAspectRatio);
    setMaxHeight(columnWidth / maxAspectRatio);
  }, [setMinHeight, setMaxHeight]);

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

  // handle keydown events,
  // including image opening and tabbing
  function handleKeyDown(event, node) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedNode(node);
    }
    switch (event.key) {
      // if the lightbox is enabled, open the image in the lightbox when the user presses enter
      case 'Enter': {
        if (useLightbox) {
          event.preventDefault();
          setSelectedNode(node);
        }
        break;
      }
      // TODO handle tabbing between images
      default:
        break;
    }
  }

  const NodeComponent = useLightbox ? InteractiveGalleryNode : GalleryNode;

  // TODO: a better layout? https://mui.com/material-ui/react-masonry/

  return (
    <Column ref={elRef} className="gallery-column">
      {nodes.map((node, nodeIndex) => (
        <NodeComponent
          className="gallery-node"
          title={node.title}
          aria-label={node.title}
          // disabling the lint rule here as we're chunking an array and have no unique keys
          // eslint-disable-next-line react/no-array-index-key
          key={nodeIndex}
          onPointerUp={useLightbox ? () => handlePointerUp(node) : undefined}
          onKeyDown={event => handleKeyDown(event, node)}
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
            {node.caption && (
              <Caption>
                {node.caption}
              </Caption>
            )}
          </Details>
        </NodeComponent>
      ))}
    </Column>
  );
}

// MARK: Column Props
ColumnComponent.propTypes = {
  nodes: PropTypes.arrayOf(GalleryNodeType)
};
