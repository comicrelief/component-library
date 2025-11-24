import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';

const ErrorIcon = styled.span`
  display: inline-block;
  width: 100%;
  z-index: 1;
  font-weight: bold;
  margin-top: 0.6rem;
`;

const ErrorText = ({ children, ...rest }) => (
  <Text {...rest} color="red" size="error">
    <ErrorIcon>{children}</ErrorIcon>
  </Text>
);

ErrorText.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorText;
