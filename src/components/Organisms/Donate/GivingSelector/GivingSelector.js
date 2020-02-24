import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from '../../../../theme/shared/size';
import spacing from '../../../../theme/shared/spacing';
import zIndex from '../../../../theme/shared/zIndex';
import hideVisually from '../../../../theme/shared/hideVisually';

const Switch = styled.span`
  width: 50%;
  height: 48px;
  border-radius: 2rem;
  ${zIndex('low')};
  display: block;
  position: absolute;
  transition: left 0.15s ease-out;
  background-color: ${({ theme }) => theme.color('blue')};
  left: 2px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  display: flex;
  margin: ${spacing('md')} 0;
`;

const MoneyBox = styled.div`
  width: 100%;
  padding: 2px;
  position: relative;
  display: flex;
  flex-direction: row;
  margin: ${spacing('md')} 0;
  border-radius: 2rem;
  background: ${({ theme }) => theme.color('blue_light')};
  ${media('small')} {
    width: 450px;
    margin: 0 auto;
  }
  #give-monthly:checked ~ ${Switch} {
    left: calc(50% - 2px);
  }
  input {
    ${hideVisually}
  }
  input:focus:not(:checked) + label {
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color('blue')};
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  font-weight: bold;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-basis: 50%;
  border: none;
  transition: color 0.15s ease-out;
  ${zIndex('medium')};
  cursor: ${({ active }) => (active === true ? 'default' : 'pointer')};
  &:active:focus {
    box-shadow: none;
  }
  &:focus {
    border: none;
    outline: none;
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color('blue')};
  }
  &[for='give-once'] {
    border-radius: 2rem;
    color: ${({ active, theme }) =>
      active === true ? theme.color('white') : theme.color('black')};
  }
  &[for='give-monthly'] {
    border-radius: 2rem;
    color: ${({ active, theme }) =>
      active === true ? theme.color('white') : theme.color('black')};
  }
`;

const GivingSelector = ({ givingType, changeGivingType }) => {
  return (
    <Wrapper>
      <MoneyBox>
        <input
          aria-label="Give once"
          id="give-once"
          value="Give once"
          type="radio"
          label=""
          errorMsg=""
          checked={givingType === 'single'}
          onClick={() => {
            changeGivingType('single');
          }}
        />
        <Label active={givingType === 'single'} for="give-once">
          Give once
        </Label>
        <input
          aria-label="Give monthly"
          id="give-monthly"
          value="Give monthly"
          type="radio"
          label=""
          errorMsg=""
          checked={givingType === 'monthly'}
          onClick={() => {
            changeGivingType('monthly');
          }}
        />
        <Label active={givingType === 'monthly'} for="give-monthly">
          Give monthly
        </Label>
        <Switch />
      </MoneyBox>
    </Wrapper>
  );
};

GivingSelector.propTypes = {
  givingType: PropTypes.string.isRequired,
  changeGivingType: PropTypes.func.isRequired
};

export default GivingSelector;
