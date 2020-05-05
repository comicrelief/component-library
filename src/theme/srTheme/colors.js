const colors = {
  black: '#030e1a',
  black_dark: '#030e1a',
  blue: '#223c59',
  blue_dark: '#061d38',
  blue_light: '#86E4E9',
  blue_royal: '#6489FC',
  coral: '#FF6F61',
  coral_dark: '#961D35',
  coral_light: '#FFCECE',
  deep_violet_dark: '#2C0230',
  deep_violet: '#2C0230' /** Will be removed  */,
  deep_violet_light: '#3e1c43',
  green: '#b2e55e',
  green_dark: '#1B651D',
  green_light: '#F4F2F4',
  grey: '#969598',
  grey_dark: '#222222',
  grey_extra_light: '#f0f0f0',
  grey_for_forms: '#666',
  grey_light: '#F4F3F5',
  grey_medium: '#E1E2E3',
  magenta: '#FC59CE',
  magenta_dark: '#821C5D',
  magenta_light: '#FEB4DC',
  orange: '#FF9635',
  orange_dark: '#984316',
  orange_light: '#FEE3CC',
  purple: '#6F3AAB',
  lavender: '#C180F9',
  purple_dark: '#48276E',
  purple_light: '#DFC6F6',
  red: '#E52630',
  red_dark: '#E52630',
  ruby_dark: '#e7135d',
  teal: '#4ECDBE',
  teal_dark: '#13767C',
  teal_light: '#86E4E9',
  white: '#eee',
  white_smoke: '#fbf5f5',
  yellow: '#FFE400',
  yellow_dark: '#665700',
  yellow_light: '#FEFD5A'
};

export default colorName => {
  if (colorName) {
    return colors[colorName];
  }
  return 'inherit';
};
