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
  Caption
} from './DynamicGallery.style';
import Picture from '../../Atoms/Picture/Picture';
import Lightbox, { LightboxContext } from './_Lightbox';

/**
 * the Dynamic Gallery component displays a grid of images,
 * by default using dynamic heights per image to create an more organic look
 */
const DynamicGallery = ({
  // options
  maxColumns = 3,
  // dynamicImageHeights = false,
  // content
  nodes
  // ...rest
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
  const [columnCount, setColumnCount] = useState(maxColumns);

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
        newColumnCount = maxColumns;
        break;
    }
    setColumnCount(newColumnCount);
  }, [maxColumns, setColumnCount]);

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
    <Container>
      <LightboxContext.Provider
        value={{
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

DynamicGallery.propTypes = {
  maxColumns: PropTypes.oneOf([2, 3, 4, 5]),
  // dynamicImageHeights: PropTypes.bool,
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      ageGroup: PropTypes.string
    })
  )
};

export default DynamicGallery;

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

  // handle selected node
  const { setSelectedNode } = useContext(LightboxContext);

  function handlePointerUp(node) {
    setSelectedNode(node);
  }

  function handleKeyDown(event, node) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedNode(node);
    }
  }

  return (
    <Column ref={elRef}>
      {nodes.map((node, nodeIndex) => (
        <GalleryNode
          // disabling the lint rule here as we're chunking an array and have no unique keys
          // eslint-disable-next-line react/no-array-index-key
          key={nodeIndex}
          onPointerUp={() => handlePointerUp(node)}
          onKeyDown={event => handleKeyDown(event, node)}
          tabIndex={0}
        >
          <ImageContainer style={{ minHeight, maxHeight }}>
            <Picture
              alt={node.title}
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
        </GalleryNode>
      ))}
    </Column>
  );
}
ColumnComponent.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      ageGroup: PropTypes.string
    })
  )
};
