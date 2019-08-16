const NavHelper = navItem => {
  let thisUrl = '';

  /* Determine where to grab the URL, depending on the component type and values supplied */
  if (navItem.internal.type === 'ContentfulComponentLink') {
    thisUrl =
      navItem.reference && navItem.reference.path
        ? navItem.reference.path
        : navItem.url;
  } else {
    thisUrl = navItem.path;
  }

  return thisUrl;
};

export default NavHelper;
