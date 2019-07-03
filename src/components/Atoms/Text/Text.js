import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Text component
 */
export const BaseText = styled.span`
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};
  font-size: ${({ size, theme }) => theme.fontSize(size)};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-weight: ${({ weight }) => weight};
`;

/** Text renders different elements based on the `tag` prop */
const Text = ({ tag, children, weight, ...rest }) => (
  <BaseText {...rest} as={tag} weight={weight}>
    {children}
  </BaseText>
);

Text.defaultProps = {
  tag: 'span',
  weight: 'normal',
  uppercase: false,
  size: 's'
};

Text.propTypes = {
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
  children: PropTypes.string.isRequired
};

Text.defaultProps = {
  color: 'inherit'
};

export default Text;
