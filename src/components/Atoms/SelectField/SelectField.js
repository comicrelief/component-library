import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';

const StyledInput = styled.select`
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
  border-color: ${({ color, theme }) => theme.color(color)};
  margin: 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Select = ({ label, options }) => {
  return (
    <Label>
      <Text weight="bold">{label}</Text>
      <StyledInput>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </StyledInput>
    </Label>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  /** options */
  options: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string
};

export default Select;
