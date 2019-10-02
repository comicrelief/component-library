import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import MoneyBuy from './MoneyBuy';
import {
  Copy,
  FormWrapper,
  Header,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField
} from './Membership.style';

const Membership = ({ data, ...rest }) => {
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

  const hightlightInput = otherDescription => {
    setBoxBorderColor('');
    setMoneyBuyCopy(otherDescription);
    setInputBorderColor(true);
  };

  return (
    <Wrapper>
      <Header>
        <Text tag="h2" size="l" weight="800">
          Help someone like Jordan see a better tomorrow
        </Text>
        <Text tag="p">
          Jordan was close to suicide - which is now the biggest killer of men
          under 45 in the UK. Join now and help save lives.
        </Text>
      </Header>
      <FormWrapper>
        <Form>
          <Text as="h3">Choose your monthly donation</Text>
          <MoneyBuys>
            {data.data.map(({ moneyBuy: { value, id, description } }) => (
              <MoneyBuy
                boxBorderColor={boxBorderColor}
                current={id}
                amount={`${value}`}
                setOtherAmount={() => changeAmount(id, description)}
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
            onClick={() => hightlightInput(data.otherDescription)}
          />
        </Form>
        <Copy as="p">{moneyBuyCopy}</Copy>
      </FormWrapper>
    </Wrapper>
  );
};

Membership.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape)
};

Membership.defaultProps = {
  data: {}
};
export default Membership;
