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
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  const selectMoneyBuy = (copy, value) => {
    setIsSelected(false);
    setErrorMsg(false);
    setAmountDonate('');
    if (inputBorderColor) {
      setInputBorderColor(false);
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
      setAmountDonate(0);
    } else if (input * 1 === box1.amount) {
      setMoneyBuyCopy(box1.description, box1.amount);
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
  };

  const hightlightInput = otherDescription => {
    if (isSelected) setIsSelected(false);
    if (errorMsg) {
      setMoneyBuyCopy(false);
    } else {
      setBoxBorderColor(false);
      setMoneyBuyCopy(otherDescription);
      setInputBorderColor(true);
    }
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
        setOtherAmount={() => selectMoneyBuy(description, amount)}
        key={amount}
      />
    )
  );
  console.log(boxBorderColor);

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
            max="5000"
            min="1"
            pattern="[^[1-9]+$]"
            placeholder="0.00"
            onChange={e =>
              handleChange(e.target.value, regularGiving.otherDescription)
            }
            onClick={() => hightlightInput(regularGiving.otherDescription)}
            onKeyPress={e => onKeyPress(e)}
          />
        </FormFieldset>
        <Button
          type="submit"
          onClick={() => getUrlParameter(window.location.href, amountDonate)}
        >
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
