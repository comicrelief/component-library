/**
 * Example Usage

Make height: 200px from 1024px onwards:

@media ${({ theme }) => theme.breakpoints2026('L')} {
  height: 200px;
}

*/

export const breakpointValues2026 = {
  XS: 0,
  S: 320,
  M: 740,
  L: 1024,
  Nav: 1150,
  NavWide: 1350,
  XL: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${breakpointValues2026[size]}px)`;
  }
  return 'inherit';
};
