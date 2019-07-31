import { css } from 'styled-components';
import color from './colors';

const buttonColors = {
  white: {
    background: color('white'),
    color: color('black'),
    hoverBackground: color('black'),
    hoverColor: color('white')
  },
  black: {
    background: color('black'),
    color: color('white'),
    hoverBackground: color('white'),
    hoverColor: color('black')
  },
  red: {
    background: color('red'),
    color: color('white'),
    hoverBackground: color('coral_light'),
    hoverColor: color('black')
  },
  grey: {
    background: color('grey'),
    color: color('black'),
    hoverBackground: color('grey_light'),
    hoverColor: color('black')
  },
  yellow: {
    background: color('yellow'),
    color: color('black'),
    hoverBackground: color('yellow_light'),
    hoverColor: color('black')
  },
  green: {
    background: color('green'),
    color: color('black'),
    hoverBackground: color('green_light'),
    hoverColor: color('black')
  },
  blue: {
    background: color('blue'),
    color: color('black'),
    hoverBackground: color('blue_light'),
    hoverColor: color('black')
  },
  orange: {
    background: color('orange'),
    color: color('black'),
    hoverBackground: color('orange_light'),
    hoverColor: color('black')
  },
  orange: {
    background: color('teal'),
    color: color('black'),
    hoverBackground: color('teal_light'),
    hoverColor: color('black')
  }
};

export default colorName => {
  console.log('colorName', colorName);
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
