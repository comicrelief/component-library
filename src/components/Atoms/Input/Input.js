import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import alertIcon from './assets/error-alert-icon.png';
import hideVisually from '../../../theme/shared/hideVisually';

/**
 * Input component
 */
const InputField = styled.input`
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  font-weight: 400;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 13px;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize('m')};
  background-color: ${({ theme }) => theme.color('white')};
  border: 1px solid;
  border-color: ${({ theme, error }) =>
    !error ? theme.color('black') : theme.color('red')};
  box-shadow: none;
  appearance: none;
  color: ${({ theme }) => theme.color('black')};

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
`;

/**
 * Text error component
 */
const ErrorText = styled(Text)`
  display: inline-block;
  color: red;
  font-weight: ${({ weight }) => weight};
  :before {
    position: relative;
    content: '';
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

/**
 * Label text component
 */
const TextLabel = styled(Text)`
  visibility: ${({ showLabel }) => !showLabel && hideVisually};
`;

const Input = ({ errorMsg, id, label, showLabel, type, hasAria, ...rest }) => {
  const error = errorMsg && errorMsg.length > 0;
  return (
    <Label htmlFor={id} {...rest}>
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
      {error && <ErrorText size="sm">{errorMsg}</ErrorText>}
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
  type: PropTypes.string.isRequired
};

Input.defaultProps = {
  showLabel: true,
  hasAria: true,
  placeholder: '',
  errorMsg: ''
};

export default Input;
