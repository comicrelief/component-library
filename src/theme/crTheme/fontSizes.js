const fontSizes = {
  xxs: '0.6875rem',
  xs: '0.75rem',
  s: '1rem',
  m: '1.25rem',
  l: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  big: '4rem',
  super: '5rem',
  // Temporary edgecase fix to at least keep all sizing centralise
  // before website project design review overhaul
  error: '0.875rem'
};

export default size => {
  if (size) {
    return fontSizes[size];
  }
  return '';
};
