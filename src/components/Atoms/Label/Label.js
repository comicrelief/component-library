import React from 'react';
import PropTypes from 'prop-types';

import {
  LabelElement,
  VisibleText,
  HiddenText
} from './Label.style';

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
