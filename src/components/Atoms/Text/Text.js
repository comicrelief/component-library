import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Text component
 */
export const BaseText = styled.span`
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};
  font-size: ${({ size, theme }) => theme.fontSize(size)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family, theme }) =>
    family ? theme.fontFamilies(family) : 'inherit'};
`;

/** Text renders different elements based on the `tag` prop */
const Text = ({ tag, children, weight, family, ...rest }) => (
  <BaseText {...rest} as={tag} weight={weight} family={family}>
    {children}
  </BaseText>
);

Text.defaultProps = {
  family: 'Montserrat',
  tag: 'span',
  weight: 'normal',
  uppercase: false,
  size: 's',
  color: 'inherit'
};

Text.propTypes = {
  /** Font family */
  family: PropTypes.string,
  /** Weight of Font */
  weight: PropTypes.string,
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
