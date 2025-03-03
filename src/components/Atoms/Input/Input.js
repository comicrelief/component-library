import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import alertIcon from './assets/error-alert-icon-red.svg';
import Label from '../Label/Label';
import ErrorText from '../ErrorText/ErrorText';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

// This seems to get a decent approximation of the necessary width (without resorting to measuring
//  the element with JS)
const getPrefixWidth = prefixLength => `calc(${spacing('m')} + (${prefixLength} * ${spacing('sm')}))`;

const InputField = styled.input`${({ theme, error, prefixLength }) => css`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: ${spacing('md')} ${spacing('m')};
  ${prefixLength > 0 ? `padding-left: ${getPrefixWidth(prefixLength)};` : ''}
  background-color: ${theme.color('grey_light')};
  border: 1px solid;
  border-color: ${error ? theme.color('red') : theme.color('grey_medium')};
  box-shadow: none;
  appearance: none;
  color: ${theme.color('black')};
  border-radius: ${spacing('sm')};
  font-size: inherit;
  z-index: 2;
  font-family: ${theme.fontFamilies(theme.font.regular)};

  :focus {
    border: 1px solid ${theme.color('grey_for_forms')};
  }
`}`;

const InputWrapper = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize('m')};

  ${({ error }) => error && css`
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
      background: url(${alertIcon}) center/contain no-repeat;
      --iconSize: 19px;
      width: var(--iconSize);
      height: var(--iconSize);
      z-index: 3;
    }
  `}

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    max-width: 290px;
  }
`;

const Prefix = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  ${zIndex('high')}
  display: flex;
  height: 100%;
  width: ${({ length }) => getPrefixWidth(length)};
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color('grey_dark')};
  font-weight: 700;
  font-size: inherit;
  margin-left: 2px; // Just doesn't look quite right without this.
`;

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
        <InputField
          id={id}
          type={type}
          placeholder={placeholder}
          error={!!errorMsg}
          aria-describedby={hasAria ? id : undefined}
          ref={ref}
          prefixLength={prefix.length}
          required={optional === false}
          {...rest}
        />
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
