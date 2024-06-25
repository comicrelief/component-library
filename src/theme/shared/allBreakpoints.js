/**
 * For usage and examples see utils.md
 */

export const breakpointValues = {
  S: 0,
  M: 740,
  L: 1024,
  Nav: 1275, // TO-DO: CHECK THIS W/CURTIS
  XL: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${breakpointValues[size]}px)`;
  }
  return 'inherit';
};
