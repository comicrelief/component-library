import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import ErrorText from '../ErrorText/ErrorText';
import hideVisually from '../../../theme/shared/hideVisually';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

// This seems to get a decent approximation of the necessary width (without resorting to measuring
//  the element with JS.)
const getPrefixWidth = prefixLength => `calc(${spacing('m')} + (${prefixLength} * ${spacing('sm')}))`;

/**
 * Input component
 */
const InputField = styled.input`${({ theme, error, prefixLength }) => `
  font-weight: normal;
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
  border-radius: 0.5rem;
  font-size: inherit;

  :focus {
    border: 1px solid ${theme.color('grey_for_forms')};
  }

  :focus::placeholder {
    color: ${theme.color('grey_for_forms')};
  }

  @media ${theme.breakpoint('small')} {
    max-width: 290px;
  }
`}`;

/**
 * Label component
 */
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${({ theme }) => theme.color('grey_label')};
`;

/**
 * Label text component
 */
const TextLabel = styled(Text)`
  visibility: ${({ showLabel }) => !showLabel && hideVisually};
  position: relative;

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 290px;
  }

  ${({ isRequired }) => !isRequired && `
  :after {
    position: absolute;
    top: 0;
    right: 0;
    content: 'Optional';
    font-weight: 400;
    font-size: 15px;
    line-height: 19.5px;
  }`}
`;

const InputWrapper = styled.div`
  margin-top: ${spacing('sm')};
  position: relative;
  font-size: ${({ theme }) => theme.fontSize('m')};
`;

const Prefix = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  ${zIndex('low')}
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
      errorMsg,
      id,
      label,
      showLabel,
      type,
      hasAria,
      className,
      labelProps,
      prefix,
      isRequired,
      ...rest
    },
    ref
  ) => (
    <Label htmlFor={id} className={className} {...labelProps}>
      <TextLabel showLabel={showLabel} weight="bold" isRequired={isRequired} dangerouslySetInnerHTML={{ __html: label }} />
      <InputWrapper>
        {prefix ? <Prefix length={prefix.length}>{prefix}</Prefix> : ''}
        <InputField
          id={id}
          type={type}
          {...rest}
          error={!!errorMsg}
          aria-describedby={hasAria ? id : undefined}
          ref={ref}
          prefixLength={prefix.length}
          required={isRequired}
        />
      </InputWrapper>
      {errorMsg && (
        <ErrorText size="sm" data-test="error-message">
          {errorMsg}
        </ErrorText>
      )}
    </Label>
  )
);

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
  className: PropTypes.string,
  prefix: PropTypes.string,
  isRequired: PropTypes.bool
};

Input.defaultProps = {
  showLabel: true,
  hasAria: true,
  placeholder: '',
  errorMsg: '',
  labelProps: {},
  className: '',
  prefix: '',
  isRequired: false
};

export default Input;
