const BASE_URL = 'https://www.comicrelief.com';

// Helper to prepend base URL to paths when in dev mode
const prependBaseUrl = (path, devMode) => {
  console.log('prependBaseUrl called:', { path, devMode });
  if (!devMode || !path) return path;
  // Don't prepend if it's already an absolute URL
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  // Don't prepend to anchor-only links
  if (path === '#') return path;
  // Prepend base URL
  return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

export default prependBaseUrl;
