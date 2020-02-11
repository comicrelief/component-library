import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import MoneyBox from '../MoneyBox/MoneyBox';
import {
  handleDonateSubmission,
  isAmountValid
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
  AmountField,
  OuterFieldset,
  Legend
} from '../Donate.style';
import GivingSelector from '../GivingSelector/GivingSelector';

const Signup = ({
  data: { singleGiving, regularGiving },
  donateLink,
  otherDescription,
  clientID,
  cartID,
  mbshipID,
  ...rest
}) => {
  const [givingType, setGivingType] = useState('single');
  const [errorMsg, setErrorMsg] = useState(false);
  const [amountDonate, setAmountDonate] = useState(' ');
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  useEffect(() => {
    const givingData = givingType === 'single' ? singleGiving : regularGiving;

    setAmountDonate(parseFloat(givingData.moneybuys[1].value));
  }, [givingType, singleGiving, regularGiving]);

  useEffect(() => {
    const givingData = givingType === 'single' ? singleGiving : regularGiving;

    let moneyBuyNewDescription = otherDescription;

    givingData.moneybuys.map((moneyBuy, index) => {
      if (moneyBuy.value === amountDonate) {
        moneyBuyNewDescription = moneyBuy.description;
      }

      return (
        index === 1 &&
        amountDonate === ' ' &&
        (setMoneyBuyCopy(moneyBuy.description),
        setAmountDonate(parseFloat(moneyBuy.value)))
      );
    });

    if (!isAmountValid(amountDonate)) {
      if (moneyBuyCopy) setMoneyBuyCopy(false);
      if (!errorMsg) setErrorMsg(true);
    } else {
      if (errorMsg) setErrorMsg(false);
      setMoneyBuyCopy(moneyBuyNewDescription);
    }
  }, [
    errorMsg,
    moneyBuyCopy,
    singleGiving,
    regularGiving,
    givingType,
    amountDonate,
    otherDescription
  ]);

  const submitDonation = (
    event,
    amount,
    clientId,
    cartId,
    mbshipId,
    donateURL
  ) => {
    event.preventDefault();
    if (isAmountValid(amount) && !errorMsg) {
      handleDonateSubmission(
        amount,
        clientId,
        cartId,
        mbshipId,
        donateURL,
        givingType
      );
    } else {
      setErrorMsg(true);
      setMoneyBuyCopy(false);
    }
  };

  // Create money buy boxes
  const givingData = givingType === 'single' ? singleGiving : regularGiving;

  return (
    <FormWrapper>
      <GivingSelector
        givingType={givingType}
        changeGivingType={data => setGivingType(data)}
      />

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
        <Legend>
          <Text tag="span" size="l" weight="bold">
            Choose an amount to give
          </Text>
        </Legend>
        <OuterFieldset>
          <MoneyBuys>
            {givingData.moneybuys.map(({ value }, index) => (
              <MoneyBox
                isSelected={amountDonate === value}
                amount={value}
                description={`£${value}`}
                setOtherAmount={() => setAmountDonate(parseFloat(value))}
                key={value}
                name={`${mbshipID}--moneyBuy${index + 1}`}
                id={`${mbshipID}--moneyBuy-box${index + 1}`}
              />
            ))}
          </MoneyBuys>
          <FormFieldset>
            <Label size="s" weight="500">
              Other amount
            </Label>
            <AmountField
              step="0.01"
              name="membership_amount"
              type="number"
              inputBorderColor={isAmountValid(amountDonate) === false}
              label="£"
              errorMsg=""
              id={`${mbshipID}--MoneyBuy-userInput`}
              showLabel
              {...rest}
              max="5000"
              min="1"
              value={amountDonate}
              pattern="[^[0-9]+([,.][0-9]+)?$]"
              placeholder="0.00"
              onChange={e => setAmountDonate(parseFloat(e.target.value))}
              aria-label="Input a different amount"
            />
          </FormFieldset>
          <Button type="submit">
            {givingType === 'single' ? 'Donate once' : 'Donate monthly'}
          </Button>
          {errorMsg && (
            <Error tag="p">
              Please enter an amount between £1 and £5,000, and up to 2 decimal
              places
            </Error>
          )}
          {amountDonate >= 1 && moneyBuyCopy && (
            <Copy as="p">
              {moneyBuyCopy !== otherDescription ? (
                <strong>{`£${amountDonate.toFixed(2)} could pay for `}</strong>
              ) : (
                <strong>{`£${amountDonate.toFixed(2)} `}</strong>
              )}
              {moneyBuyCopy}
            </Copy>
          )}
        </OuterFieldset>
      </Form>
    </FormWrapper>
  );
};

Signup.propTypes = {
  clientID: PropTypes.string.isRequired,
  cartID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  otherDescription: PropTypes.string.isRequired,
  mbshipID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape)
};

Signup.defaultProps = {
  data: {}
};
export default Signup;
