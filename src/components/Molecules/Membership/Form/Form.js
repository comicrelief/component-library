import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import MoneyBuy from '../MoneyBuy/MoneyBuy';
import {
  onKeyPress,
  isAmountValid,
  getUrlParameter
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
  data: {
    data: { regularGiving }
  },
  ...rest
}) => {
  // It's used to hightlight one of the money buy box when page load
  const [isSelected, setIsSelected] = useState(true);
  const [box1, setBox1] = useState('');
  const [box2, setBox2] = useState('');
  const [box3, setBox3] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [amountDonate, setAmountDonate] = useState('');
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  const selectMoneyBuy = (copy, value) => {
    setIsSelected(false);
    setErrorMsg(false);
    setAmountDonate('');
    if (inputBorderColor && userInput * 1 !== value * 1) {
      setInputBorderColor(false);
    }
    if (userInput * 1 === value * 1) {
      setUserInput(value);
      setInputBorderColor(true);
    } else {
      setUserInput('');
    }
    setBoxBorderColor(value);
    setMoneyBuyCopy(copy);
    setAmountDonate(value);
  };

  // Handle user input
  const handleChange = (input, otherDescription) => {
    if (!isAmountValid(input)) {
      setMoneyBuyCopy(false);
      setErrorMsg(true);
    } else if (input * 1 === box1.amount) {
      selectMoneyBuy(box1.description, box1.amount);
      setAmountDonate(input);
    } else if (input * 1 === box2.amount) {
      selectMoneyBuy(box2.description, box2.amount);
      setAmountDonate(input);
    } else if (input * 1 === box3.amount) {
      selectMoneyBuy(box3.description, box3.amount);
      setAmountDonate(input);
    } else {
      setBoxBorderColor(false);
      setErrorMsg(false);
      setMoneyBuyCopy(otherDescription);
      setAmountDonate(input);
    }
    setInputBorderColor(true);
    setUserInput(input);
  };

  const hightlightInput = (value, otherDescription) => {
    if (isSelected) setIsSelected(false);
    if (errorMsg) {
      setMoneyBuyCopy(false);
    } else if (!value) {
      setAmountDonate(0);
      setBoxBorderColor(false);
      setMoneyBuyCopy(otherDescription);
    }
    setInputBorderColor(true);
  };

  // Set correct money buy copy for the preselected money buy when page load
  useEffect(() => {
    regularGiving.moneybuys.map((moneyBuy, index) => {
      // Store money buy
      if (index === 0) setBox1(moneyBuy);
      if (index === 1) setBox2(moneyBuy);
      if (index === 2) setBox3(moneyBuy);
      return (
        isSelected &&
        index === 1 &&
        (setMoneyBuyCopy(moneyBuy.description),
        setAmountDonate(moneyBuy.amount))
      );
    });
  }, [isSelected, regularGiving.moneybuys]);

  const moneyBoxes = regularGiving.moneybuys.map(
    ({ amount, description }, index) => (
      <MoneyBuy
        isSelected={index === 1 && isSelected}
        boxBorderColor={boxBorderColor}
        current={amount}
        amount={`${amount}`}
        description={description}
        setOtherAmount={() => selectMoneyBuy(description, amount)}
        key={amount}
      />
    )
  );

  return (
    <FormWrapper>
      <Form
        onSubmit={() => getUrlParameter(window.location.href, amountDonate)}
      >
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
            max="5000"
            min="1"
            value={userInput}
            pattern="[^[1-9]+$]"
            placeholder="0.00"
            onChange={e =>
              handleChange(e.target.value, regularGiving.otherDescription)
            }
            onClick={e =>
              hightlightInput(e.target.value, regularGiving.otherDescription)
            }
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
  data: PropTypes.objectOf(PropTypes.shape)
};

Signup.defaultProps = {
  data: {}
};
export default Signup;
