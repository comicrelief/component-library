import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import dropDownIcon from './assets/drop-down-dark-purple.svg';
import alertIcon from './assets/error-alert-icon.png';

const StyledInput = styled.select`
  background-color: ${({ color, theme }) =>
    color ? theme.color(color) : theme.color('white')};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize('m')};
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, error }) =>
    !error ? theme.color('black') : theme.color('red')};
  margin: 0;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 50px 8px 10px;
  height: 50px;
  font-weight: 300;
  background: transparent url(${dropDownIcon}) calc(100% - 20px) 18px/20px 20px
    no-repeat;
  cursor: pointer;
  margin-bottom: 0;
  cursor: pointer;
  appearance: none;
  box-shadow: border-box;
  border-radius: 0;
  :focus {
    border: 1px solid ${({ theme }) => theme.color('grey')};
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 290px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

/**
 * Text error component
 */
const ErrorText = styled(Text)`
  display: inline-block;
  color: ${({ theme }) => theme.color('red')};
  font-weight: ${({ weight }) => weight};
  margin-top: ${({ theme }) => theme.fontSize('xxs')};
  :before {
    position: relative;
    content: '';
    display: inline-block;
    top: 2px;
    vertical-align: middle;
    margin-right: 6px;
    background: url(${alertIcon}) left 0/100% no-repeat;
    width: 18px;
    height: 19px;
    display: inline-block;
    vertical-align: top;
    color: ${({ theme }) => theme.color('red')};
  }
`;

const Select = ({ errorMsg, description, label, options, ...rest }) => {
  const error = errorMsg && errorMsg.length > 0;
  return (
    <Label>
      <Text weight="bold">{label}</Text>
      <StyledInput error={error ? 1 : 0}>
        <option disabled>{description}</option>
        {options.map(option => (
          <option key={option.value} value={option.value} {...rest}>
            {option.displayValue}
          </option>
        ))}
      </StyledInput>
      {error && <ErrorText size="sm">{errorMsg}</ErrorText>}
    </Label>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
  /** options */
  options: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string.isRequired
};

export default Select;
