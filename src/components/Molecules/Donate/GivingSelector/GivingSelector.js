import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../../../Atoms/Input/Input';
import { media } from '../../../../theme/shared/size';

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color('red')};
  margin-top: 2em;

  ${media('medium')} {
    margin-left: 0;
    margin-top: 0;
  }
`;

const MoneyBox = styled(Input)`
  display: inline;
  input {
    font-size: ${({ theme }) => theme.fontSize('s')};
    width: 50%;
    max-width: 100%;
    padding: 0.5em 0;

    ${({ boxBorderColor, isInputMatchBox, isSelected }) =>
      (boxBorderColor === isInputMatchBox || isSelected) &&
      css`
        border-color: ${({ active, theme }) =>
          active === true ? theme.color('red') : theme.color('white')};
        background-color: ${({ active, theme }) =>
          active === true ? theme.color('red') : theme.color('white')};
        color: ${({ active, theme }) =>
          active === true ? theme.color('white') : theme.color('red')};
      `}
  }
`;

const GivingSelector = ({ givingType, changeGivingType, ...rest }) => {
  return (
    <Wrapper>
      <MoneyBox
        {...rest}
        aria-label="Give Once"
        value="Give Once"
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
        aria-label="Give Once"
        value="Monthly"
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
