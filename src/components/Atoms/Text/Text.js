import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/** Text component */
export const BaseText = styled.span`
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};
  font-size: ${({ size, theme }) => theme.fontSize(size)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  ${({ weight }) => (weight ? `font-weight: ${weight}` : null)};
  ${({ height }) => (height ? `line-height: ${height}` : null)};
  font-family: ${({ family, theme }) =>
    family ? theme.fontFamilies(family) : 'inherit'};
`;

/** Text renders different elements based on the `tag` prop
 *  Weight is checked for existence to prevent overriding the tag's css
 */
const Text = ({ tag, children, height, weight, family, ...rest }) => (
  <BaseText {...rest} as={tag} height={height} weight={weight} family={family}>
    {children}
  </BaseText>
);

Text.defaultProps = {
  family: 'Montserrat',
  tag: 'span',
  weight: undefined,
  height: undefined,
  uppercase: false,
  size: 's',
  color: 'inherit'
};

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
  ]).isRequired
};

export default Text;
