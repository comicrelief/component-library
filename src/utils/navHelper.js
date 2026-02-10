/* Determine where to grab the URL, depending on the component type and values supplied */
const NavHelper = navItem => {
  if (!navItem) return '';

  /* Default url path location for 'Pages' */
  let thisUrl = navItem.path;

  if (navItem.internal && navItem.internal.type === 'ContentfulComponentLink') {
    thisUrl = navItem.reference && navItem.reference.path
      ? navItem.reference.path
      : navItem.url;
  }

  return thisUrl;
};

/* NavHelper for new Contentful data structure (headerPageGroups format) */
const NavHelperNew = pageLink => {
  if (!pageLink) return '';

  // pageSelector path takes priority
  if (pageLink.pageSelector && pageLink.pageSelector.path) {
    return `/${pageLink.pageSelector.path}`;
  }

  // Otherwise use external URL
  if (pageLink.pageUrlIfExternal) {
    return pageLink.pageUrlIfExternal;
  }

  return '';
};

/* Get URL for primary page in new data structure */
const NavHelperPrimary = group => {
  if (!group) return '';

  // primaryPageSelector path takes priority
  if (group.primaryPageSelector && group.primaryPageSelector.path) {
    return `/${group.primaryPageSelector.path}`;
  }

  // Otherwise use external URL
  if (group.primaryPageUrlIfExternal) {
    return group.primaryPageUrlIfExternal;
  }

  return '';
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

/* MoreNavPreProcess for new Contentful data structure */
const MoreNavPreProcessNew = (headerPageGroups, characterLimit) => {
  let characterCount = 0;
  const overLimit = false;
  const standardGroups = [];
  const moreNavGroups = [];

  headerPageGroups.map(group => {
    // Use primaryPageName for character count
    characterCount += group.primaryPageName.length;

    // Assign groups to the relevant array if we're over the limit
    return characterCount > characterLimit !== overLimit
      ? moreNavGroups.push(group)
      : standardGroups.push(group);
  });

  return { standardGroups, moreNavGroups };
};

/* Combine all column links into a single array for submenu rendering */
const getColumnLinks = group => {
  const links = [];

  if (group.column1PageLinks) {
    links.push(...group.column1PageLinks);
  }
  if (group.column2PageLinks) {
    links.push(...group.column2PageLinks);
  }
  if (group.column3PageLinks) {
    links.push(...group.column3PageLinks);
  }

  return links;
};

export {
  NavHelper,
  NavHelperNew,
  NavHelperPrimary,
  MoreNavPreProcess,
  MoreNavPreProcessNew,
  getColumnLinks
};
