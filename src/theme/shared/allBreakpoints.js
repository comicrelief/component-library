export const sizes = {
  mobile: 0,
  tablet: 740,
  desktop: 1024,
  nav: 1150,
  large: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${sizes[size]}px)`;
  }
  return 'inherit';
};
