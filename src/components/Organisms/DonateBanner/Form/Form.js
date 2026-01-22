import React, {
  useState, useRef, useEffect, useCallback
} from 'react';
import PropTypes from 'prop-types';

import PopUpComponent from './PopUpComponent';
import MoneyBuy from '../MoneyBuy/MoneyBuy';
import {
  handleDonateSubmission,
  isAmountValid,
  amountFormatter
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
  Legend,
  PrimaryTitleText,
  SecondaryTitleText
} from '../Donate.style';
import GivingSelector from '../GivingSelector/GivingSelector';

const Signup = ({
  data: { singleGiving, regularGiving },
  donateLink,
  otherAmountText,
  clientID,
  cartID,
  mbshipID,
  noMoneyBuys = false,
  popUpText,
  chooseAmountText = null,
  monthlyChooseAmountText = null,
  submitButtonColor = 'red',
  donateWidgetIsTextOnly = false,
  widgetTextColor = 'black',
  componentBackgroundColour = 'white',
  changeGivingType,
  givingType = null,
  ...rest
}) => {
  // const [givingType, setGivingType] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [amountDonate, setAmountDonate] = useState(10);
  const [moneyBuyCopy, setMoneyBuyCopy] = useState(true);
  const [popOpen, setPopOpen] = useState(false);
  // In order to keep track of whether the user has ever been shown the popup
  const [popUpShown, setPopUpShown] = useState(false);

  useEffect(() => {
    if (givingType) {
      const givingData = givingType === 'single' ? singleGiving : regularGiving;

      // Check the 2nd moneybuy exists before using it;
      // 'philantrophy' carts have been set up to use a single moneybuy.
      // See ENG-1685 for more details
      const thisAmount = givingData.moneybuys[1]
        ? givingData.moneybuys[1].value
        : givingData.moneybuys[0].value;

      setAmountDonate(thisAmount);
    }
    // Pass givingType up to parent for copy-switching logic:
    changeGivingType(givingType);
  }, [givingType, singleGiving, regularGiving, changeGivingType]);

  useEffect(() => {
    if (givingType) {
      const givingData = givingType === 'single' ? singleGiving : regularGiving;

      let moneyBuyUpdatedDescription = otherAmountText;

      givingData.moneybuys.map((moneyBuy, index) => {
        // Only show the MB-associated copy when we're actually showing moneybuys
        if (moneyBuy.value === amountDonate && !noMoneyBuys) {
          moneyBuyUpdatedDescription = moneyBuy.description;
        }

        return (
          index === 1
          && amountDonate === undefined
          && (setMoneyBuyCopy(moneyBuy.description),
          setAmountDonate(moneyBuy.value))
        );
      });

      if (!isAmountValid(amountDonate)) {
        if (moneyBuyCopy) setMoneyBuyCopy(false);
        if (!errorMsg) setErrorMsg(true);
      } else {
        if (errorMsg) setErrorMsg(false);
        setMoneyBuyCopy(moneyBuyUpdatedDescription);
      }
    }
  }, [
    errorMsg,
    moneyBuyCopy,
    singleGiving,
    regularGiving,
    givingType,
    amountDonate,
    otherAmountText,
    noMoneyBuys
  ]);

  // Updates our flag that differentiates between the popup
  // being *currently* open and it *ever* having been shown to user
  useEffect(() => {
    if (popOpen && !popUpShown) setPopUpShown(true);
  }, [popOpen, popUpShown]);

  // On load, determine what should actually be the default giving type
  useEffect(() => {
    let newGivingType;
    // Use any explicit setting
    newGivingType = singleGiving !== null ? 'single' : 'monthly';

    changeGivingType(newGivingType);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        givingType,
        popUpShown
      );
    } else {
      setErrorMsg(true);
      setMoneyBuyCopy(false);
    }
  };

  // Create money buy boxes
  const givingData = givingType === 'single' ? singleGiving : regularGiving;
  const showGivingSelector = singleGiving !== null && regularGiving !== null;

  // Create ref for amount input
  const amountRef = useRef(null);
  // Create ref for amount button
  const buttonRef = useRef(null);

  const handleClickOutside = useCallback(event => {
    if (!errorMsg) {
      return;
    }

    if (buttonRef.current && event.target === buttonRef.current) {
      return;
    }

    if (amountRef.current && !amountRef.current.contains(event.target)) {
      // Check the 2nd moneybuy exists before using it;
      // 'philantrophy' carts have been set up to use a single moneybuy.
      // See ENG-1685 for more details
      const thisAmount = givingData.moneybuys[1]
        ? givingData.moneybuys[1].value
        : givingData.moneybuys[0].value;

      setAmountDonate(thisAmount);
    }
  }, [errorMsg, givingData]);

  // Listen for click outside custom amount input if there is no value entered.
  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [errorMsg, handleClickOutside]);

  // Create function to conditionally render button text
  const renderButtonText = () => {
    if (errorMsg) {
      return 'Donate';
    }
    if (givingType === 'single') {
      return `Donate £${amountDonate} now`;
    }
    return `Donate £${amountDonate} monthly`;
  };

  const defaultChooseAmountText = `${noMoneyBuys ? 'Enter' : 'Choose'} an amount to give`;
  const thisChooseAmountText = givingType === 'monthly' && monthlyChooseAmountText
    ? monthlyChooseAmountText
    : (chooseAmountText || defaultChooseAmountText);

  return (
    <FormWrapper>
      { popOpen && <PopUpComponent popUpText={popUpText} setPopOpen={setPopOpen} /> }

      <Form
        donateWidgetIsTextOnly={donateWidgetIsTextOnly}
        componentBackgroundColour={componentBackgroundColour}
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
            <PrimaryTitleText tag="span" color={widgetTextColor}>
              {thisChooseAmountText}
            </PrimaryTitleText>
          </Legend>
          {showGivingSelector && (
            <GivingSelector
              givingType={givingType}
              changeGivingType={data => changeGivingType(data)}
              setPopOpen={setPopOpen}
              mbshipID={mbshipID}
            />
          )}
          {!noMoneyBuys && givingType && (
            <MoneyBuys>
              {givingData.moneybuys.map(({ value }, index) => (
                <MoneyBuy
                  isSelected={amountDonate === value}
                  amount={value.toString()}
                  description={`£${amountFormatter(value)}`}
                  setOtherAmount={() => setAmountDonate(value)}
                  key={value}
                  name={`${mbshipID}--moneyBuy${index + 1}`}
                  id={`${mbshipID}--moneyBuy-box${index + 1}`}
                />
              ))}
            </MoneyBuys>
          )}
          <FormFieldset>
            {!noMoneyBuys && (
              <Label size="s" weight="500" color={widgetTextColor}>
                Enter another amount
              </Label>
            )}
            <AmountField
              $noMoneyBuys={noMoneyBuys}
              step="0.01"
              name="membership_amount"
              type="string"
              inputBorderColor={isAmountValid(amountDonate) === false}
              prefix="£"
              label={noMoneyBuys ? 'Donation amount' : 'Other donation amount'}
              errorMsg=""
              id={`${mbshipID}--MoneyBuy-userInput`}
              showLabel={false}
              {...rest}
              max="25000"
              min="1"
              value={amountDonate}
              pattern="^[0-9]+([,.][0-9]{0,2})?$" // this only applies on submit
              placeholder="0.00"
              onChange={e => setAmountDonate(e.target.value.trim())}
              ref={amountRef}
            />
          </FormFieldset>
          {amountDonate >= 1 && moneyBuyCopy && (
            <Copy as="p" color={widgetTextColor}>
              <strong>{`£${amountDonate} `}</strong>
              {moneyBuyCopy}
            </Copy>
          )}

          {errorMsg && (
          <Error className="error--amount" tag="p">
            Please enter an amount between £1 and £25000 and up to 2 decimal
            places
          </Error>
          )}

          <Button
            type="submit"
            color={submitButtonColor}
            ref={buttonRef}
            // Used by analytics:
            className="Button_DonateWidget"
          >
            {renderButtonText()}
          </Button>

        </OuterFieldset>
      </Form>
    </FormWrapper>
  );
};

Signup.propTypes = {
  clientID: PropTypes.string.isRequired,
  cartID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  otherAmountText: PropTypes.string.isRequired,
  mbshipID: PropTypes.string.isRequired,
  noMoneyBuys: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.shape),
  popUpText: PropTypes.string.isRequired,
  chooseAmountText: PropTypes.string,
  monthlyChooseAmountText: PropTypes.string,
  submitButtonColor: PropTypes.string,
  donateWidgetIsTextOnly: PropTypes.bool,
  widgetTextColor: PropTypes.string,
  componentBackgroundColour: PropTypes.string,
  changeGivingType: PropTypes.func.isRequired,
  givingType: PropTypes.string
};

export default Signup;
