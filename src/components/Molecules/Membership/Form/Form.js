import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import MoneyBuy from '../MoneyBuy/MoneyBuy';
import {
  handleDonate,
  onKeyPress,
  isAmountValid,
  isInputMatchBoxValue
} from '../../../../utils/Membership';
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

const Signup = ({
  data: { regularGiving },
  otherDescription,
  clientID,
  cartID,
  mbshipID,
  ...rest
}) => {
  // It's used to hightlight one of the money buy box when page load
  const [isSelected, setIsSelected] = useState(true);
  const [moneyBoxes, setMoneyBoxes] = useState({
    box1: '',
    box2: '',
    box3: ''
  });

  const [errorMsg, setErrorMsg] = useState(false);
  const [amountDonate, setAmountDonate] = useState('');
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  const selectMoneyBuy = (copy, value) => {
    setIsSelected(false);
    if (errorMsg) setErrorMsg(false);
    const isUserInputMatch = userInput * 1 === value;
    if (inputBorderColor && !isUserInputMatch) {
      setInputBorderColor(false);
      setUserInput('');
    }
    setBoxBorderColor(value);
    setMoneyBuyCopy(copy);
    setAmountDonate(value);
  };

  // Handle user input
  const handleChange = (input, description) => {
    if (!isAmountValid(input)) {
      if (moneyBuyCopy) setMoneyBuyCopy(false);
      if (boxBorderColor) setBoxBorderColor(false);
      if (!errorMsg) setErrorMsg(true);
    } else {
      setBoxBorderColor(false);
      if (errorMsg) setErrorMsg(false);
      setMoneyBuyCopy(description);
      setAmountDonate(input);
    }
    // Highlight both input and box
    isInputMatchBoxValue(moneyBoxes, selectMoneyBuy, setAmountDonate, input);
    setInputBorderColor(true);
    setUserInput(input);
  };

  const hightlightInput = (value, description) => {
    if (isSelected) setIsSelected(false);
    if (errorMsg) {
      setMoneyBuyCopy(false);
    } else if (!value) {
      setAmountDonate(0);
      setBoxBorderColor(false);
      setMoneyBuyCopy(description);
    }
    setInputBorderColor(true);
  };

  useEffect(() => {
    regularGiving.moneybuys.map((moneyBuy, index) => {
      const box = `box${index + 1}`;
      // eslint-disable-next-line no-shadow
      setMoneyBoxes(moneyBoxes => ({ ...moneyBoxes, [box]: moneyBuy }));
      return (
        isSelected &&
        index === 1 &&
        (setMoneyBuyCopy(moneyBuy.description), setAmountDonate(moneyBuy.value))
      );
    });
  }, [isSelected, regularGiving.moneybuys]);

  const submitDonation = (event, amount, clientId, cartId, mbshipId) => {
    event.preventDefault();
    if (isAmountValid(amount)) {
      handleDonate(amount, clientId, cartId, mbshipId);
    } else {
      setErrorMsg(true);
      setMoneyBuyCopy(false);
    }
  };
  // Create money buy boxes
  const boxes = regularGiving.moneybuys.map(({ value, description }, index) => (
    <MoneyBuy
      isSelected={index === 1 && isSelected}
      boxBorderColor={boxBorderColor}
      isInputMatchBox={value}
      amount={value}
      description={description}
      setOtherAmount={() => selectMoneyBuy(description, value)}
      key={value}
      name={`moneyBuy${index + 1}`}
      id={`moneyBuy-box${index + 1}`}
    />
  ));

  return (
    <FormWrapper>
      <Form
        onSubmit={e =>
          submitDonation(e, amountDonate, clientID, cartID, mbshipID)
        }
      >
        <Text tag="h3">Choose your monthly donation</Text>
        <MoneyBuys>{boxes}</MoneyBuys>
        <FormFieldset>
          <Label size="s" weight="500">
            Other amount
          </Label>
          <AmountField
            step="0.01"
            name="membership_amount"
            type="number"
            inputBorderColor={inputBorderColor}
            label="£"
            errorMsg=""
            id="MoneyBuy-userInput"
            showLabel
            {...rest}
            max="5000"
            min="1"
            value={userInput}
            pattern="[^[0-9]+([,.][0-9]+)?$]"
            placeholder="0.00"
            onChange={e => handleChange(e.target.value, otherDescription)}
            onClick={e => hightlightInput(e.target.value, otherDescription)}
            onKeyPress={e => onKeyPress(e)}
          />
        </FormFieldset>
        <Button type="submit">Donate</Button>
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
  clientID: PropTypes.string,
  cartID: PropTypes.string.isRequired,
  otherDescription: PropTypes.string.isRequired,
  mbshipID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape)
};

Signup.defaultProps = {
  clientID: 'the_fix',
  data: {}
};
export default Signup;
