const screen = {
  small: '740px',
  medium: '1024px',
  mediumPlus: '1175px',
  large: '1440px'
};

const media = size => {
  if (size) {
    return `@media (min-width: ${screen[size]})`;
  }
  return 'inherit';
};

const container = {
  small: '880px',
  medium: '1200px',
  large: '1440px'
};

export { media, screen, container };
