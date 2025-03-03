import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';

const ErrorIcon = styled.span`
  display: inline-block;
  width: 100%;
  z-index: 1;
  font-weight: bold;
  padding: 0.6rem 0 1rem;
`;

const ErrorText = ({ children, ...rest }) => (
  <Text {...rest} color="red">
    <ErrorIcon>{children}</ErrorIcon>
  </Text>
);

ErrorText.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorText;
