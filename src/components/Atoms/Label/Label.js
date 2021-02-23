import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';

const LabelElement = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color('grey_label')};
  position: relative;
`;
const VisibleText = styled(Text).attrs({ weight: 'bold' })`
  margin-bottom: ${spacing('sm')};

  ${({ isRequired }) => isRequired === false && `
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
const HiddenText = styled(Text)`${hideVisually}`;

// eslint-disable-next-line react/prop-types
const LabelText = ({
  label, hideLabel, isRequired, ...rest
}) => {
  const Component = hideLabel ? HiddenText : VisibleText;
  return React.isValidElement(label)
    ? <Component isRequired={isRequired} {...rest}>{label}</Component>
    : <Component isRequired={isRequired} {...rest} dangerouslySetInnerHTML={{ __html: label }} />;
};

/**
 * @param children
 * @param label
 * @param hideLabel - Visually hide the label text (without removing it from the document)
 * @param required - Append an 'optional' flag with CSS
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Label = ({
  children,
  label,
  hideLabel,
  isRequired,
  ...rest
}) => (
  <LabelElement {...rest}>
    <LabelText label={label} hideLabel={hideLabel} isRequired={isRequired} />
    {children}
  </LabelElement>
);

Label.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  hideLabel: PropTypes.bool,
  children: PropTypes.node,
  isRequired: PropTypes.bool
};

Label.defaultProps = {
  hideLabel: false,
  children: null,
  isRequired: false
};

LabelText.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  hideLabel: PropTypes.bool,
  children: PropTypes.node,
  isRequired: PropTypes.bool
};

LabelText.defaultProps = {
  hideLabel: false,
  children: null,
  isRequired: false
};
export default Label;
