import { css } from 'styled-components';
import color from './colors';

const linkStyles = {
  standard: {
    color: color('black'),
    weight: 'normal',
    hoverColor: color('black')
  },
  standard_white: {
    color: color('white'),
    weight: 'normal',
    hoverColor: color('white')
  }
};

export default styleName => {
  let style = css`
    color: ${color('black')};
    font-weight: normal;
    :hover {
      color: inherit;
      font-weight: 700;
    }
  `;

  if (styleName) {
    style = css`
      color: ${linkStyles[styleName].color};
      font-weight: ${linkStyles[styleName].weight};
      :hover,
      :focus {
        color: ${linkStyles[styleName].hoverColor};
        font-weight: ${linkStyles[styleName].hoverWeight};
        text-decoration: none;
      }
    `;
  }

  return style;
};
