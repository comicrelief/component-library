const domainRegEx = new RegExp(
  '(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]'
);

const InternalLinkHelper = link => {
  // Check our URL for a domain pattern, if so return it
  if (domainRegEx.test(link)) {
    return link;
  }

  // If domain-free and internal, prefix it with slash if it doesn't already have one
  return link.substring(0, 1) === '/' ? link : `/${link}`;
};

const getDomain = url => {
  let thisURL = url;

  // Strip out protocol
  thisURL = url.replace(/(https?:\/\/)?(www.)?/i, '');

  // Strip out subdirectory/path
  if (thisURL.indexOf('/') !== -1) {
    const [splitURL] = thisURL.split('/');
    thisURL = splitURL;
  }

  return thisURL;
};

export {
  InternalLinkHelper, domainRegEx, getDomain
};
