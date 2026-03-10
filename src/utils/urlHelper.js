const BASE_URL = 'https://www.comicrelief.com';

/**
 * Prepends base URL to relative paths when in dev mode
 * @param {string} path - The path to process into url
 * @param {boolean} devMode - for adding real world urls when dev in CL
 * @returns {string} The processed path / url
 */
const prependBaseUrl = (path, devMode) => {
  // Return the url as-is if not in dev mode
  if (!devMode) return path;

  // Don't prepend if it's already an absolute URL
  if (path.startsWith('http://')
      || path.startsWith('https://')
      || path.startsWith('//')) {
    return path;
  }

  // Don't prepend to anchor-only links
  if (path === '#') return path;

  // Prepend base URL
  return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

export default prependBaseUrl;
