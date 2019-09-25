const colors = {
  black: '#030e1a',
  black_dark: '#030e1a',
  blue: '#223c59',
  blue_dark: '#061d38',
  blue_light: '#86E4E9',
  coral: '#FF6F61',
  green: '#b2e55e',
  red_dark: '#E52630',
  ruby_dark: '#e7135d',
  white: '#eee',
  white_smoke: '#fbf5f5'
};

export default colorName => {
  if (colorName) {
    return colors[colorName];
  }
  return 'inherit';
};
