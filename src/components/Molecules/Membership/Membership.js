import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MoneyBuy from './MoneyBuy';
import {
  Copy,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField
} from './Membership.style';

const Membership = ({ data: { data }, ...rest }) => {
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState('');

  const changeAmount = (id, copy) => {
    setBoxBorderColor(id);
    setMoneyBuyCopy(copy);
    setInputBorderColor(false);
    setUserInput('');
  };

  const handleChange = input => {
    setUserInput(input);
  };

  const hightlightInput = () => {
    setBoxBorderColor('');
    setMoneyBuyCopy('other copy');
    setInputBorderColor(true);
  };

  return (
    <Wrapper>
      <Form>
        <MoneyBuys>
          {data.map(({ moneyBuy: { value, id, copy } }) => (
            <MoneyBuy
              boxBorderColor={boxBorderColor}
              current={id}
              amount={`${value}`}
              setOtherAmount={() => changeAmount(id, copy)}
              key={id}
            />
          ))}
        </MoneyBuys>
        <AmountField
          name="membership_amount"
          type="number"
          inputBorderColor={inputBorderColor}
          label="Other amount"
          errorMsg=""
          id="Money buy description"
          showLabel
          {...rest}
          value={userInput}
          max="5000"
          min="1"
          pattern="[^[0-9]+([,.][0-9]+)£?$]"
          placeholder="0"
          onChange={e => handleChange(e.target.value)}
          onClick={hightlightInput}
        />
      </Form>
      <Copy as="p">{moneyBuyCopy}</Copy>
    </Wrapper>
  );
};

Membership.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape)
};

Membership.defaultProps = {
  data: []
};
export default Membership;
