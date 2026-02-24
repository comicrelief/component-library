import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from '../../../Atoms/Input/Input';
import spacing from '../../../../theme/shared/spacing';
import defaultBoxShadow from '../../../../theme/shared/boxShadows';

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
    ${defaultBoxShadow()}
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
      ${defaultBoxShadow(true)}
    }

    ${({ isSelected }) => isSelected
      && css`
        background-color: ${({ theme }) => theme.color('blue_donate')};
        ${defaultBoxShadow(true)}
        color: ${({ theme }) => theme.color('white')};
        &:focus {
          ${defaultBoxShadow(true)}
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
