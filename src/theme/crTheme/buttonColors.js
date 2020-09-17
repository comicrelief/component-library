import { css } from 'styled-components';
import color from './colors';

const buttonColors = {
  black: {
    background: color('grey_dark'),
    color: color('white'),
    hoverBackground: color('grey'),
    hoverColor: color('white')
  },
  blue: {
    background: color('blue'),
    color: color('white'),
    hoverBackground: color('blue_dark'),
    hoverColor: color('white')
  },
  blue_dark: {
    background: '#2042AD',
    color: color('white'),
    hoverBackground: color('blue_dark'),
    hoverColor: color('white')
  },
  blue_light: {
    background: color('blue_light'),
    color: color('black'),
    hoverBackground: color('blue_dark'),
    hoverColor: color('white')
  },
  coral: {
    background: color('coral'),
    color: color('black'),
    hoverBackground: color('coral_light'),
    hoverColor: color('black')
  },
  coral_dark: {
    background: color('coral_dark'),
    color: color('white'),
    hoverBackground: color('coral'),
    hoverColor: color('black')
  },
  coral_light: {
    background: color('coral_light'),
    color: color('black'),
    hoverBackground: color('coral_dark'),
    hoverColor: color('white')
  },
  green: {
    background: color('green'),
    color: color('black'),
    hoverBackground: color('green_light'),
    hoverColor: color('black')
  },
  green_dark: {
    background: color('green_dark'),
    color: color('white'),
    hoverBackground: color('green'),
    hoverColor: color('black')
  },
  green_light: {
    background: color('green_light'),
    color: color('black'),
    hoverBackground: color('green_dark'),
    hoverColor: color('white')
  },
  grey: {
    background: color('grey'),
    color: color('black'),
    hoverBackground: color('grey_light'),
    hoverColor: color('black')
  },
  grey_dark: {
    background: color('grey_dark'),
    color: color('white'),
    hoverBackground: color('grey'),
    hoverColor: color('black')
  },
  grey_light: {
    background: color('grey_light'),
    color: color('black'),
    hoverBackground: color('grey_dark'),
    hoverColor: color('white')
  },
  magenta: {
    background: color('magenta'),
    color: color('black'),
    hoverBackground: color('magenta_light'),
    hoverColor: color('black')
  },
  magenta_dark: {
    background: color('magenta_dark'),
    color: color('white'),
    hoverBackground: color('magenta'),
    hoverColor: color('black')
  },
  magenta_light: {
    background: color('magenta_light'),
    color: color('black'),
    hoverBackground: color('magenta_dark'),
    hoverColor: color('white')
  },
  orange: {
    background: color('orange'),
    color: color('black'),
    hoverBackground: color('orange_light'),
    hoverColor: color('black')
  },
  orange_dark: {
    background: color('orange_dark'),
    color: color('white'),
    hoverBackground: color('orange'),
    hoverColor: color('black')
  },
  orange_light: {
    background: color('orange_light'),
    color: color('black'),
    hoverBackground: color('orange_dark'),
    hoverColor: color('white')
  },
  purple: {
    background: color('purple'),
    color: color('white'),
    hoverBackground: color('purple_dark'),
    hoverColor: color('white')
  },
  purple_dark: {
    background: color('purple_dark'),
    color: color('white'),
    hoverBackground: color('purple'),
    hoverColor: color('white')
  },
  purple_light: {
    background: color('purple_light'),
    color: color('black'),
    hoverBackground: color('purple_dark'),
    hoverColor: color('white')
  },
  red: {
    background: color('red'),
    color: color('white'),
    hoverBackground: color('red_dark'),
    hoverColor: color('white')
  },
  teal: {
    background: color('teal'),
    color: color('black'),
    hoverBackground: color('teal_light'),
    hoverColor: color('black')
  },
  teal_dark: {
    background: color('teal_dark'),
    color: color('white'),
    hoverBackground: color('teal'),
    hoverColor: color('black')
  },
  teal_light: {
    background: color('teal_light'),
    color: color('black'),
    hoverBackground: color('teal_dark'),
    hoverColor: color('white')
  },
  transparent: {
    background: 'rgba(255, 255, 255, 0.5)',
    color: 'inherit',
    hoverBackground: 'rgba(255, 255, 255, 0.7)',
    hoverColor: 'inherit'
  },
  white: {
    background: color('white'),
    color: color('black'),
    hoverBackground: color('grey'),
    hoverColor: color('black')
  },
  yellow: {
    background: color('yellow'),
    color: color('black'),
    hoverBackground: color('yellow_light'),
    hoverColor: color('black')
  },
  yellow_dark: {
    background: color('yellow_dark'),
    color: color('white'),
    hoverBackground: color('yellow'),
    hoverColor: color('black')
  },
  yellow_light: {
    background: color('yellow_light'),
    color: color('black'),
    hoverBackground: color('yellow_dark'),
    hoverColor: color('white')
  }
};

export default colorName => {
  let style = 'inherit';
  if (colorName) {
    style = css`
      background-color: ${buttonColors[colorName].background};
      color: ${buttonColors[colorName].color};
      :hover {
        background-color: ${buttonColors[colorName].hoverBackground};
        color: ${buttonColors[colorName].hoverColor};
      }
    `;
  }
  return style;
};
