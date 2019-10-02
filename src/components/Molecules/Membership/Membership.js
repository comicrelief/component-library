import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import MoneyBuy from './MoneyBuy';
import {
  Button,
  Copy,
  FormWrapper,
  Header,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField
} from './Membership.style';

const Membership = ({ data, ...rest }) => {
  const [isSelected, setIsSelected] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  const changeAmount = (id, copy) => {
    setIsSelected(false);
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

  // Display copy for preselected amount
  useEffect(() => {
    data.data.map(({ moneyBuy: { description } }, index) => {
      return isSelected && index === 1 && setMoneyBuyCopy(description);
    });
  }, [data.data, isSelected]);

  const moneyBoxes = data.data.map(
    ({ moneyBuy: { value, id, description } }, index) => (
      <MoneyBuy
        isSelected={index === 1 && isSelected}
        boxBorderColor={boxBorderColor}
        current={id}
        amount={`${value}`}
        setOtherAmount={() => changeAmount(id, description)}
        key={id}
        moneyBuyCopy={index === 1 && description}
      />
    )
  );

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
          <Text tag="h3">Choose your monthly donation</Text>
          <MoneyBuys>{moneyBoxes}</MoneyBuys>
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
          <Button type="button" href="">
            Donate
          </Button>
          {moneyBuyCopy && <Copy as="p">{moneyBuyCopy}</Copy>}
        </Form>
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
