import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';
import alertIcon from '../Input/assets/error-alert-icon.png';

const ErrorIcon = styled.span`
  display: inline-block;
  padding: ${spacing('m')} ${spacing('md')} ${spacing('md')};
  width: 100%;
  z-index: 1;
  margin-top: -10px;
  background-color: ${({ theme }) => theme.color('error_pink')};
  border-radius: ${spacing('sm')};
  font-weight: bold;

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

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 290px;
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
