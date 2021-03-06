import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';
import alertIcon from '../Input/assets/CR_Error--red.svg';

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
    top: 1px;
    margin-right: 3px;
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
