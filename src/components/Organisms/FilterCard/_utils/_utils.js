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

export default preprocessNodes;
