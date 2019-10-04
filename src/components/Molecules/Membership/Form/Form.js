import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import MoneyBuy from '../MoneyBuy/MoneyBuy';
import { onKeyPress, isAmountValid } from '../../../../utils/Membership';
import {
  Button,
  Copy,
  Error,
  FormFieldset,
  FormWrapper,
  Label,
  Form,
  MoneyBuys,
  AmountField
} from '../Membership.style';

const Signup = ({ data, ...rest }) => {
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
    setUserInput('');
    if (inputBorderColor) {
      setInputBorderColor(false);
    }
    setBoxBorderColor(id);
    setMoneyBuyCopy(copy);
  };

  // Handle user input
  const handleChange = (input, otherDescription) => {
    if (!isAmountValid(input)) {
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

  // Set correct money buy copy for the preselected money buy when page load
  useEffect(() => {
    data.data.data.map(({ moneyBuy: { description } }, index) => {
      return isSelected && index === 1 && setMoneyBuyCopy(description);
    });
  }, [data.data.data, isSelected]);

  const moneyBoxes = data.data.data.map(
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
            onChange={e => handleChange(e.target.value, data.otherDescription)}
            onClick={() => hightlightInput(data.otherDescription)}
            onKeyPress={e => onKeyPress(e)}
          />
        </FormFieldset>
        <Button type="button" href="">
          Donate
        </Button>
        {errorMsg && (
          <Error>
            Please enter a number between 1 and 5000, and up to 2 decimal places
          </Error>
        )}
        {moneyBuyCopy && <Copy as="p">{moneyBuyCopy}</Copy>}
      </Form>
    </FormWrapper>
  );
};

Signup.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape)
};

Signup.defaultProps = {
  data: {}
};
export default Signup;
