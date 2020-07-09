import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import ErrorText from '../ErrorText/ErrorText';
import hideVisually from '../../../theme/shared/hideVisually';
import dropDownIcon from './assets/drop-down-dark-purple.svg';
import spacing from '../../../theme/shared/spacing';

const StyledSelect = styled.select`
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
  border-color: ${({ theme, error }) => (error ? theme.color('red') : theme.color('grey_medium'))};
  box-shadow: none;
  appearance: none;
  color: ${({ theme, greyDescription, hasValue }) => (greyDescription && !hasValue ? 'grey' : theme.color('black'))};
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

const Select = React.forwardRef(
  (
    {
      errorMsg,
      description,
      label,
      options,
      hideLabel,
      defaultValue,
      onChange,
      greyDescription,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = useState('');

    return (
      <Label>
        <LabelText hideLabel={hideLabel} weight="bold">
          {label}
        </LabelText>
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
        {errorMsg && <ErrorText size="sm">{errorMsg}</ErrorText>}
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
  greyDescription: PropTypes.bool
};

Select.defaultProps = {
  hideLabel: false,
  defaultValue: '',
  onChange: null,
  /** If true, the 'description' option, which is initially selected but disabled, will be grey
   *   - like a text input's placeholder */
  greyDescription: false
};

export default Select;
