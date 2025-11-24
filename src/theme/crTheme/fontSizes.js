// WEBSITE PROJECT UPDATES:
const fontSizes = {
  xxs: '0.875rem',
  xs: '1rem',
  s: '1.125rem',
  m: '1.25rem',
  l: '1.5rem',
  xl: '1.875rem',
  xxl: '2rem',
  big: '2.5rem',
  super: '3rem'
};

export default size => {
  if (size) {
    return fontSizes[size];
  }
  return '';
};
