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
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.fontSize('m')};
  background-color: ${({ theme }) => theme.color('white')};
  border: 1px solid;
  border-radius: 0;
  border-color: ${({ theme, error }) =>
    !error ? theme.color('black') : theme.color('red')};
  box-shadow: none;
  appearance: none;
  color: ${({ theme }) => theme.color('black')};

  :focus {
    border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
    color: $color;
    font-size: $font-size;
    opacity: 1;
    overflow: visible;
  }
  :focus:-moz-placeholder {
    color: transparent;
    color: $color;
    font-size: $font-size;
    opacity: 1;
    overflow: visible;
  } /* FF 4-18 */
  :focus::-moz-placeholder {
    color: transparent;
    color: $color;
    font-size: $font-size;
    opacity: 1;
    overflow: visible;
  } /* FF 19+ */
  :focus:-ms-input-placeholder {
    color: transparent;
    color: $color;
    font-size: $font-size;
    opacity: 1;
    overflow: visible;
  } /* IE 10+ */

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 100%;
    height: 96px;
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
  font-weight: ${({ weight }) => weight};
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

const TextArea = ({ id, label, errorMsg, ...rest }) => {
  const error = errorMsg && errorMsg.length > 0;
  return (
    <Label>
      <Text weight="bold">{label}</Text>
      <StyledInput {...rest} error={error ? 1 : 0} aria-describedby={id} />
      {error && <ErrorText size="sm">{errorMsg}</ErrorText>}
    </Label>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired
};

export default TextArea;
