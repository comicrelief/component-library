const formatItems = thisData => {
  // Somewhere to store our formatted items:
  const allValidNodes = [];

  // Set at a Content Type field level, so doesn't need to be dynamic:
  const possibleNumberOfNodes = 12;

  // Grab ALL keys from our raw data:
  const theseKeys = Object.keys(thisData);

  // Iterate over all of the data, using a dynamic key prefix to filter
  // what we need in order to create each object for our allValidNodes array:
  for (let i = 1; i <= possibleNumberOfNodes; i += 1) {
    // Create a dynamic key prefix based on the counter, obviously matching
    // the naming convention set at the Content Type level in the CMS
    const thisKeyPrefix = `node${i}_`;

    // Make an array of objects, each object representing a specific node and its fields:
    const thisNodeContent = theseKeys
      .filter(key => key.includes(thisKeyPrefix))
      .reduce((thisObj, thisKey) => {
        const thisFilteredObj = thisObj;
        // Only assign if we have actually have a value; only the fields for nodes 1-4 are required:
        if (thisData[thisKey]) thisFilteredObj[thisKey] = thisData[thisKey];
        return thisFilteredObj;
      }, {});

    // Add our new object to the allValidNodes array, but only if we've got all 3 necessary fields:
    if (Object.keys(thisNodeContent).length === 3) {
      thisNodeContent.testing = `${thisKeyPrefix} - henlo`;
      allValidNodes.push(thisNodeContent);
    }
  }

  return allValidNodes;
};

export default formatItems;
