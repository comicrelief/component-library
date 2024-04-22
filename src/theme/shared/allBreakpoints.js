/**
 * For usage and examples see utils.md
 */

export const breakpoints = {
  S: 0,
  M: 740,
  L: 1024,
  Nav: 1150,
  XL: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${breakpoints[size]}px)`;
  }
  return 'inherit';
};
