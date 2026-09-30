const preprocessNodes = nodesToProcess => {
  const processedNodes = [];
  let processedTags = [];

  nodesToProcess.forEach((node, index) => {
    // Deconstruct the Contentful objects into something way more usable:
    processedNodes[index] = {
      title: node.title,
      url: node.url,
      // Create a new array of just the Filter Tag 'tag' values associated with this node:
      tags: node.filterTags.map(thisTag => {
        // And also, keep a dedicated list of all of the tags we've seen:
        processedTags.push(thisTag.tag);
        return thisTag.tag;
      })
    };
  });

  // Remove any duplicate tags:
  processedTags = [...new Set(processedTags)];

  return { processedNodes, processedTags };
};

export default preprocessNodes;
