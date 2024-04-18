/**
 * Example Usages

  media queries (no need to import):
  @media ${({ theme }) => theme.allBreakpoints('M')} {

  screen sizes:
  import { sizes } from '../../../theme/shared/allBreakpoints';
  ...
  max-width: ${sizes.XL};
 */

export const sizes = {
  S: 0,
  M: 740,
  L: 1024,
  Nav: 1150,
  XL: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${sizes[size]}px)`;
  }
  return 'inherit';
};
