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
  // To keep track of how many nodes we successfully rendered,
  // plus how many nodes the current filter has associated with it:
  let currentNodeCount = 0;
  let totalNodeCount = 0;

  const filtersActive = currentFilters.length > 0;

  // Step through all content this FilterCard component has been fed from the CMS:
  const createNodes = processedNodes.map((thisNode, index) => {
    // Whether or not this node contains a tag we're currently filtering for:
    const tagMatch = currentFilters.some(thisTag => thisNode.tags.includes(thisTag));

    // Only insist on a match when filtering, otherwise just count _every_ node;
    // required for the 'results' readout in the parent component:
    if ((filtersActive && tagMatch) || !filtersActive) totalNodeCount += 1;

    // Check to see if we've even got a render limit before comparing to the current counter:
    const underLimit = nodeRenderLimit === 0
      || (nodeRenderLimit > 0 && currentNodeCount < nodeRenderLimit);

    // Render this node when all filters are inactive, or when it matches 1+ of our active filters:
    const renderThisNode = (!filtersActive || tagMatch);

    // If we meet the criteria, go forth and render:
    if (renderThisNode && underLimit) {
      const {
        id, label, heading, description,
        image, imageLow, imageSet, imageAltText,
        url, ctaText, ctaIcon
      } = thisNode;

      // Applies the hero styling to the first node, when the CMS is set to do so:
      const heroFirstNode = index === 0 && firstFilterCardNodeAsHero;
      // Bump the counter for this successful render:
      currentNodeCount += 1;

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
    // Let the parent know how many *total* nodes this filter combination has associated
    // with it (for the 'Results' readout), rather than how many we're *currently* rendering:
    updateTotalResult(totalNodeCount);

    // And let the parent know if we've hit the limit or not
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
