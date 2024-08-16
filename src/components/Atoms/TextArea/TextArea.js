import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import Label from '../Label/Label';
import ErrorText from '../ErrorText/ErrorText';

const StyledTextArea = styled.textarea`${({ theme, error }) => css`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: ${spacing('md')} ${spacing('m')};
  font-size: ${theme.fontSize('m')};
  background-color: ${theme.color('grey_light')};
  border: 1px solid;
  border-radius: 0.5rem;
  border-color: ${error ? theme.color('red') : theme.color('grey_medium')};
  box-shadow: none;
  appearance: none;
  color: ${theme.color('black')};
  font-family: ${theme.fontFamilies(theme.font.regular)};
  resize: vertical;

  &:focus {
    border: 1px solid ${theme.color('grey_for_forms')};

    &::placeholder {
      visibility: hidden;
    }
  }
`}`;

const TextArea = React.forwardRef(({
  id, label, placeholder = '', hideLabel = false, errorMsg = undefined, rows = 4, className = '', ...rest
}, ref) => (
  <Label
    htmlFor={id}
    label={label}
    hideLabel={hideLabel}
    errorMsg={errorMsg}
    className={className}
  >
    <StyledTextArea
      {...rest}
      placeholder={placeholder}
      rows={rows}
      error={!!errorMsg}
      aria-describedby={id}
      ref={ref}
    />
    {errorMsg && <ErrorText size="sm" weight="bold" data-test="error-message">{errorMsg}</ErrorText>}
  </Label>
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

export default TextArea;
