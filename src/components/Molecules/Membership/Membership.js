import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import MoneyBuy from './MoneyBuy';
import {
  Button,
  Copy,
  Error,
  FormFieldset,
  FormWrapper,
  Header,
  Label,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField
} from './Membership.style';

const Membership = ({ data, ...rest }) => {
  // Hightlight one of the money buy box when page load
  const [isSelected, setIsSelected] = useState(true);

  const [errorMsg, setErrorMsg] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  const selectMoneyBuy = (id, copy) => {
    setIsSelected(false);
    setErrorMsg(false);
    if (inputBorderColor) {
      setInputBorderColor(false);
      setUserInput('');
    }
    setBoxBorderColor(id);
    setMoneyBuyCopy(copy);
  };

  // Handle user input
  const handleChange = (input, otherDescription) => {
    parseFloat(input).toFixed(2);
    const reg = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g;
    const isValid = (input > 0 || input > 5000) && reg.test(input);

    if (!isValid) {
      setMoneyBuyCopy(false);
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setMoneyBuyCopy(otherDescription);
    }
    setUserInput(input);
  };

  const hightlightInput = otherDescription => {
    if (errorMsg) {
      setMoneyBuyCopy(false);
    } else {
      setBoxBorderColor('');
      setMoneyBuyCopy(otherDescription);
      setInputBorderColor(true);
    }
  };

  // Set correct money buy copy for the preselected money buy
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
        setOtherAmount={() => selectMoneyBuy(id, description)}
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
          <FormFieldset>
            <Label size="s" weight="500">
              Other amount
            </Label>
            <AmountField
              step=".10"
              name="membership_amount"
              type="number"
              inputBorderColor={inputBorderColor}
              label="£"
              errorMsg=""
              id="Money buy description"
              showLabel
              {...rest}
              value={userInput}
              max="5000"
              min="1"
              pattern="[^[1-9]+$]"
              placeholder="0.00"
              onChange={e =>
                handleChange(e.target.value, data.otherDescription)
              }
              onClick={() => hightlightInput(data.otherDescription)}
              onKeyUp={e => setUserInput(e.target.value)}
            />
          </FormFieldset>
          <Button type="button" href="">
            Donate
          </Button>
          {errorMsg && (
            <Error>
              Please enter a number between 1 and 5000, and up to 2 decimal
              places
            </Error>
          )}
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
