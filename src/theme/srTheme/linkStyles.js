import { css } from 'styled-components';
import color from './colors';

const linkStyles = {
  standard: {
    color: color('black'),
    border: `1px solid ${color('black')}`,
    weight: '700',
    paddingBottom: '0.06em',
    hoverColor: color('black'),
    hoverBorder: `2px solid ${color('black')}`
  },
  standard_white: {
    color: color('white'),
    border: `1px solid ${color('white')}`,
    weight: 'normal',
    paddingBottom: '0.06em',
    hoverColor: color('white'),
    hoverBorder: '1px solid trasparent'
  }
};

export default (styleName, underline) => {
  let style = css`
    padding-bottom: 0.06em;
    color: ${color('black')};
    border-bottom: solid 1px;
    border-bottom-color: inherit;
    font-weight: 700;
    :hover {
      color: inherit;
      font-weight: 700;
    }
  `;

  if (styleName) {
    style = css`
      padding: ${linkStyles[styleName].padding};
      color: ${linkStyles[styleName].color};
      border-bottom: ${underline && linkStyles[styleName].border};
      font-weight: ${linkStyles[styleName].weight};
      :hover {
        color: ${linkStyles[styleName].hoverColor};
        border-bottom: ${underline && linkStyles[styleName].hoverBorder};
        font-weight: ${linkStyles[styleName].hoverWeight};
      }
    `;
  }

  return style;
};
