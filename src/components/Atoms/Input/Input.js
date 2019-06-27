import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import alertIcon from './assets/error-alert-icon.png';

/**
 * Input component
 */
const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
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
    border: 1px solid ${({ theme }) => theme.color('grey')};
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder {
    color: transparent;
  } /* FF 4-18 */
  :focus::-moz-placeholder {
    color: transparent;
  } /* FF 19+ */
  :focus:-ms-input-placeholder {
    color: transparent;
  } /* IE 10+ */

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 290px;
  }
`;

/**
 * Label component
 */
const Label = styled.label.attrs(({ id }) => ({
  htmlFor: `${id}`
}))`
  display: flex;
  flex-direction: column;
`;

/**
 * Text error component
 */
const ErrorText = styled(Text)`
  color: red;
  font-weight: ${({ weight }) => (weight ? weight : 'inherit')};
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

const Input = ({ errorMsg, id, label, type, value, changed, ...rest }) => {
  const error = errorMsg && errorMsg.length > 0 ? true : false;
  return (
    <Label htmlFor={id}>
      <Text weight="bold">{label}</Text>
      <StyledInput
        type={type}
        {...rest}
        value={value}
        error={error ? 1 : 0}
        aria-describedby={id}
      />
      {error && <ErrorText size="sm"> {errorMsg} </ErrorText>}
    </Label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  /** text, email, number, date, serach, tel, url, password */
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  /** Colour  */
  color: PropTypes.string,
  bgColor: PropTypes.string
};

export default Input;
