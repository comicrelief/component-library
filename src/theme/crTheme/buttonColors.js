import color from './colors';
import { css } from 'styled-components';

const buttonColors = {
  white: {
    background: color('white'),
    color: color('black'),
    hoverBackground: color('black'),
    hoverColor: color('white')
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
