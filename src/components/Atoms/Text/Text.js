import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

/** Text component */
export const BaseText = styled.span`
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};
  font-size: ${({ size, theme }) => theme.fontSize(size)};
  line-height: ${({ size, theme }) => theme.fontSize(size)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  ${({ weight }) => (weight ? `font-weight: ${weight}` : null)};
  ${({ height }) => (height ? `line-height: ${height}` : null)};
  ${({ as }) => (as === 'p' || as === 'span' ? 'line-height: normal;' : null)};
  font-family: ${({ family, theme }) => (family
    ? theme.fontFamilies(family)
    : theme.fontFamilies(theme.font.regular))};
  ${({ family }) => (family === 'Anton' ? 'letter-spacing: 0.03rem' : null)};
  ${({ size, theme }) => (size === 'super'
    ? css`
          font-size: ${theme.fontSize('xxl')};
          line-height: 3rem;
          @media ${theme.breakpoint('small')} {
            font-size: ${theme.fontSize('big')};
            line-height: ${theme.fontSize('big')};
            margin-bottom: 2rem;
          }
          @media ${theme.breakpoint('medium')} {
            font-size: ${theme.fontSize('super')};
            line-height: ${theme.fontSize('super')};
            margin-bottom: 2rem;
          }
        `
    : null)};
    ${({ mobileColor, theme }) => mobileColor && css`
  @media ${theme.breakpoint('medium')} {
    color: ${theme.color(mobileColor)};
  }
`};
  ${({ size, theme }) => (size === 'm'
    ? css`
      font-size: ${theme.fontSize('s')};
      @media ${theme.breakpoint('small')} {
        font-size: ${theme.fontSize('m')};
      }
    `
    : null)};
`;

/** Text renders different elements based on the `tag` prop
 *  Weight is checked for existence to prevent overriding the tag's css
 */
const Text = ({
  tag, children, height, weight, family, mobileColor, ...rest
}) => (
  <BaseText
    {...rest}
    as={tag}
    height={height}
    weight={weight}
    family={family}
    mobileColor={mobileColor}
  >
    {children}
  </BaseText>
);

Text.propTypes = {
  /** Font family */
  family: PropTypes.string,
  /** Font weight */
  weight: PropTypes.string,
  /** Line height */
  height: PropTypes.string,
  /** Sets text transform to uppercase. */
  uppercase: PropTypes.bool,
  /** Colors */
  color: PropTypes.string,
  /** Tag type */
  tag: PropTypes.string,
  /** Sizes */
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  mobileColor: PropTypes.string
};

Text.defaultProps = {
  family: null,
  tag: 'span',
  weight: undefined,
  height: undefined,
  uppercase: false,
  size: 's',
  color: 'inherit',
  children: undefined,
  mobileColor: null
};

export default Text;
