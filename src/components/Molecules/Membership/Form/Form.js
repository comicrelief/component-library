import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import MoneyBox from '../MoneyBox/MoneyBox';
import {
  handleDonateSubmission,
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
  donateLink,
  otherDescription,
  clientID,
  cartID,
  mbshipID,
  ...rest
}) => {
  const [moneyBoxes, setMoneyBoxes] = useState({
    box1: '',
    box2: '',
    box3: ''
  });

  const [isSelected, setIsSelected] = useState(true); // Highlight one the money buy box when the page load
  const [errorMsg, setErrorMsg] = useState(false);
  const [amountDonate, setAmountDonate] = useState('');
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  // eslint-disable-next-line no-multi-assign
  const dataLayer = (window.dataLayer = window.dataLayer || []);

  // This function is triggered when one of the money buy box is selected
  const selectMoneyBuy = (copy, value) => {
    if (isSelected) setIsSelected(false);
    if (errorMsg) setErrorMsg(false);
    // Check if input is highlighted and his value matches one of the money buy box
    const isUserInputMatch = userInput * 1 === value; // convert string to number string * 1
    if (inputBorderColor && !isUserInputMatch) {
      setInputBorderColor(false);
      setUserInput('');
    }
    setBoxBorderColor(value);
    setMoneyBuyCopy(copy);
    setAmountDonate(value);
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

  /* Set up default DataLayer obj on pageload */
  useEffect(() => {
    // Called by UseEffect later on first load
    const DataLayerInit = (
      thisRowID,
      thisClientID,
      thisCartID,
      theseMoneyBuys
    ) => {
      // Construct object to push to datalayer,staring with manual entry 'Other Amount' field
      const ecommerceObj = {
        ecommerce: {
          currencyCode: 'GBP',
          impressions: [
            {
              id: 'manual-entry',
              name: 'manual-entry',
              price: 0.0,
              category: thisCartID,
              position: 0,
              list: `${thisClientID}_${thisRowID}`,
              dimenstion10: 'membership-payment' // ** CURRENTLY MONTHLY ONLY, NEEDS UPDATE TO ALLOW SINGLE DONATION STUFF
            }
          ]
        }
      };

      /* Iterate over all moneybuys */
      theseMoneyBuys.map((moneyBuy, index) => {
        const thisMoneyBuy = {
          id: `moneybuy-${moneyBuy.value}`,
          name: `moneybuy-${moneyBuy.value}`,
          price: moneyBuy.value,
          brand: 'membership-payment', // ** CURRENTLY MONTHLY ONLY, NEEDS UPDATE TO ALLOW SINGLE DONATION STUFF .. also, is this right? "brand"?
          category: thisCartID,
          position: index + 1,
          list: `${thisClientID}_${thisRowID}`,
          dimenstion10: 'membership-payment' // ** CURRENTLY MONTHLY ONLY, NEEDS UPDATE TO ALLOW SINGLE DONATION STUFF
        };

        // Add this 'button' object to the impressions array
        ecommerceObj.ecommerce.impressions.push(thisMoneyBuy);

        // Push to the data layer
        dataLayer.push(ecommerceObj);

        return null;
      });
    };

    DataLayerInit(mbshipID, clientID, cartID, regularGiving.moneybuys);
  }, [cartID, clientID, dataLayer, mbshipID, regularGiving.moneybuys]);

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
        description={description}
        setOtherAmount={() => selectMoneyBuy(description, value)}
        key={value}
        name={`moneyBuy${index + 1}`}
        id={`moneyBuy-box${index + 1}`}
      />
    )
  );

  return (
    <FormWrapper>
      <Form
        onSubmit={e =>
          submitDonation(
            e,
            amountDonate,
            clientID,
            cartID,
            mbshipID,
            donateLink
          )
        }
      >
        <Text tag="h3">Choose your monthly donation</Text>
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
          <Error tag="p">
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
