const spacingSizes = {
  none: '0',
  xsm: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  l: '2rem',
  xl: '4rem',
  xxl: '8rem',
  xxxl: '16rem'
};

const setSpacing = size => {
  if (size) {
    return spacingSizes[size];
  }
  return spacingSizes.none;
};

export default setSpacing;
