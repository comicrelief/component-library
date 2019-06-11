// @flow
import { css } from 'styled-components';

const fontSizes = {
  sm2: '0.69375rem',
  sm1: '0.83125rem',
  s0: '1rem',
  s1: '1.2rem',
  s2: '1.44rem',
  s3: '1.725rem',
  s4: '2.075rem',
  s5: '2.4875rem',
  s6: '2.9875rem',
  s7: '3.58125rem'
};

export const fontSize = size => {
  if (size) {
    return fontSizes[size];
  }
  return '';
};
