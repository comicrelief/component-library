import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from '../../../Atoms/Input/Input';

const MoneyBuyButton = styled(Input)`
  display: block;
  input {
    border: none;
    background-color: ${({ theme }) => theme.color('white')};
    color: ${({ theme }) => theme.color('black')};
    font-size: ${({ theme }) => theme.fontSize('l')};
    font-family: ${({ theme }) => theme.fontFamilies('Anton')};
    font-weight: normal;
    border-radius: 0.5rem;
    height: 4rem;
    border: 1px solid ${({ theme }) => theme.color('grey')};
    &:focus {
      border: 1px solid ${({ theme }) => theme.color('red')};
    }

    ${({ isSelected }) => isSelected
      && css`
        background-color: ${({ theme }) => theme.color('red')};
        border: 1px solid ${({ theme }) => theme.color('red')};
        color: ${({ theme }) => theme.color('white')};
      `}
  }
`;

const MoneyBuy = ({
  setOtherAmount,
  amount = '10',
  currency = '£',
  description = 'description',
  ...rest
}) => (
  <MoneyBuyButton
    {...rest}
    label={description}
    showLabel={false}
    value={`${currency} ${amount}`}
    type="button"
    errorMsg=""
    onClick={setOtherAmount}
  />
);

MoneyBuy.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  description: PropTypes.string,
  // Function already set doesn't need to be passed as props
  setOtherAmount: PropTypes.func.isRequired
};

export default MoneyBuy;
