import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';
import alertIcon from '../Input/assets/error-alert-icon.png';

const ErrorIcon = styled.span`
  display: inline-block;
  margin-top: ${spacing('sm')};
  :before {
    position: relative;
    content: '';
    top: 2px;
    margin-right: 6px;
    background: url(${alertIcon}) left 0/100% no-repeat;
    width: 18px;
    height: 19px;
    display: inline-block;
    vertical-align: top;
    color: ${({ theme }) => theme.color('red')};
  }
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
