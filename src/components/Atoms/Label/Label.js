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
  ...rest
}) => (
  <LabelElement {...rest}>
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
  children: PropTypes.node
};

Label.defaultProps = {
  hideLabel: false,
  children: null
};

export default Label;
