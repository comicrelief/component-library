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
  noMoneyBuys,
  ...rest
}) => {
  const [givingType, setGivingType] = useState('single');
  const [errorMsg, setErrorMsg] = useState(false);
  const [amountDonate, setAmountDonate] = useState(' ');
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);

  useEffect(() => {
    const givingData = givingType === 'single' ? singleGiving : regularGiving;

    // Check the 2nd moneybuy exists before using it;
    // 'philantrophy' carts have been set up to use a single moneybuy.
    // See ENG-1685 for more details
    const thisAmount = givingData.moneybuys[1]
      ? givingData.moneybuys[1].value
      : givingData.moneybuys[0].value;

    setAmountDonate(parseFloat(thisAmount));
  }, [givingType, singleGiving, regularGiving]);

  useEffect(() => {
    const givingData = givingType === 'single' ? singleGiving : regularGiving;

    let moneyBuyNewDescription = otherDescription;

    givingData.moneybuys.map((moneyBuy, index) => {
      if (moneyBuy.value === amountDonate) {
        moneyBuyNewDescription = moneyBuy.description;
      }

      return (
        index === 1
        && amountDonate === ' '
        && (setMoneyBuyCopy(moneyBuy.description),
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
  const showGivingSelector = singleGiving !== null && regularGiving !== null;

  return (
    <FormWrapper>
      {showGivingSelector && (
        <GivingSelector
          givingType={givingType}
          changeGivingType={data => setGivingType(data)}
        />
      )}

      <Form
        onSubmit={e => submitDonation(
          e,
          amountDonate,
          clientID,
          cartID,
          mbshipID,
          donateLink
        )
        }
      >
        <OuterFieldset>
          <Legend>
            <Text tag="span" size="l" weight="bold">
              {`${noMoneyBuys ? 'Enter' : 'Choose'} an amount to give`}
            </Text>
          </Legend>
          {!noMoneyBuys && (
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
          )}
          <FormFieldset>
            {!noMoneyBuys && (
              <Label size="s" weight="500">
                Other amount
              </Label>
            )}
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
              max="20000"
              min="1"
              value={amountDonate}
              pattern="[^[0-9]+([,.][0-9]+)?$]"
              placeholder="0.00"
              onChange={e => setAmountDonate(parseFloat(e.target.value))}
              aria-label="Input a different amount"
            />
          </FormFieldset>
          {amountDonate >= 1 && !noMoneyBuys && moneyBuyCopy && (
            <Copy as="p">
              <strong>{`£${amountDonate.toFixed(2)} `}</strong>
              {moneyBuyCopy}
            </Copy>
          )}
          {noMoneyBuys ? (
            <Button type="submit" as="input" value="Donate" />
          ) : (
            <Button
              type="submit"
              as="input"
              value={givingType === 'single' ? 'Donate once' : 'Donate monthly'}
            />
          )}
          {errorMsg && (
            <Error tag="p">
              Please enter an amount between £1 and £20000 and up to 2 decimal
              places
            </Error>
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
  noMoneyBuys: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.shape)
};

Signup.defaultProps = {
  noMoneyBuys: false,
  data: {}
};
export default Signup;
