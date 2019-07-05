const colors = {
  white: '#FFFFFF',
  black: '#030e1a',
  yellow: '#fbef51',
  teal: '#00beca',
  blue_light: '#31a1e0',
  blue: '#22d2dc',
  blue_royal: '#0565d1',
  green: '#4ECD57',
  green_light: '#62EF74',
  red: '#f04257',
  pink: '#fc9eb9',
  grey_extra_light: '#f0f0f0',
  grey_light: '#e6e3dc',
  grey_medium: '#c7c7c7',
  grey: '#666',
  purple: '#7d2ca9'
};

export default colorName => {
  if (colorName) {
    return colors[colorName];
  }
  return 'inherit';
};
