import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';

const StyledInput = styled.input`
  background-color: ${({ color, theme }) =>
    color ? theme.color(color) : theme.color('white')};
  font-size: ${({ theme }) => theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
`;

const Label = styled.label`
  display: flex;
  margin-bottom: 8px;
`;

const RadioButton = ({ props, label, value, changed, ...rest }) => {
  return (
    <Label>
      <StyledInput type="radio" {...rest} value={value} />
      <Text weight="bold">{label}</Text>
    </Label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string
};

export default RadioButton;
