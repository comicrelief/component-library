/**
 * For usage and examples see utils.md
 */

export const breakpointValues = {
  S: 0,
  M: 740,
  L: 1024,
  Nav: 1150, // TO TEST
  NavWithAnimations: 1280,
  XL: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${breakpointValues[size]}px)`;
  }
  return 'inherit';
};
