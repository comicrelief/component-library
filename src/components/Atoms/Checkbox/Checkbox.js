import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import checkBoxIcon from './assets/tick.svg';

const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  font-size: ${({ theme }) => theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  left: 0px;
  width: 24px;
  height: 24px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color('grey')};
  + span {
    margin-right: 12px;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color('white')};
    border: 1px solid ${({ theme }) => theme.color('grey')};
    float: left;
  }
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center;
    background-color: ${({ theme }) => theme.color('red')};
    border-color: ${({ theme }) => theme.color('red')};
    background-size: contain;
  }
  :focus + span {
    border-color: ${({ theme }) => theme.color('red')};
    border-width: 1px;
  }
`;

const Label = styled.label`
  display: flex;
  ${({ hasLabelAsString }) => hasLabelAsString && 'align-items: center;'}
  margin-bottom: 8px;
`;

const Checkbox = React.forwardRef(({
  label, value, children, ...rest
}, ref) => (
  <Label hasLabelAsString={!!label}>
    <StyledCheckboxInput {...rest} value={value} ref={ref} />
    <span />
    {label ? <Text weight="bold">{label}</Text> : children}
  </Label>
));

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node
};

Checkbox.defaultProps = {
  label: undefined,
  children: undefined
};

export default Checkbox;
