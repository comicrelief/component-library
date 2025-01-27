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
`;

const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  /* This input is not visible as it is set to opacity: 0 */
  width: 0;
  height: 0;
  margin: 0;
  /* This span is actually the visual square checkbox you see */
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
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center;
    background-size: contain;
    background-color: ${({ theme, checkboxBgChecked }) => (checkboxBgChecked ? theme.color(checkboxBgChecked) : theme.color('white'))};
    border: 1px solid ${({ theme, checkboxBorderChecked }) => (checkboxBorderChecked ? theme.color(checkboxBorderChecked) : theme.color('grey'))};
  }
  :focus + span {
    border: 1px solid ${({ theme, checkboxBorderChecked }) => (checkboxBorderChecked ? theme.color(checkboxBorderChecked) : theme.color('red'))};
  }
`;

const Checkbox = React.forwardRef(({
  label = undefined,
  value,
  children = undefined,
  checkboxBg,
  checkboxBorder,
  checkboxBgChecked,
  checkboxBorderChecked,
  ...rest
}, ref) => (
  <Label hasLabelAsString={!!label}>
    <StyledCheckboxInput
      {...rest}
      value={value}
      ref={ref}
      checkboxBg={checkboxBg}
      checkboxBorder={checkboxBorder}
      checkboxBgChecked={checkboxBgChecked}
      checkboxBorderChecked={checkboxBorderChecked}
    />
    <span />
    {label ? <Text weight="bold">{label}</Text> : children}
  </Label>
));

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  checkboxBg: PropTypes.string,
  checkboxBorder: PropTypes.string,
  checkboxBgChecked: PropTypes.string,
  checkboxBorderChecked: PropTypes.string
};

export default Checkbox;
