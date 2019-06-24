import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';

const StyledInput = styled.input`
  background-color: white;
  outline: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize('m')};
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ color, theme, error }) =>
    color && !error ? theme.color(color) : 'red'};
  margin: 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = ({ props, label, type, value, changed, ...rest }) => {
  return (
    <Label>
      <Text weight="bold">{label}</Text>
      <StyledInput type={type} {...rest} value={value} />
    </Label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  /** text, email, number */
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string
};

export default Input;
