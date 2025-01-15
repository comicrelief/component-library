const colors = {
  black: '#000000',
  blue: '#0565D1',
  blue_dark: '#274084',
  blue_donate: '#2042AD',
  blue_donate_interact: '#001A85',
  blue_light: '#BECCF9',
  blue_royal: '#6489FC',
  coral: '#F9686D',
  coral_dark: '#961D35',
  coral_light: '#FFCECE',
  cwg_22_blue: '#204794',
  cwg_22_orange: '#FB6326',
  cwg_22_purple: '#7B3ED3',
  cwg_22_red: '#E62731',
  cwg_22_yellow: '#F8E928',
  deep_violet_dark: '#2C0230',
  deep_violet: '#2C0230' /** Will be removed  */,
  deep_violet_light: '#3e1c43',
  error_pink: '#FAE1E2',
  green: '#49D267',
  green_dark: '#1B651D',
  green_light: '#F4F2F4',
  grey_stone: '#CEDCDA',
  grey_extra_light: '#f0f0f0',
  grey_for_forms: '#666',
  grey_label: '#5C5C5E',
  // this is the Curtis approved list of 5 greys that will be later numbered grey_1 thru grey_5
  // grey_1
  grey_light: '#F4F3F5',
  // grey_2
  grey_medium: '#E1E2E3',
  // grey_3
  grey: '#969598',
  // grey_4
  grey_4: '#6E6E6E',
  // grey_5
  grey_dark: '#222222',
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
  red_secondary: '#F9723A',
  red_dark: '#890B11',
  rnd_23_teal: '#3EB1AA',
  rnd_23_yellow: '#FFE300',
  rnd_23_pink: '#EDB4D3',
  rnd_23_black: '#2B3737',
  rnd_24_red_dark: '#A11B22',
  rnd_24_teal_dark: '#2B7C77',
  rnd_24_pink_dark: '#A67E94',
  rnd_24_blue: '#3367AF',
  rnd_25_ruby_red: '#AE001B',
  rnd_25_glitzy_grape: '#A20C51',
  rnd_25_glitzy_blue: '#0F1953',
  rnd_25_glitzy_purple: '#3A1F62',
  rnd_25_glitzy_black: '#2B3737',
  rnd_25_party_pink: '#FF9DEC',
  rnd_25_party_blue: '#004EFF',
  rnd_25_party_lilac: '#B07FEA',
  teal: '#4ECDBE',
  teal_dark: '#13767C',
  teal_light: '#86E4E9',
  white: '#FFFFFF',
  yellow: '#FFE400',
  yellow_dark: '#665700',
  yellow_light: '#FEFD5A',
  transparent: 'transparent'
};

export default colorName => {
  if (colorName) {
    return colors[colorName];
  }
  return 'inherit';
};
