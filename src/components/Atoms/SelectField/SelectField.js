import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import hideVisually from '../../../theme/shared/hideVisually';
import dropDownIcon from './assets/drop-down-dark-purple.svg';
import alertIcon from './assets/error-alert-icon.png';
import spacing from '../../../theme/shared/spacing';

const StyledInput = styled.select`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize('m')};
  display: block;
  box-sizing: border-box;
  padding: 0.8rem ${spacing('m')};
  padding-right: ${spacing('xl')};
  margin: 0;
  position: relative;
  height: 48px;
  font-weight: 400;
  background: ${({ theme }) => theme.color('grey_light')} url(${dropDownIcon})
    calc(100% - 1.5rem) 14px/20px 1.5rem no-repeat;
  border: 1px solid;
  border-color: ${({ theme, error }) =>
    !error ? theme.color('grey_medium') : theme.color('red')};
  box-shadow: none;
  appearance: none;
  color: ${({ theme }) => theme.color('black')};
  border-radius: 0.5rem;
  margin-top: ${spacing('sm')};
  cursor: pointer;
  :focus {
    border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 290px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${({ theme }) => theme.color('grey')};
`;

const LabelText = styled(Text)`
  ${({ hideLabel }) => hideLabel && hideVisually}
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

const Select = ({
  errorMsg,
  description,
  label,
  options,
  hideLabel,
  ...rest
}) => {
  const error = errorMsg && errorMsg.length > 0;
  return (
    <Label>
      <LabelText hideLabel={hideLabel} weight="bold">
        {label}
      </LabelText>
      <StyledInput {...rest} error={error ? 1 : 0}>
        <option disabled>{description}</option>
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={option.defaultValue}
          >
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
  hideLabel: PropTypes.bool,
  errorMsg: PropTypes.string.isRequired,
  /** options */
  options: PropTypes.instanceOf(Array).isRequired,
  description: PropTypes.string.isRequired
};

Select.defaultProps = {
  hideLabel: false
};

export default Select;
