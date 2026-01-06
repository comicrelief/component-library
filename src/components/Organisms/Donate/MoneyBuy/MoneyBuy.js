import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from '../../../Atoms/Input/Input';
import spacing from '../../../../theme/shared/spacing';

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
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      font-size: ${({ theme }) => theme.fontSize('xl')};
      height: 5rem;
    }
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
    aria-label={description}
    value={`${currency} ${amount}`}
    type="button"
    label=""
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
