const lineHeights = {
  xxs: '1.063rem',
  xs: '1.25rem',
  s: '1.375rem',
  m: '1.5rem',
  l: '1.625rem',
  xl: '1.875rem',
  xxl: '2rem',
  big: '2.5rem',
  super: '3rem'
};

export default size => {
  if (size) {
    return lineHeights[size];
  }
  return '';
};
