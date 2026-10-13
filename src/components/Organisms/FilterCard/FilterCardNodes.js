import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import { getIcon } from './_utils/_utils';

import {
  Node,
  NodeWrapper,
  NodeImageWrapper,
  NodeImage,
  NodeCopyWrapper,
  NodeCopyLabel,
  NodeCopyHeading,
  NodeCopyDescription,
  NodeCopyLink
} from './FilterCard.style';

const FilterCardNodes = ({
  updateTotalResult,
  processedNodes,
  firstFilterCardNodeAsHero,
  nodeDisplayLimit,
  currentFilters
}) => {
  const createNodes = processedNodes.map((thisNode, index) => {
    // Applies pinned, hero styling to the first node, when the CMS is set to do so:
    const heroFirstNode = index === 0 && firstFilterCardNodeAsHero;

    // Check to see if we've even got a display limit before comparing to the current index:
    const underLimit = nodeDisplayLimit === 0
        || (nodeDisplayLimit > 0 && index < nodeDisplayLimit);

    // We can render this node when:
    const renderThisNode = (
      // No filters are active...
      currentFilters.length === 0
      // ... or when this node includes tags that are being filtered for:
      || currentFilters.some(thisTag => thisNode.tags.includes(thisTag))
    );

    if (renderThisNode && underLimit) {
      const {
        id, label, heading, description,
        image, imageLow, imageSet, imageAltText,
        url, ctaText, ctaIcon
      } = thisNode;

      return (
        <Node
          key={id}
          $isHero={heroFirstNode}
        >
          <NodeImageWrapper>
            <NodeImage
              image={image}
              images={imageSet}
              imageLow={imageLow}
              objectFit="cover"
              width="100%"
              height="100%"
              alt={imageAltText}
              $isHero={heroFirstNode}
            />
          </NodeImageWrapper>

          <NodeCopyWrapper>
            <NodeCopyLabel
              tag="p"
              color="grey"
              weight="500"
              $isHero={heroFirstNode}
            >
              {label}
            </NodeCopyLabel>

            <NodeCopyHeading
              tag={heroFirstNode ? 'h2' : 'p'}
              weight="700"
              $isHero={heroFirstNode}
              $hasDescription={description}
            >
              {heading}
            </NodeCopyHeading>

            {description && (
            <NodeCopyDescription
              tag="p"
              $isHero={heroFirstNode}
            >
              {description}
            </NodeCopyDescription>
            )}

            <Text tag="p">
              <NodeCopyLink
                href={url}
                $underline
                target="blank"
                icon={getIcon(ctaIcon)}
              >
                {ctaText}
              </NodeCopyLink>
            </Text>
          </NodeCopyWrapper>
        </Node>
      );
    }
    return null;
  });

  // Remove any nulls:
  const nodesToRender = createNodes.filter(Boolean);

  useEffect(() => {
    // Trigger total-updating callback once we've got nodes to render:
    updateTotalResult();
  }, [nodesToRender, updateTotalResult]);

  return (
    <NodeWrapper>
      {nodesToRender}
    </NodeWrapper>
  );
};

FilterCardNodes.propTypes = {
  processedNodes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstFilterCardNodeAsHero: PropTypes.bool.isRequired,
  updateTotalResult: PropTypes.func.isRequired,
  nodeDisplayLimit: PropTypes.number.isRequired
};

export default FilterCardNodes;
