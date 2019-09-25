import { css } from 'styled-components';
import color from './colors';

const buttonColors = {
  black: {
    background: color('black'),
    color: color('white'),
    hoverBackground: color('grey'),
    hoverColor: color('black')
  },
  blue_light: {
    background: color('blue_light'),
    color: color('black'),
    hoverBackground: color('blue_dark'),
    hoverColor: color('white')
  },
  white: {
    background: color('white'),
    color: color('black'),
    hoverBackground: color('grey'),
    hoverColor: color('black')
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
