import fontConfig from './fontConfig';

export default (theme, thisTag) => {
  // Check we've got a match, just in case:
  if (Object.keys(fontConfig).includes(thisTag)) {
    return `
      // Small breakpoint
      font-size: ${fontConfig[thisTag].small.fontSize};
      line-height: ${fontConfig[thisTag].small.lineHeight};

      // Medium breakpoint
      @media ${theme.allBreakpoints('M')} {
        font-size: ${fontConfig[thisTag].medium.fontSize};
        line-height: ${fontConfig[thisTag].medium.lineHeight};
      }

      // L & XL breakpoints
      @media ${theme.allBreakpoints('L')} {
        font-size: ${fontConfig[thisTag].large.fontSize};
        line-height: ${fontConfig[thisTag].large.lineHeight};
      }
    `;
  }
  return null;
};
