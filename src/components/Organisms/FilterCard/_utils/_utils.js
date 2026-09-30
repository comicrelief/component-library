const preprocessNodes = nodesToProcess => {
  const processedNodes = [];
  let processedTags = [];

  nodesToProcess.forEach((node, index) => {
    // Deconstruct the Contentful objects into something way more useful:
    processedNodes[index] = {
      title: node.title,
      url: node.url,
      // Create a new array of just the Filtertag 'tag' values associated with this node:
      tags: node.filterTags.map(thisTag => {
        // Keep track of tags separately:
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
