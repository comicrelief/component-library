import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import alertIcon from './assets/error-alert-icon.png';
import hideVisually from '../../../theme/shared/hideVisually';
import spacing from '../../../theme/shared/spacing';

/**
 * Input component
 */
const InputField = styled.input`
  font-weight: normal;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: ${spacing('md')} ${spacing('m')};
  font-size: ${({ theme }) => theme.fontSize('m')};
  background-color: ${({ theme }) => theme.color('grey_light')};
  border: 1px solid;
  border-color: ${({ theme, error }) =>
    !error ? theme.color('grey_medium') : theme.color('red')};
  box-shadow: none;
  appearance: none;
  color: ${({ theme }) => theme.color('black')};
  border-radius: 0.5rem;
  margin-top: ${spacing('sm')};

  :focus {
    border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  }

  :focus::placeholder {
    color: ${({ theme }) => theme.color('grey_for_forms')};
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 290px;
  }
`;

/**
 * Label component
 */
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${({ theme }) => theme.color('grey')};
`;

/**
 * Text error component
 */
const ErrorText = styled(Text)`
  display: inline-block;
  color: red;
  font-weight: ${({ weight }) => weight};
  margin-top: ${spacing('sm')};
  :before {
    position: relative;
    content: '';
    top: 2px;
    margin-right: 6px;
    background: url(${alertIcon}) left 0/100% no-repeat;
    width: 18px;
    height: 19px;
    display: inline-block;
    vertical-align: top;
    color: ${({ theme }) => theme.color('red')};
  }
`;

/**
 * Label text component
 */
const TextLabel = styled(Text)`
  visibility: ${({ showLabel }) => !showLabel && hideVisually};
`;

const Input = ({
  errorMsg,
  id,
  label,
  showLabel,
  type,
  hasAria,
  className,
  labelProps,
  ...rest
}) => {
  const error = errorMsg && errorMsg.length > 0;

  return (
    <Label htmlFor={id} className={className} {...labelProps}>
      <TextLabel showLabel={showLabel} weight="bold">
        {label}
      </TextLabel>
      <InputField
        id={id}
        type={type}
        {...rest}
        error={error ? 1 : 0}
        aria-describedby={hasAria ? id : undefined}
      />
      {error && (
        <ErrorText size="sm" data-test="error-message">
          {errorMsg}
        </ErrorText>
      )}
    </Label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  showLabel: PropTypes.bool,
  hasAria: PropTypes.bool,
  id: PropTypes.string.isRequired,
  /** text, email, number, date, serach, tel, url, password */
  type: PropTypes.string.isRequired,
  labelProps: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string
};

Input.defaultProps = {
  showLabel: true,
  hasAria: true,
  placeholder: '',
  errorMsg: '',
  labelProps: {},
  className: ''
};

export default Input;
