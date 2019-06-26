const sizes = {
  small: 740,
  medium: 1024,
  large: 1440
};

export default size => {
  if (size) {
    return `(min-width: ${sizes[size]}px)`;
  }
  return 'inherit';
};
