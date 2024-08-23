// NOT CURRENTLY USED BUT KEEPING AROUND IN CASE:
const formatItems = thisData => {
  // Somewhere to store our formatted items:
  const allValidNodes = [];

  const { allNodes: nodes } = thisData;
  console.log('nodes', nodes);

  // Set at a Content Type field level, so doesn't need to be dynamic:
  const numberOfNodes = nodes.length;

  // Grab ALL keys from our raw data:
  const theseKeys = Object.keys(thisData);
  console.log('theseKeys', theseKeys);
  // Iterate over all of the data, using a dynamic key prefix to filter
  // what we need in order to create each object for our allValidNodes array:
  for (let i = 1; i <= numberOfNodes; i += 1) {
    // Create a dynamic key prefix based on the counter, obviously matching
    // the naming convention set at the Content Type level in the CMS
    const thisKeyPrefix = `node${i}`;

    // Make an array of objects, each object representing a specific node and its fields:
    const thisNodeContent = theseKeys
      .filter(key => key.includes(thisKeyPrefix))
      .reduce((thisObj, thisKey) => {
        const thisFilteredObj = thisObj;
        // Only assign if we have actually have a value; only the fields for nodes 1-4 are required:
        if (thisData[thisKey]) {
          // Use a repeatable, generic key so rendering is a LOT easier:
          const simplifedKey = thisKey.split(/([0-9])/).pop().toLowerCase();
          thisFilteredObj[simplifedKey] = thisData[thisKey];
        }
        return thisFilteredObj;
      }, {});

    // Add our new object to the allValidNodes array, but only if we've got all 3 necessary fields:
    if (Object.keys(thisNodeContent).length === 3) {
      allValidNodes.push(thisNodeContent);
    }
  }

  return allValidNodes;
};

export default formatItems;
