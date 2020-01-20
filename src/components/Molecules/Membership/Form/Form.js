import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import MoneyBox from '../MoneyBox/MoneyBox';
import {
  handleDonateSubmission,
  onKeyPress,
  isAmountValid,
  isInputMatchBoxValue
} from '../../../../utils/membershipHelper';
import {
  Button,
  Copy,
  Error,
  FormFieldset,
  FormWrapper,
  Label,
  Form,
  MoneyBuys,
  AmountField,
  OuterFieldset,
  Legend
} from '../Membership.style';

import {
  DataLayerInit,
  DataLayerUpdate,
  checkCookie
} from '../../../../utils/membershipDataLayer';

const Signup = ({
  data: { regularGiving },
  donateLink,
  otherDescription,
  clientID,
  cartID,
  mbshipID: mbshipRowID,
  ...rest
}) => {
  const [moneyBoxes, setMoneyBoxes] = useState({
    box1: '',
    box2: '',
    box3: ''
  });

  const [isSelected, setIsSelected] = useState(true); // Highlight one the money buy box when the page load
  const [errorMsg, setErrorMsg] = useState(false);
  const [currentDonationAmount, setCurrentDonationAmount] = useState('');
  const [userInputValue, setUserInputValue] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);
  const [currentMoneyBuyPosition, setCurrentMoneyBuyPosition] = useState(true);

  // eslint-disable-next-line no-multi-assign
  const dataLayer = (window.dataLayer = window.dataLayer || []);

  // This function is triggered when one of the money buy box is selected
  const selectMoneyBuy = (copy, value, event) => {
    // Stops outer label clickevent being passed down to the input, triggering twice
    if (event && event.type === 'click') {
      event.stopPropagation();
    }

    // Make a record of what position our currently selected amount is
    setCurrentMoneyBuyPosition(event.target.getAttribute('data-pos'));

    if (isSelected) setIsSelected(false);
    if (errorMsg) setErrorMsg(false);
    // Check if input is highlighted and his value matches one of the money buy box
    const isUserInputMatch = userInputValue * 1 === value; // convert string to number string * 1
    if (inputBorderColor && !isUserInputMatch) {
      setInputBorderColor(false);
      setUserInputValue('');
    }
    setBoxBorderColor(value);
    setMoneyBuyCopy(copy);
    setCurrentDonationAmount(value);
  };

  // Handle user other amount input
  const handleChange = (input, description) => {
    if (!isAmountValid(input)) {
      if (moneyBuyCopy) setMoneyBuyCopy(false);
      if (boxBorderColor) setBoxBorderColor(false);
      if (!errorMsg) setErrorMsg(true);
    } else {
      setBoxBorderColor(false);
      if (errorMsg) setErrorMsg(false);
      setMoneyBuyCopy(description);
      setCurrentDonationAmount(input);
    }
    // Highlight both input and box
    isInputMatchBoxValue(
      moneyBoxes,
      selectMoneyBuy,
      setCurrentDonationAmount,
      input
    );
    setInputBorderColor(true);
    setUserInputValue(input);
  };

  const highlightInput = (value, description) => {
    // The manual input field always represnts the '0' MoneyBuy position in the DL
    setCurrentMoneyBuyPosition('0');
    if (isSelected) setIsSelected(false);
    if (errorMsg) {
      setMoneyBuyCopy(false);
    } else if (!value) {
      setCurrentDonationAmount(0);
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
        (setMoneyBuyCopy(moneyBuy.description),
        setCurrentDonationAmount(moneyBuy.value))
      );
    });
  }, [isSelected, regularGiving.moneybuys]);

  /* Set up default DataLayer obj on pageload */
  useEffect(() => {
    DataLayerInit(
      mbshipRowID,
      clientID,
      cartID,
      regularGiving.moneybuys,
      dataLayer
    );
  }, [cartID, clientID, dataLayer, mbshipRowID, regularGiving.moneybuys]);

  const submitDonation = (
    event,
    amount,
    clientId,
    cartId,
    mbshipId,
    donateURL
  ) => {
    event.preventDefault();

    if (isAmountValid(amount)) {
      // Pass current values to function to fire DL event
      DataLayerUpdate(
        amount,
        'add',
        currentMoneyBuyPosition,
        clientId,
        cartId,
        mbshipRowID,
        dataLayer
      );
      handleDonateSubmission(amount, clientId, cartId, mbshipId, donateURL);
    } else {
      setErrorMsg(true);
      setMoneyBuyCopy(false);
    }
  };

  // Create money buy boxes
  const MoneyBoxes = regularGiving.moneybuys.map(
    ({ value, description }, index) => (
      <MoneyBox
        isSelected={index === 1 && isSelected}
        boxBorderColor={boxBorderColor}
        isInputMatchBox={value}
        amount={value}
        description={`£${value}`}
        setOtherAmount={e => {
          selectMoneyBuy(description, value, e);
        }}
        key={value}
        name={`${mbshipRowID}--moneyBuy${index + 1}`}
        id={`${mbshipRowID}--moneyBuy-box${index + 1}`}
        position={`${index + 1}`}
      />
    )
  );

  useEffect(() => {
    checkCookie(clientID, cartID, dataLayer);
  });

  return (
    <FormWrapper>
      <Form
        onSubmit={e =>
          submitDonation(
            e,
            currentDonationAmount,
            clientID,
            cartID,
            mbshipRowID,
            donateLink
          )
        }
      >
        <OuterFieldset>
          <Legend>
            <Text tag="h3">Choose your monthly donation</Text>
          </Legend>
          <MoneyBuys>{MoneyBoxes}</MoneyBuys>
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
              id={`${mbshipRowID}--MoneyBuy-userInput`}
              showLabel
              {...rest}
              max="5000"
              min="1"
              value={userInputValue}
              pattern="[^[0-9]+([,.][0-9]+)?$]"
              placeholder="0.00"
              onChange={e => handleChange(e.target.value, otherDescription)}
              onClick={e => highlightInput(e.target.value, otherDescription)}
              onKeyPress={e => onKeyPress(e)}
              aria-label="Input a different amount"
            />
          </FormFieldset>
          <Button type="submit">Donate</Button>
          {errorMsg && (
            <Error tag="p">
              Please enter a number between 1 and 5000, and up to 2 decimal
              places
            </Error>
          )}
          {moneyBuyCopy && <Copy as="p">{moneyBuyCopy}</Copy>}
        </OuterFieldset>
      </Form>
    </FormWrapper>
  );
};

Signup.propTypes = {
  clientID: PropTypes.string,
  cartID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  otherDescription: PropTypes.string.isRequired,
  mbshipID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape)
};

Signup.defaultProps = {
  clientID: 'the_fix',
  data: {}
};
export default Signup;
