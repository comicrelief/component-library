import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import checkBoxIcon from './assets/tick.svg';

// This label wraps both the input and the span that is the visual square checkbox you see */
const Label = styled.label`
  display: flex;
  ${({ hasLabelAsString }) => hasLabelAsString && 'align-items: center;'}
  margin-bottom: 8px;
  ${({ theme, labelColour }) => labelColour && `color: ${theme.color(labelColour)}`}
`;

const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  /* This input is not visible but needs these long winded styles to remain accessible to screen readers */
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  /* This span is actually the visual square Checkbox you see */
  + span {
    margin-right: 12px;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: ${({ theme, checkboxBg }) => (checkboxBg ? theme.color(checkboxBg) : theme.color('white'))};
    border: 1px solid ${({ theme, checkboxBorder }) => (checkboxBorder ? theme.color(checkboxBorder) : theme.color('grey'))};
    float: left;
    flex-shrink: 0;
  }
  /* Visual checkbox when ticked */
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center;
    background-size: contain;
    background-color: ${({ theme, checkboxBgChecked }) => (checkboxBgChecked ? theme.color(checkboxBgChecked) : theme.color('red'))};
    border: 1px solid ${({ theme, checkboxBorderChecked }) => (checkboxBorderChecked ? theme.color(checkboxBorderChecked) : theme.color('red'))};
  }
  /* Visual checkbox when focused */
  :focus + span {
    border: 1px solid ${({ theme, checkboxBorderFocus }) => (checkboxBorderFocus ? theme.color(checkboxBorderFocus) : theme.color('red'))};
  }
`;

const Checkbox = React.forwardRef(({
  label = undefined,
  value,
  children = undefined,
  labelColour,
  checkboxBg,
  checkboxBorder,
  checkboxBgChecked,
  checkboxBorderChecked,
  checkboxBorderFocus,
  ...rest
}, ref) => (
  <Label
    hasLabelAsString={!!label}
    labelColour={labelColour}
  >
    <StyledCheckboxInput
      {...rest}
      value={value}
      ref={ref}
      checkboxBg={checkboxBg}
      checkboxBorder={checkboxBorder}
      checkboxBgChecked={checkboxBgChecked}
      checkboxBorderChecked={checkboxBorderChecked}
      checkboxBorderFocus={checkboxBorderFocus}
    />
    <span />
    {label ? <Text weight="bold">{label}</Text> : children}
  </Label>
));

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  labelColour: PropTypes.string,
  checkboxBg: PropTypes.string,
  checkboxBorder: PropTypes.string,
  checkboxBgChecked: PropTypes.string,
  checkboxBorderChecked: PropTypes.string,
  checkboxBorderFocus: PropTypes.string
};

export default Checkbox;
