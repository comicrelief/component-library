import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import Picture from '../../Atoms/Picture/Picture';
import { LightboxContext } from './_Lightbox';
import {
  Column,
  Details,
  GalleryNode,
  ImageContainer,
  InteractiveGalleryNode
} from './DynamicGallery.style';
import { GalleryNodeType } from './_types';
import { extractNodeText } from './_utils';

/**
 * a separate component to handle columns of images;
 * this component handles aspect ratio calculations to enfore a min/max ratio for its images
 */
export default function DynamicGalleryColumn({
  focusOutlineColour,
  updateTabOrder,
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
    }, 500);

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
        .map((node, nodeIndex) => {
          // only render nodes that are in the current column;
          // this lets us assign a unique index to each node
          const columnNodeIndex = nodeIndex % columnCount;
          if (columnNodeIndex !== columnIndex) return null;

          const bodyText = extractNodeText(node.gridBody);
          const key = String(nodeIndex) + bodyText;
          return (
            <NodeComponent
              key={key}
              className="gallery-node"
              caption={bodyText}
              aria-label={bodyText}
              title={bodyText}
              data-node-index={nodeIndex}
              focusOutlineColour={focusOutlineColour}
              onPointerUp={useLightbox ? () => handlePointerUp(node) : undefined}
              tabIndex={0}
            >
              <ImageContainer
                className="gallery-node-image"
                // eslint prefers template literals for strings, but they break the compiler
                // eslint-disable-next-line prefer-template
                minHeight={String(minHeight) + 'px'}
                // eslint-disable-next-line prefer-template
                maxHeight={String(maxHeight) + 'px'}
              >
                <Picture
                  image={node.image}
                  objectFit="cover"
                  alt={bodyText}
                  // animate image in on load
                  onLoad={event => {
                    event.target
                      .closest('.gallery-node-image')
                      .querySelector('img')
                      .style.setProperty('opacity', '1');

                    // update tab order once the image has loaded
                    updateTabOrder();
                  }}
                />
              </ImageContainer>
              <Details>
                {node.gridBody && <div>{node.gridBody}</div>}
                {node.gridCaption && <div>{node.gridCaption}</div>}
              </Details>
            </NodeComponent>
          );
        })}
    </Column>
  );
}

DynamicGalleryColumn.propTypes = {
  nodes: PropTypes.arrayOf(GalleryNodeType),
  imageRatio: PropTypes.oneOf(['dynamic', '4:3']),
  columnIndex: PropTypes.number,
  columnCount: PropTypes.number,
  updateTabOrder: PropTypes.func,
  focusOutlineColour: PropTypes.string
};
