import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const BaseText = styled.span`
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};
  font-size: ${({ size, theme }) => theme.fontSize(size)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  font-weight: ${({ weight }) => weight};
`;

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
  weight: PropTypes.string,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
  tag: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

Text.defaultProps = {
  color: 'inherit'
};

export default Text;
