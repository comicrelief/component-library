import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../../../Atoms/Input/Input';
import { media } from '../../../../theme/shared/size';
import spacing from '../../../../theme/shared/spacing';
import zIndex from '../../../../theme/shared/zIndex';

const Wrapper = styled.div`
  border-radius: 2rem;
  padding: 4px;
  display: flex;
  flex-direction: column;
  margin: ${spacing('md')} 0;
  ${media('small')} {
    flex-direction: row;
    background: ${({ theme }) => theme.color('blue_light')};
    width: 450px;
    margin: ${spacing('md')} auto 0;
  }
  ${media('medium')} {
    margin: 0 auto;
  }
  label {
    flex-basis: 100%;
    ${media('small')} {
      flex-basis: 50%;
    }
  }
`;

const MoneyBox = styled(Input)`
  input[aria-label='Give once'] {
    border-radius: 2rem;
    margin-bottom: ${spacing('sm')};
    ${media('small')} {
      margin-bottom: 0;
    }
  }
  input[aria-label='Give monthly'] {
    border-radius: 2rem;
  }
  input {
    border: none;
    &:focus {
      border: none;
    }
    width: 100%;
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontSize('s')};
    font-weight: bold;
    min-height: 48px;
    cursor: ${({ active }) => (active === true ? 'default' : 'pointer')};

    ${({ boxBorderColor, isInputMatchBox, isSelected }) =>
      (boxBorderColor === isInputMatchBox || isSelected) &&
      css`
        ${({ active }) =>
          active === true
            ? 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);'
            : null};
        ${({ active }) => (active === true ? zIndex('low') : null)};
        background-color: ${({ active, theme }) =>
          active === true ? theme.color('blue') : theme.color('blue_light')};
        color: ${({ active, theme }) =>
          active === true ? theme.color('white') : theme.color('black')};
      `}
  }
`;

const GivingSelector = ({ givingType, changeGivingType, ...rest }) => {
  return (
    <Wrapper>
      <MoneyBox
        {...rest}
        aria-label="Give once"
        value="Give once"
        type="button"
        label=""
        errorMsg=""
        active={givingType === 'single'}
        onClick={() => {
          changeGivingType('single');
        }}
      />
      <MoneyBox
        {...rest}
        aria-label="Give monthly"
        value="Give monthly"
        type="button"
        label=""
        errorMsg=""
        active={givingType === 'monthly'}
        onClick={() => {
          changeGivingType('monthly');
        }}
      />
    </Wrapper>
  );
};

GivingSelector.propTypes = {
  givingType: PropTypes.string.isRequired,
  changeGivingType: PropTypes.func.isRequired
};

export default GivingSelector;
