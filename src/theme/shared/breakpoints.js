export const sizes = {
  small: 0,
  medium: 740,
  large: 1024,
  nav: 1150,
  xlarge: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${sizes[size]}px)`;
  }
  return 'inherit';
};
