import React, { useEffect } from 'react';
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
  nodeRenderLimit,
  currentFilters,
  hideShowMoreButton
}) => {
  // Track of how many nodes we successfully rendered, plus how
  // many the current filter has associated with it in total:
  let currentNodeCount = 0;
  let totalNodeCount = 0;

  const filtersActive = currentFilters.length > 0;

  // Step through all content this FilterCard component has been fed from the CMS:
  const createNodes = processedNodes.map((thisNode, index) => {
    // Whether or not this node contains a tag we're currently filtering for:
    const tagMatch = currentFilters.some(thisTag => thisNode.tags.includes(thisTag));

    // Only insist on a tag match when filtering, otherwise just count _every_ node;
    if ((filtersActive && tagMatch) || !filtersActive) totalNodeCount += 1;

    // Render this node when all filters are inactive, or when it matches 1+ of our active filters:
    const renderThisNode = (!filtersActive || tagMatch);

    // Finally, check if we've even got a render limit before comparing to the current counter:
    const underLimit = nodeRenderLimit === 0
      || (nodeRenderLimit > 0 && currentNodeCount < nodeRenderLimit);

    // If we meet both criteria, go forth and render:
    if (renderThisNode && underLimit) {
      const {
        id, label, heading, description,
        image, imageLow, imageSet, imageAltText,
        url, ctaText, ctaIcon
      } = thisNode;

      // Applies the Hero styling to the first node, when the CMS is set to do so:
      const heroFirstNode = index === 0 && firstFilterCardNodeAsHero;

      // Bump the counter for this successful render:
      currentNodeCount += 1;

      return (
        <Node
          key={id}
          $isHero={heroFirstNode}
          data-testid="FilterCard-Node"
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
              data-testid="FilterCard-Node--Heading"
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

  // Remove any nulls from our map-function created createNodes array:
  const nodesToRender = createNodes.filter(Boolean);

  useEffect(() => {
    // Let the parent know how many _total_ nodes this filter combination has associated
    // with it (for the 'Results' readout), rather than how many we're _currently_ rendering:
    updateTotalResult(totalNodeCount);

    // And also let it know if we've rendered everything we can:
    hideShowMoreButton(currentNodeCount === totalNodeCount);
  }, [nodesToRender, updateTotalResult, hideShowMoreButton, currentNodeCount, totalNodeCount]);

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
  nodeRenderLimit: PropTypes.number.isRequired,
  hideShowMoreButton: PropTypes.func.isRequired
};

export default FilterCardNodes;
