const screenPixelValues = {
  small: 740,
  medium: 1024,
  large: 1440
};

const screen = {
  small: `${screenPixelValues.small}px`,
  medium: `${screenPixelValues.medium}px`,
  large: `${screenPixelValues.large}px`
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

export {
  media, screen, container, screenPixelValues
};
