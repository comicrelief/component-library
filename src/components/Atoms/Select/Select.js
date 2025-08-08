import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../Label/Label';
import ErrorText from '../ErrorText/ErrorText';
import dropDownIcon from './assets/drop-down-dark-purple.svg';
import spacing from '../../../theme/shared/spacing';

const StyledSelect = styled.select`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize('m')};
  display: block;
  box-sizing: border-box;
  padding: 0 ${spacing('m')};
  padding-right: ${spacing('xl')};
  margin: 0;
  position: relative;
  height: 48px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  background: ${({ theme }) => theme.color('grey_light')} url(${dropDownIcon})
    calc(100% - 1.5rem) 14px/20px 1.5rem no-repeat;
  border: 1px solid;
  border-color: ${({ theme, error }) => (error ? theme.color('red') : theme.color('grey_medium'))};
  box-shadow: none;
  appearance: none;
  color: ${({ theme, greyDescription, hasValue }) => (greyDescription && !hasValue ? 'grey' : theme.color('black'))};
  border-radius: 0.5rem;
  cursor: pointer;
  :focus {
    border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    max-width: 290px;
  }
`;

const Select = React.forwardRef(
  (
    {
      errorMsg,
      description,
      label,
      options,
      hideLabel = false,
      defaultValue = '',
      onChange = null,
      greyDescription = false,
      className = '',
      optional = false,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = useState('');

    return (
      <Label
        label={label}
        hideLabel={hideLabel}
        errorMsg={errorMsg}
        className={className}
        optional={optional}
      >
        <StyledSelect
          onChange={e => {
            setValue(e.currentTarget.value);
            if (onChange) {
              onChange(e);
            }
          }}
          {...rest}
          error={errorMsg}
          defaultValue={defaultValue}
          required={optional === false}
          hasValue={!!value}
          greyDescription={greyDescription}
          ref={ref}
        >
          <option disabled value="">
            {description}
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </StyledSelect>
        {errorMsg && <ErrorText size="error" weight="bold" data-test="error-message">{errorMsg}</ErrorText>}
      </Label>
    );
  }
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  errorMsg: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      displayValue: PropTypes.string.isRequired
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  greyDescription: PropTypes.bool,
  // className is needed so that styled(`Select`) will work
  // (as `rest` is not spread on the outermost component)
  className: PropTypes.string,
  optional: PropTypes.bool
};

export default Select;
