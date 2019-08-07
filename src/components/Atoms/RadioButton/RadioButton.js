import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';

/**
 * Input radio component
 */
const StyledInput = styled.input`
  background-color: ${({ color, theme }) =>
    color ? theme.color(color) : theme.color('white')};
  font-size: ${({ theme }) => theme.fontSize('sm')};
  z-index: 1;
  top: 0;
  margin: 5px 10px;
  width: 30px;
  height: 30px;
  opacity: 0;
  left: 0;
  right: 0;
  + span {
    left: 2px;
    border-radius: 30px;
    background-clip: padding-box;
    position: absolute;
    top: 0px;
    width: 30px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  }
  :checked + span {
    background-color: ${({ theme }) => theme.color('purple')};
    border: 1px solid ${({ theme }) => theme.color('purple')};
    :before {
      position: absolute;
      content: '';
      top: 8px;
      left: 0;
      right: 0;
      background-color: ${({ theme }) => theme.color('white')};
      border-radius: 30px;
      width: 12px;
      height: 12px;
      z-index: 1;
      margin: 0 auto;
      opacity: 1;
    }
  }
`;

/**
 * Label component
 */
const Label = styled.label.attrs(({ label }) => ({
  htmlFor: `${label}`
}))`
  display: flex;
  align-items: center;
  position: relative;
`;

const RadioButton = ({ label, name, value, ...rest }) => {
  return (
    <Label htmlFor={label.toLowerCase()}>
      <StyledInput
        type="radio"
        {...rest}
        name={name}
        value={value}
        id={value}
      />
      <span />
      <Text weight="bold">{label}</Text>
    </Label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default RadioButton;
