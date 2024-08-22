"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PopUpComponent = _interopRequireDefault(require("./PopUpComponent"));
var _Text = _interopRequireDefault(require("../../../Atoms/Text/Text"));
var _MoneyBuy = _interopRequireDefault(require("../MoneyBuy/MoneyBuy"));
var _Membership = require("../../../../utils/Membership");
var _Donate = require("../Donate.style");
var _GivingSelector = _interopRequireDefault(require("../GivingSelector/GivingSelector"));
const Signup = _ref => {
  let {
    data: {
      singleGiving,
      regularGiving
    },
    donateLink,
    otherAmountText,
    clientID,
    cartID,
    mbshipID,
    noMoneyBuys = false,
    PopUpText,
    chooseAmountText,
    submitButtonColor,
    otherAmountValue = null,
    additionalSingleCopy = null,
    additionalMonthlyCopy = null,
    defaultGivingType = null,
    changeGivingType,
    givingType = null,
    ...rest
  } = _ref;
  // const [givingType, setGivingType] = useState();
  const [errorMsg, setErrorMsg] = (0, _react.useState)(false);
  const [amountDonate, setAmountDonate] = (0, _react.useState)(10);
  const [moneyBuyCopy, setMoneyBuyCopy] = (0, _react.useState)(true);
  const [popOpen, setPopOpen] = (0, _react.useState)(false);
  // In order to keep track of whether the user has ever been shown the popup
  const [popUpShown, setPopUpShown] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    // If a specific 'other amount' has been passed down, use it,
    // otherwise assign based on the associated moneybuys:
    if (otherAmountValue) {
      setAmountDonate(otherAmountValue);
    } else if (givingType) {
      const givingData = givingType === 'single' ? singleGiving : regularGiving;

      // Check the 2nd moneybuy exists before using it;
      // 'philantrophy' carts have been set up to use a single moneybuy.
      // See ENG-1685 for more details
      const thisAmount = givingData.moneybuys[1] ? givingData.moneybuys[1].value : givingData.moneybuys[0].value;
      setAmountDonate(thisAmount);
    }
    // Pass givingType up to parent for copy-switching logic:
    changeGivingType(givingType);
  }, [givingType, singleGiving, regularGiving, otherAmountValue, changeGivingType]);
  (0, _react.useEffect)(() => {
    if (givingType) {
      const givingData = givingType === 'single' ? singleGiving : regularGiving;
      let moneyBuyUpdatedDescription = otherAmountText;
      givingData.moneybuys.map((moneyBuy, index) => {
        // Only show the MB-associated copy when we're actually showing moneybuys
        if (moneyBuy.value === amountDonate && !noMoneyBuys) {
          moneyBuyUpdatedDescription = moneyBuy.description;
        }
        return index === 1 && amountDonate === undefined && (setMoneyBuyCopy(moneyBuy.description), setAmountDonate(moneyBuy.value));
      });
      if (!(0, _Membership.isAmountValid)(amountDonate)) {
        if (moneyBuyCopy) setMoneyBuyCopy(false);
        if (!errorMsg) setErrorMsg(true);
      } else {
        if (errorMsg) setErrorMsg(false);
        setMoneyBuyCopy(moneyBuyUpdatedDescription);
      }
    }
  }, [errorMsg, moneyBuyCopy, singleGiving, regularGiving, givingType, amountDonate, otherAmountText, noMoneyBuys]);

  // Updates our flag that differentiates between the popup
  // being *currently* open and it *ever* having been shown to user
  (0, _react.useEffect)(() => {
    if (popOpen && !popUpShown) setPopUpShown(true);
  }, [popOpen, popUpShown]);

  // On load, determine what should actually be the default giving type
  (0, _react.useEffect)(() => {
    let newGivingType;
    // Use any explicit setting
    if (defaultGivingType) {
      newGivingType = defaultGivingType;
    } else {
      // Else, use whatever's available
      newGivingType = singleGiving !== null ? 'single' : 'monthly';
    }
    changeGivingType(newGivingType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submitDonation = (event, amount, clientId, cartId, mbshipId, donateURL) => {
    event.preventDefault();
    if ((0, _Membership.isAmountValid)(amount) && !errorMsg) {
      (0, _Membership.handleDonateSubmission)(amount, clientId, cartId, mbshipId, donateURL, givingType, popUpShown);
    } else {
      setErrorMsg(true);
      setMoneyBuyCopy(false);
    }
  };

  // Update the local state if the prop has been set and changed
  (0, _react.useEffect)(() => {
    if (otherAmountValue) {
      setAmountDonate(otherAmountValue);
    }
  }, [otherAmountValue, setAmountDonate]);

  // Create money buy boxes
  const givingData = givingType === 'single' ? singleGiving : regularGiving;
  const showGivingSelector = singleGiving !== null && regularGiving !== null;

  // Create ref for amount input
  const amountRef = (0, _react.useRef)(null);
  // Create ref for amount button
  const buttonRef = (0, _react.useRef)(null);
  const handleClickOutside = (0, _react.useCallback)(event => {
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
      const thisAmount = givingData.moneybuys[1] ? givingData.moneybuys[1].value : givingData.moneybuys[0].value;
      setAmountDonate(thisAmount);
    }
  }, [errorMsg, givingData]);

  // Listen for click outside custom amount input if there is no value entered.
  (0, _react.useEffect)(() => {
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
      return "Donate \xA3".concat(amountDonate, " now");
    }
    return "Donate \xA3".concat(amountDonate, " monthly");
  };
  const showAdditionalSingleCopy = givingType === 'single' && additionalSingleCopy;
  const showAdditionalMonthlyCopy = givingType === 'monthly' && additionalMonthlyCopy;
  const additionalCopy = showAdditionalSingleCopy || showAdditionalMonthlyCopy;
  return /*#__PURE__*/_react.default.createElement(_Donate.FormWrapper, null, showGivingSelector && /*#__PURE__*/_react.default.createElement(_GivingSelector.default, {
    givingType: givingType,
    changeGivingType: data => changeGivingType(data),
    setPopOpen: setPopOpen,
    mbshipID: mbshipID
  }), popOpen && /*#__PURE__*/_react.default.createElement(_PopUpComponent.default, {
    PopUpText: PopUpText,
    setPopOpen: setPopOpen
  }), /*#__PURE__*/_react.default.createElement(_Donate.Form, {
    onSubmit: e => submitDonation(e, amountDonate, clientID, cartID, mbshipID, donateLink)
  }, /*#__PURE__*/_react.default.createElement(_Donate.OuterFieldset, null, /*#__PURE__*/_react.default.createElement(_Donate.Legend, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "span",
    size: "l",
    weight: "bold"
  }, chooseAmountText || "".concat(noMoneyBuys ? 'Enter' : 'Choose', " an amount to give"))), !noMoneyBuys && givingType && /*#__PURE__*/_react.default.createElement(_Donate.MoneyBuys, null, givingData.moneybuys.map((_ref2, index) => {
    let {
      value
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_MoneyBuy.default, {
      isSelected: amountDonate === value,
      amount: value.toString(),
      description: "\xA3".concat((0, _Membership.amountFormatter)(value)),
      setOtherAmount: () => setAmountDonate(value),
      key: value,
      name: "".concat(mbshipID, "--moneyBuy").concat(index + 1),
      id: "".concat(mbshipID, "--moneyBuy-box").concat(index + 1)
    });
  })), /*#__PURE__*/_react.default.createElement(_Donate.FormFieldset, null, !noMoneyBuys && /*#__PURE__*/_react.default.createElement(_Donate.Label, {
    size: "s",
    weight: "500"
  }, "Other amount"), /*#__PURE__*/_react.default.createElement(_Donate.AmountField, Object.assign({
    step: "0.01",
    name: "membership_amount",
    type: "string",
    inputBorderColor: (0, _Membership.isAmountValid)(amountDonate) === false,
    label: "\xA3",
    errorMsg: "",
    id: "".concat(mbshipID, "--MoneyBuy-userInput"),
    showLabel: true
  }, rest, {
    max: "25000",
    min: "1",
    value: amountDonate,
    pattern: "[^[0-9]+([,.][0-9]+)?$]" // this only applies on submit
    ,
    placeholder: "0.00",
    onChange: e => setAmountDonate(e.target.value.trim()),
    "aria-label": "Input a different amount",
    ref: amountRef
  }))), amountDonate >= 1 && moneyBuyCopy && /*#__PURE__*/_react.default.createElement(_Donate.Copy, {
    as: "p"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "\xA3".concat(amountDonate, " ")), moneyBuyCopy), errorMsg && /*#__PURE__*/_react.default.createElement(_Donate.Error, {
    className: "error--amount",
    tag: "p"
  }, "Please enter an amount between \xA31 and \xA325000 and up to 2 decimal places"), additionalCopy && /*#__PURE__*/_react.default.createElement("p", {
    className: "additional-copy"
  }, /*#__PURE__*/_react.default.createElement("strong", null, additionalCopy)), /*#__PURE__*/_react.default.createElement(_Donate.Button, {
    type: "submit",
    color: submitButtonColor,
    ref: buttonRef
  }, renderButtonText()))));
};
var _default = exports.default = Signup;