import React from 'react';
import { Download, External } from '../../../Atoms/Icons/index';

const preprocessNodes = nodesToProcess => {
  const outputNodes = [];
  const outputTags = {};

  nodesToProcess.forEach((thisNode, index) => {
    // Copy over this entire node:
    outputNodes[index] = { ...thisNode };

    // Create a way simplier, non-nested representation of the nested 'FilterTag' content:
    outputNodes[index].tags = thisNode.filterTags.map(thisTag => {
      // But, while we're here, first keep a dedicated array of *every* tags we've seen:
      outputTags[thisTag.title] = {
        tag: thisTag?.tag,
        selectedIcon: thisTag?.filterIconSelected?.file?.url,
        unselectedIcon: thisTag?.filterIconUnselected?.file?.url
      };

      return thisTag.tag;
    });

    // Finally, remove the obtuse Contentful object we no longer need:
    delete outputNodes[index].filterTags;
  });

  return { outputNodes, outputTags };
};

const getIcon = whichIcon => {
  switch (whichIcon) {
    case 'Download':
      return <Download colour="black" size={20} />;
    case 'External URL':
      return <External colour="black" size={20} />;
    case 'None':
    default:
      return null;
  }
};

// Over-engineered to allow us to easily add more options in the future:
const shouldShowAllNodes = optionLabel => {
  switch (optionLabel) {
    case 'Load all cards at once':
      return true;
    case 'Load 6 cards at a time + Hero Node (if set)':
    default:
      return false;
  }
};

export { preprocessNodes, getIcon, shouldShowAllNodes };
