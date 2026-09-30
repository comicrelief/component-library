const preprocessNodes = nodesToProcess => {
  const outputNodes = [];
  const outputTags = {};

  nodesToProcess.forEach((thisNode, index) => {
    // Deconstruct the Contentful objects into something way more usable:
    outputNodes[index] = {
      title: thisNode.title,
      url: thisNode.url,
      // Create a new array of just the Filter Tag 'tag' values associated with this node:
      tags: thisNode.filterTags.map(thisTag => {
        // While we're here, keep a dedicated object of all of the tags we've seen;
        // this will naturally handle any reused tags across nodes:
        outputTags[thisTag.title] = {
          tag: thisTag.tag,
          selectedIcon: thisTag.filterIconSelected.file.url,
          unselectedIcon: thisTag.filterIconUnselected.file.url
        };

        return thisTag.tag;
      })
    };
  });

  return { outputNodes, outputTags };
};

export default preprocessNodes;
