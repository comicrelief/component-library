import { css } from 'styled-components';

const indexes = {
  base: 0,
  low: 1,
  medium: 2,
  high: 3
};

const zIndex = index => {
  let value = indexes.base;

  if (index) {
    value = indexes[index];
  }

  return css`
    z-index: ${value};
  `;
};

export default zIndex;
