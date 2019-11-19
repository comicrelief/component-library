const fontSizes = {
  xxs: '0.6875',
  xs: '0.6875',
  s: '1rem',
  m: '1.25rem',
  l: '1.25rem',
  xl: '1.625rem',
  xxl: '2.625rem',
  big: '4rem',
  super: '6.25rem'
};

export default size => {
  if (size) {
    return fontSizes[size];
  }
  return '';
};
