import fontConfig from './fontConfig';

export default (theme, thisTag) => {
  // Check we've got a match, just in case:
  if (Object.keys(fontConfig).includes(thisTag)) {
    return `
      // General styles:
      font-family: ${theme.fontFamilies(fontConfig[thisTag].family)};
      font-weight: normal;
      letter-spacing: 0;

      // Small ("mobile") breakpoint
      font-size: ${fontConfig[thisTag].small.fontSize};
      line-height: ${fontConfig[thisTag].small.lineHeight};

      // Medium ("tablet") breakpoint
      @media ${theme.allBreakpoints('M')} {
        font-size: ${fontConfig[thisTag].medium.fontSize};
        line-height: ${fontConfig[thisTag].medium.lineHeight};
      }

      // L & XL ("desktop") breakpoints
      @media ${theme.allBreakpoints('L')} {
        font-size: ${fontConfig[thisTag].large.fontSize};
        line-height: ${fontConfig[thisTag].large.lineHeight};
      }
    `;
  }
  return null;
};
