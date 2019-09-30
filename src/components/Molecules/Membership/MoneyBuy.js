import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';

const MoneyBox = styled(Input)`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  font-weight: 800;
  letter-spacing: -1px;
  display: block;
  margin: 0;
  max-width: 100%;
  flex: 0 0 30%;
  padding: ${spacing('md')} 0;
  cursor: pointer;

  ${media('small')} {
    padding: ${spacing('l')} 0;
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
        onClick={() => console.log(amount)}
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
