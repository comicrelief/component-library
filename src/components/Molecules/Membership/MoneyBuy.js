import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';

const MoneyBox = styled(Input)`
  display: block;
  input {
    background-color: ${({ boxBorderColor, current, isSelected }) =>
      (boxBorderColor === current || isSelected) && 'red'};
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
      name={description}
      aria-label={description}
      value={`${currency} ${amount}`}
      placeholder={`${currency} ${amount}`}
      type="button"
      label=""
      errorMsg=""
      id={description}
      showLabel
      onClick={setOtherAmount}
    />
  );
};

MoneyBuy.propTypes = {
  amount: PropTypes.string,
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
