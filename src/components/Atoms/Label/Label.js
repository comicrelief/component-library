import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';
import hideVisually from '../../../theme/shared/hideVisually';

const LabelElement = styled.label`
  position: relative; 
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color('grey_label')};
  width: 100%;
  
  ${({ optional, theme }) => optional === true && `
  :after {
    position: absolute;
    top: 0;
    right: 0;
    content: 'Optional';
    font-family: ${theme.fontFamilies(theme.font.regular)};
    font-size: ${theme.fontSize('s')};
  }`}
`;
const VisibleText = styled(Text).attrs({ weight: 'bold' })`
  margin-bottom: ${spacing('sm')};
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
  children,
  label,
  hideLabel,
  optional,
  ...rest
}) => (
  <LabelElement {...rest} optional={optional}>
    <LabelText label={label} hideLabel={hideLabel} />
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
  optional: PropTypes.bool
};

Label.defaultProps = {
  hideLabel: false,
  children: null,
  optional: null
};

LabelText.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  hideLabel: PropTypes.bool,
  children: PropTypes.node
};

LabelText.defaultProps = {
  hideLabel: false,
  children: null
};
export default Label;
