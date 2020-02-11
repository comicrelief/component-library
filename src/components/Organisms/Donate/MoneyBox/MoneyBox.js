import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from '../../../Atoms/Input/Input';
import spacing from '../../../../theme/shared/spacing';
import { media } from '../../../../theme/shared/size';

const MoneyBox = styled(Input)`
  display: block;
  input {
    border: none;
    background-color: ${({ theme }) => theme.color('blue_light')};
    color: ${({ theme }) => theme.color('black')};
    font-size: ${({ theme }) => theme.fontSize('l')};
    font-family: ${({ theme }) => theme.fontFamilies('Anton')};
    font-weight: normal;
    border-radius: 10px;
    padding: ${spacing('s')};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    ${media('small')} {
      font-size: ${({ theme }) => theme.fontSize('xl')};
      padding: ${spacing('m')};
    }
    &:focus {
      border: none;
    }

    ${({ isSelected }) =>
      isSelected &&
      css`
        background-color: ${({ theme }) => theme.color('blue')};
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
        color: ${({ theme }) => theme.color('white')};
      `}
  }
`;

const MoneyBuy = ({
  setOtherAmount,
  amount,
  currency,
  description,
  ...rest
}) => {
  return (
    <MoneyBox
      {...rest}
      aria-label={description}
      value={`${currency} ${amount}`}
      type="button"
      label=""
      errorMsg=""
      onClick={setOtherAmount}
    />
  );
};

MoneyBuy.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
  description: PropTypes.string,
  // Function already set does'nt need to be passed as props
  setOtherAmount: PropTypes.func.isRequired
};

MoneyBuy.defaultProps = {
  amount: '10',
  currency: '£',
  description: 'description'
};

export default MoneyBuy;
