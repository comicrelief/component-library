import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import { getIcon } from './_utils/_utils';

import {
  Node,
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
  const resultState = useState(0);

  useEffect(() => {
    updateTotalResult(resultState[0]);
  }, [resultState, updateTotalResult]);

  // Resetting useState variable *directly* (rather than a setResultState),
  // to avoid re-render loops but still utlise useEffect
  resultState[0] = 0;

  return processedNodes.map((thisNode, index) => {
    // Applies pinned, hero styling to the first node, when the CMS is set to do so:
    const heroFirstNode = index === 0 && firstFilterCardNodeAsHero;

    // Check to see if we've even got a display limit before comparing to the current index:
    const underLimit = nodeDisplayLimit === 0
        || (nodeDisplayLimit > 0 && index < nodeDisplayLimit);

    // We can render this node when:
    const renderThisNode = (
      // No filters are active...
      currentFilters.length === 0
          // Or when this node includes tags that are being filtered for...
          || currentFilters.some(thisTag => thisNode.tags.includes(thisTag))
          // Or if we're 'hero'-ing it, which bypasses filters (see note below)...
          || heroFirstNode);

    // TODO: to check with Curtis; when the 'hero' display is chosen,
    // do we always 'hero' the first node in the CMS list, regardless of filter?
    // Or do we 'hero' the first node in the filtered list?
    // If the former, do we update the result total to include this or not?

    if (renderThisNode && underLimit) {
      // Update our counter
      resultState[0] += 1;

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
            />
          </NodeImageWrapper>

          <NodeCopyWrapper>
            <NodeCopyLabel tag="p" color="grey" weight="500">
              {label}
            </NodeCopyLabel>

            <NodeCopyHeading
              tag={heroFirstNode ? 'h2' : 'p'}
              $isHero={heroFirstNode}
              weight="700"
            >
              {heading}
            </NodeCopyHeading>

            <NodeCopyDescription tag="p">
              {description}
            </NodeCopyDescription>

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
};

FilterCardNodes.propTypes = {
  processedNodes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstFilterCardNodeAsHero: PropTypes.bool.isRequired,
  updateTotalResult: PropTypes.func.isRequired,
  nodeDisplayLimit: PropTypes.number.isRequired
};

export default FilterCardNodes;
