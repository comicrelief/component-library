/**
 * Adding Colours / Nomenclature
  - campaign colours at the top, followed by greyscale, then general colours
  - campaign colours get overwritten each year.
  - i.e. new rnd26 colours replace last year's old rnd25 colours.
  - general naming convention => "hue_variation"
  - there is a need to filter the "creativity" of funky colours coming from agencies,
    to make them long term usable...
 */

const colors = {

  /* RND25 CAMPAIGN COLOURS */
  rnd_25_ruby_red: '#AE001B',
  rnd_25_glitzy_grape: '#A20C51',
  rnd_25_glitzy_blue: '#0F1953',
  rnd_25_glitzy_purple: '#3A1F62',
  rnd_25_glitzy_black: '#2B3737',
  rnd_25_party_pink: '#FF9DEC',
  rnd_25_party_blue: '#004EFF',
  rnd_25_party_lilac: '#B07FEA',

  /* RND26 CAMPAIGN COLOURS */
  rnd_26_dark_purple: '#7953E8',
  rnd_26_deep_indigo: '#341A7E',
  rnd_26_light_purple: '#BA9DFC',
  rnd_26_teal: '#036D7C',
  rnd_26_deep_teal: '#024042',
  rnd_26_green: '#7FFB73',
  rnd_26_magenta: '#A7268C',
  rnd_26_deep_magenta: '#601151',
  rnd_26_yellow: '#F8F440',
  rnd_26_vibrant_pink: '#E948D5',
  rnd_26_light_pink: '#FE80EB',

  /* GREYSCALE COLOURS */
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',

  // grey chaos needs sorting...
  grey_stone: '#CEDCDA',
  grey_extra_light: '#f0f0f0',
  grey_for_forms: '#666',
  grey_label: '#5C5C5E',

  grey_1: '#FFFFFF',
  grey_light: '#F4F3F5',
  grey_medium: '#E1E2E3',
  grey_2: '#E1E2E3',
  // TODO: 'grey' is actually 'grey_3'. It is referenced in many places.
  // We need to rename it to 'grey_3' across all references.
  // Until then, we need to keep both names for backwards compatibility.
  // Same story with 'grey_medium' - it should be grey_2, and
  // grey_dark, should be grey_4.
  // For the time being we need both of each. I will provision a separate PR.
  grey: '#969598',
  grey_3: '#969598',
  grey_dark: '#222222',
  grey_4: '#222222',
  grey_4_hover: '#3A3A3A',
  grey_5: '#18181A',

  /* GENERAL COLOURS */
  blue: '#0565D1',
  blue_dark: '#274084',
  // blue_donate is a bad naming?
  blue_donate: '#2042AD',
  blue_donate_interact: '#001A85',
  blue_light: '#BECCF9',
  blue_royal: '#6489FC',

  coral: '#F9686D',
  coral_dark: '#961D35',
  coral_light: '#FFCECE',

  deep_violet: '#2C0230' /** Will be removed  */,
  deep_violet_dark: '#2C0230',
  deep_violet_light: '#3e1c43',

  green: '#49D267',
  green_dark: '#1B651D',
  green_light: '#F4F2F4',

  magenta: '#FC59CE',
  magenta_dark: '#821C5D',
  magenta_light: '#FEB4DC',

  orange: '#FF9635',
  orange_dark: '#984316',
  orange_light: '#FEE3CC',

  purple: '#6F3AAB',
  purple_dark: '#48276E',
  purple_light: '#DFC6F6',

  lavender: '#C180F9',

  // change naming
  error_pink: '#FAE1E2',

  red: '#E52630',
  red_dark: '#890B11',
  // change naming
  red_secondary: '#F9723A',

  teal: '#4ECDBE',
  teal_dark: '#13767C',
  teal_light: '#86E4E9',

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
