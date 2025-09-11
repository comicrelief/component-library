import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from '../../../Atoms/Input/Input';
import spacing from '../../../../theme/shared/spacing';

const MoneyBuyButton = styled(Input)`
  display: block;
  input {
    border: none;
    background-color: ${({ theme }) => theme.color('blue_light')};
    color: ${({ theme }) => theme.color('black')};
    font-size: ${({ theme }) => theme.fontSize('l')};
    font-family: ${({ theme }) => theme.fontFamilies('Anton')};
    font-weight: normal;
    border-radius: 0.5rem;
    padding: ${spacing('s')};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    height: auto;
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      font-size: ${({ theme }) => theme.fontSize('xl')};
      padding: ${spacing('m')};
    }
    &:focus {
      border: none;
      outline: none;
      box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color('blue_donate')};
    }
    &:active:focus {
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
    }

    ${({ isSelected }) => isSelected
      && css`
        background-color: ${({ theme }) => theme.color('blue_donate')};
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
        color: ${({ theme }) => theme.color('white')};
        &:focus {
          box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
        }
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
