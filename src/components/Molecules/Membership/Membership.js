import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MoneyBuy from './MoneyBuy';
import { Wrapper, Form, MoneyBuys, AmountField } from './Membership.style';

const Membership = ({ data: { data }, ...rest }) => {
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);

  const changeAmount = id => {
    setBoxBorderColor(id);
    setInputBorderColor(false);
    setUserInput('');
  };

  const handleChange = input => {
    setUserInput(input);
  };

  const handleUserInput = () => {
    setBoxBorderColor('');
    setInputBorderColor(true);
  };

  return (
    <Wrapper>
      <Form>
        <MoneyBuys>
          {data.map(({ moneyBuy: { value, id } }) => (
            <MoneyBuy
              boxBorderColor={boxBorderColor}
              current={id}
              amount={`${value}`}
              setOtherAmount={() => changeAmount(id, value)}
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
          pattern="[^[0-9]+([,.][0-9]+)?$]"
          placeholder="0"
          onChange={e => handleChange(e.target.value)}
          onClick={handleUserInput}
        />
      </Form>
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
