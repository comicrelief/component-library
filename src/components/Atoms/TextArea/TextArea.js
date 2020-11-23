import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FieldWrapper from '../FieldWrapper/FieldWrapper';

/**
 * Textarea component
 */
const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 10px 0;
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

const TextArea = React.forwardRef(({
  id, label, hideLabel, errorMsg, rows, className, ...rest
}, ref) => (
  <FieldWrapper
    htmlFor={id}
    label={label}
    hideLabel={hideLabel}
    errorMsg={errorMsg}
    className={className}
  >
    <StyledTextArea
      {...rest}
      rows={rows}
      error={!!errorMsg}
      aria-describedby={id}
      ref={ref}
    />
  </FieldWrapper>
));

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  hideLabel: PropTypes.bool,
  // className is needed so that styled(`TextArea`) will work
  // (as `rest` is not spread on the outermost component)
  className: PropTypes.string
};

TextArea.defaultProps = {
  rows: 4,
  placeholder: '',
  errorMsg: undefined,
  hideLabel: false,
  className: ''
};

export default TextArea;
