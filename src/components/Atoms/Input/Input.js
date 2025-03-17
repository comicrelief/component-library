import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label/Label';
import ErrorText from '../ErrorText/ErrorText';
import {
  InputWrapper,
  InputFieldContainer,
  InputField,
  ErrorIconWrapper,
  Prefix
} from './Input.style';

const Input = React.forwardRef(
  (
    {
      errorMsg = '',
      id,
      label,
      showLabel = true,
      type,
      hasAria = true,
      className = '',
      placeholder = '',
      labelProps = {},
      prefix = '',
      optional = null,
      ...rest
    },
    ref
  ) => (
    <Label
      className={className}
      htmlFor={id}
      label={label}
      hideLabel={!showLabel}
      errorMsg={errorMsg}
      optional={optional}
      {...labelProps}
    >
      <InputWrapper error={Boolean(errorMsg)}>
        {prefix && <Prefix length={prefix.length}>{prefix}</Prefix>}
        <InputFieldContainer>
          <InputField
            id={id}
            type={type}
            placeholder={placeholder}
            error={Boolean(errorMsg)}
            aria-describedby={hasAria ? id : undefined}
            ref={ref}
            prefixLength={prefix.length}
            required={optional === false}
            {...rest}
          />
          {errorMsg && <ErrorIconWrapper />}
        </InputFieldContainer>
      </InputWrapper>
      {errorMsg
        && (
        <ErrorText
          size="sm"
          weight="bold"
          data-test="error-message"
        >
          {errorMsg}
        </ErrorText>
        )}
    </Label>
  )
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  // This prop allows us to _visually_ hide the label if we want (even if we
  //  don't want to display a label, it should be present for screen readers).
  // todo: convert this to 'hideLabel' to make it consistent with other components
  showLabel: PropTypes.bool,
  hasAria: PropTypes.bool,
  id: PropTypes.string.isRequired,
  /** text, email, number, date, search, tel, url, password */
  type: PropTypes.string.isRequired,
  labelProps: PropTypes.objectOf(PropTypes.string),
  // className is needed so that styled(`Input`) will work
  // (as `rest` is not spread on the outermost component)
  className: PropTypes.string,
  prefix: PropTypes.string,
  optional: PropTypes.bool
};

export default Input;
