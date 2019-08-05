import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacings';

const Section = styled.section`
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  padding: ${spacing('xl')};
  background: ${({ theme, bgColor }) => theme.color(bgColor)};
  color: ${({ theme }) => theme.color('deep_violet')};

  ${({ position }) =>
    (position === 'top' &&
      css`
        align-items: flex-start;
      `) ||
    (position === 'center' &&
      css`
        align-items: center;
      `) ||
    (position === 'bottom' &&
      css`
        align-items: flex-end;
      `)}
  p {
    font-size: ${({ theme }) => theme.fontSize('m')};
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
  a {
    display: inline-block;
    padding: 11px 17px;
    @media ${({ theme }) => theme.breakpoint('large')} {
      padding: 16px 30px;
    }
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    border-radius: 30px;
    cursor: point;
    color: ${({ theme }) => theme.color('deep_violet')};
    background-color: ${({ bgColor, theme }) =>
      bgColor ? theme.color('grey_light') : theme.color('white')};
    ${({ bgColor, theme }) =>
      (bgColor === 'red' &&
        css`
          :hover {
            background: ${theme.color('teal')};
          }
        `) ||
      (bgColor === 'black' &&
        css`
          :hover {
            background: ${theme.color('teal')};
          }
        `) ||
      (bgColor === 'grey' &&
        css`
          :hover {
            background: ${theme.color('teal')};
          }
        `) ||
      (bgColor === 'green' &&
        css`
          :hover {
            background: ${theme.color('green_light')};
          }
        `) ||
      (bgColor === 'deep_violet' &&
        css`
          color: ${theme.color('deep_violet')};
          :hover {
            background: ${theme.color('grey')};
          }
        `)};
  }
`;

export { Section, CopyWrapper };
