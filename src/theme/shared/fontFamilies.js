const fontFamilies = {
  Montserrat: { font: 'Montserrat', fallback: 'Helvetica, Arial' },
  Anton: { font: 'Anton', fallback: 'Impact' },
  Founders: {
    font: 'Founders-Grotesk-Regular',
    fallback: 'helvetica, arial, sans-serif'
  },
  Founders_bold: {
    font: 'Founders-GroteskXCondensed-Bold',
    fallback: 'helvetica, arial, sans-serif'
  }
};

export default family => {
  let style = 'inherit';
  if (family) {
    style = `'${fontFamilies[family].font}', ${fontFamilies[family].fallback}, sans-serif`;
  }
  return style;
};
