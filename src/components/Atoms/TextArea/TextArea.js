import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import ErrorText from '../ErrorText/ErrorText';

/**
 * Textarea component
 */
const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.fontSize('m')};
  background-color: ${({ theme }) => theme.color('white')};
  border: 1px solid;
  border-radius: 0;
  border-color: ${({ theme, error }) => (!error ? theme.color('black') : theme.color('red'))};
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
`;

/**
 * Label component
 */
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const TextArea = React.forwardRef(({
  id, label, errorMsg, rows, ...rest
}, ref) => (
  <Label htmlFor={id}>
    <Text weight="bold">{label}</Text>
    <StyledTextArea
      {...rest}
      rows={rows}
      error={!!errorMsg}
      aria-describedby={id}
      ref={ref}
    />
    {errorMsg && <ErrorText size="sm">{errorMsg}</ErrorText>}
  </Label>
));

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
  rows: PropTypes.number
};

TextArea.defaultProps = {
  rows: 4
};

export default TextArea;
