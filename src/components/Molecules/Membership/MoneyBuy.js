import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import spacing from '../../../theme/shared/spacing';

const MoneyBox = styled(Input)`
  display: block;
  margin: 0;
  max-width: 100%;
  flex: 0 0 32%;
  padding: ${spacing('md')} ${spacing('xsm')};
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoint('small')} {
    padding: ${spacing('md')} ${spacing('sm')};
  }
`;

const MoneyBuy = ({ amount, currency, description, ...rest }) => {
  return (
    <>
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
      />
    </>
  );
};

MoneyBuy.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  description: PropTypes.string
};

MoneyBuy.defaultProps = {
  amount: '10',
  currency: '£',
  description: 'description'
};

export default MoneyBuy;
