import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import { checkBoxIcon } from './assets/checkbox-white-tick.png';

const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  left: 0px;
  width: 30px;
  height: 30px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color('grey')};
  + span {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color('white')};
    border: 1px solid ${({ theme }) => theme.color('grey')};
    float: left;
  }
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center;
    background-color: ${({ theme }) => theme.color('purple')};
    background-size: contain;
  }
  :focus + span {
    border-color: ${({ theme }) => theme.color('grey')};
    border-width: 3px;
  }
  :focus + span {
    border-color: ${({ theme }) => theme.color('grey')};
    border-width: 3px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Checkbox = ({ label, value, ...rest }) => {
  return (
    <Label>
      <StyledInput type="checkbox" {...rest} value={value} />
      <span />
      <Text weight="bold">{label}</Text>
    </Label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Checkbox;
