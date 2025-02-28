import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';

const ErrorIcon = styled.span`
  display: inline-block;
  padding: ${spacing('m')} ${spacing('md')} ${spacing('md')};
  width: 100%;
  z-index: 1;
  margin-top: -10px;
  border-radius: ${spacing('sm')};
  font-weight: bold;
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
