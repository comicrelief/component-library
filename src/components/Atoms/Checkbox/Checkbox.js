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
    background-color: ${({ theme, checkboxBackground }) => (checkboxBackground
    ? theme.color(checkboxBackground)
    : theme.color('white'))
};
    border: 1px solid ${({ theme }) => theme.color('grey')};
    float: left;
    flex-shrink: 0;
  }
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center;
    background-color: ${({ theme }) => theme.color('red')};
    border-color: ${({ theme }) => theme.color('red')};
    background-size: contain;
  }
  :focus + span {
    border-color: ${({ theme, checkboxBorderChecked }) => theme.color(checkboxBorderChecked)};
    border-width: 1px;
  }
`;

const Checkbox = React.forwardRef(({
  label = undefined,
  value,
  children = undefined,
  checkboxBackground,
  checkboxBorder,
  checkboxBackgroundChecked,
  checkboxBorderChecked,
  ...rest
}, ref) => (
  <Label hasLabelAsString={!!label}>
    <StyledCheckboxInput
      {...rest}
      value={value}
      ref={ref}
      checkboxBackground={checkboxBackground}
      checkboxBorder={checkboxBorder}
      checkboxBackgroundChecked={checkboxBackgroundChecked}
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
  checkboxBackground: PropTypes.string,
  checkboxBorder: PropTypes.string,
  checkboxBackgroundChecked: PropTypes.string,
  checkboxBorderChecked: PropTypes.string
};

export default Checkbox;
