
export const breakpointValues2025 = {
  S: 320,
  M: 740,
  L: 1024,
  Nav: 1150,
  NavWide: 1350,
  XL: 1440
}

export default size => {
  if (size) {
    return `(min-width: ${breakpointValues2025[size]}px)`;
  }
  return 'inherit';
};
