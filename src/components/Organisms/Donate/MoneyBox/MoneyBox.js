import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Input from '../../../Atoms/Input/Input';

const MoneyBox = styled(Input)`
  display: block;
  input {
    border: 2px solid ${({ theme }) => theme.color('grey_medium')};
    font-size: ${({ theme }) => theme.fontSize('l')};
    font-weight: 800;
    letter-spacing: -2px;

    ${({ isSelected }) =>
      isSelected &&
      css`
        border-color: ${({ theme }) => theme.color('red')};
        background-color: ${({ theme }) => theme.color('red')};
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
