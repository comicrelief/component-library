import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import ErrorText from '../ErrorText/ErrorText';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color('grey_label')};
`;
const VisibleText = styled(Text).attrs({ weight: 'bold' })`
  margin-bottom: ${spacing('sm')}
`;
const HiddenText = styled(Text)`${hideVisually}`;

// eslint-disable-next-line react/prop-types
const LabelText = ({ label, hideLabel, ...rest }) => {
  const Component = hideLabel ? HiddenText : VisibleText;
  return React.isValidElement(label)
    ? <Component {...rest}>{label}</Component>
    : <Component {...rest} dangerouslySetInnerHTML={{ __html: label }} />;
};

/**
 * A wrapper that provides consistent label and error message styling for
 *  different types of field/form control (e.g. input, textarea, select)
 *
 * @param children - Should contain a field/form control of some kind.
 * @param label
 * @param hideLabel - Visually hide the label (without removing it from the document)
 * @param errorMsg
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const FieldWrapper = ({
  children,
  label,
  hideLabel,
  errorMsg,
  ...rest
}) => (
  <Label {...rest}>
    <LabelText label={label} hideLabel={hideLabel} />
    {children}
    {errorMsg && <ErrorText size="sm" weight="bold" data-test="error-message">{errorMsg}</ErrorText>}
  </Label>
);

FieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  errorMsg: PropTypes.string,
  hideLabel: PropTypes.bool
};

FieldWrapper.defaultProps = {
  errorMsg: undefined,
  hideLabel: false
};

export default FieldWrapper;
