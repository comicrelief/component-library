/* Determine where to grab the URL, depending on the component type and values supplied */
const NavHelper = navItem => {
  if (!navItem) return '';

  /* Default url path location for 'Pages' */
  let thisUrl = navItem.path;

  if (navItem.internal.type === 'ContentfulComponentLink') {
    thisUrl = navItem.reference && navItem.reference.path
      ? navItem.reference.path
      : navItem.url;
  }

  return thisUrl;
};

const MoreNavPreProcess = (menuGroups, characterLimit) => {
  let characterCount = 0;
  const overLimit = false;
  const standardGroups = [];
  const moreNavGroups = [];

  menuGroups.map(group => {
    // As this first item is used as our top level parent 'button' link,
    // look to this to grab the amount of copied rendered:
    const thisFirstChild = group.links[0];

    // Keep track of how many characters our nav has in total:
    characterCount += thisFirstChild.title.length;

    // Assign groups to the relevant array if we're over the limit
    return characterCount > characterLimit !== overLimit
      ? moreNavGroups.push(group)
      : standardGroups.push(group);
  });

  return { standardGroups, moreNavGroups };
};

export { NavHelper, MoreNavPreProcess };
