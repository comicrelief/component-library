const colors = {
  black: '#2C0230',
  blue: '#6489FC',
  blue_dark: '#274084',
  blue_light: '#8BACFE',
  blue_royal: '#0565d1',
  coral: '#F9686D',
  coral_dark: '#961D35',
  coral_light: '#FFCECE',
  deep_violet_dark: '#2C0230',
  deep_violet_light: '#3e1c43',
  green: '#4ECD57',
  green_dark: '#1B651D',
  green_light: '#62EF74',
  grey: '#918791',
  grey_dark: '#4B324E',
  grey_extra_light: '#f0f0f0',
  grey_for_forms: '#666',
  grey_light: '#F4F2F4',
  grey_medium: '#c7c7c7',
  magenta: '#FC59CE',
  magenta_dark: '#821C5D',
  magenta_light: '#FEB4DC',
  orange: '#FF9144',
  orange_dark: '#984316',
  orange_light: '#FEE3CC',
  purple: '#C180F9',
  purple_dark: '#48276E',
  purple_light: '#DFC6F6',
  red: '#E52630',
  teal: '#22CFD8',
  teal_dark: '#13767C',
  teal_light: '#86E4E9',
  white: '#FFFFFF',
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
