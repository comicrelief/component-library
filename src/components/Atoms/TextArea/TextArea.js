import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import alertIcon from './assets/error-alert-icon.png';

/**
 * Textarea component
 */
const StyledInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  min-height: 65px;
  padding: 12px 50px 14px 10px;
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

const TextArea = ({ id, label, value, errorMsg, ...rest }) => {
  const error = errorMsg && errorMsg.length > 0 ? true : false;
  return (
    <Label>
      <Text weight="bold">{label}</Text>
      <StyledInput
        {...rest}
        value={value}
        error={error ? 1 : 0}
        aria-describedby={id}
      />
      {error && <ErrorText size="sm"> {errorMsg} </ErrorText>}
    </Label>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
  id: PropTypes.string
};

export default TextArea;
