import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';
import fontHelper from '../../../theme/crTheme/fontHelper';

const getLabelColor = ({ theme, errorMsg }) => {
  if (errorMsg) {
    return theme.color('red');
  }
  return theme.color('black');
};

const LabelElement = styled.label`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${getLabelColor};

  ${({ optional, theme }) => optional === true && `
  :after {
    position: absolute;
    top: 0;
    right: 0;
    content: 'Optional';
    font-family: inherit;
    font-size: ${theme.fontSize('s')};
  }`}
`;

const VisibleText = styled(Text)`
  margin-bottom: ${spacing('sm')};

  ${({ theme }) => (css`
    ${fontHelper(theme, 'formFieldLabel')}
  `)};
`;

const HiddenText = styled(Text)`${hideVisually}`;

// eslint-disable-next-line react/prop-types
const LabelText = ({
  label, hideLabel, ...rest
}) => {
  const Component = hideLabel ? HiddenText : VisibleText;
  return React.isValidElement(label)
    ? <Component {...rest}>{label}</Component>
    : <Component {...rest} dangerouslySetInnerHTML={{ __html: label }} />;
};

/**
 * @param children
 * @param label
 * @param hideLabel - Visually hide the label text (without removing it from the document)
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Label = ({
  children = null,
  label,
  hideLabel = false,
  optional = null,
  errorMsg = '',
  ...rest
}) => (
  <LabelElement
    optional={optional}
    errorMsg={errorMsg}
    {...rest}
  >
    <LabelText
      label={label}
      hideLabel={hideLabel}
    />
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
  optional: PropTypes.bool,
  errorMsg: PropTypes.string
};

LabelElement.propTypes = {
  optional: PropTypes.bool,
  errorMsg: PropTypes.string
};

LabelText.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  hideLabel: PropTypes.bool,
  children: PropTypes.node
};

export default Label;
