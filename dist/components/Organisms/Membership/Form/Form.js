"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Text = _interopRequireDefault(require("../../../Atoms/Text/Text"));
var _MoneyBox = _interopRequireDefault(require("../MoneyBox/MoneyBox"));
var _Membership = require("../../../../utils/Membership");
var _Membership2 = require("../Membership.style");
const Signup = _ref => {
  let {
    data: {
      regularGiving
    },
    donateLink,
    otherDescription,
    clientID = 'the_fix',
    cartID,
    mbshipID,
    ...rest
  } = _ref;
  const [moneyBoxes, setMoneyBoxes] = (0, _react.useState)({
    box1: '',
    box2: '',
    box3: ''
  });
  // Highlight one the money buy box when the page load
  const [isSelected, setIsSelected] = (0, _react.useState)(true);
  const [errorMsg, setErrorMsg] = (0, _react.useState)(false);
  const [amountDonate, setAmountDonate] = (0, _react.useState)('');
  const [userInput, setUserInput] = (0, _react.useState)('');
  const [boxBorderColor, setBoxBorderColor] = (0, _react.useState)('');
  const [inputBorderColor, setInputBorderColor] = (0, _react.useState)(false);
  const [moneyBuyCopy, setMoneyBuyCopy] = (0, _react.useState)(true);

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
    if (!(0, _Membership.isAmountValid)(input)) {
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
    (0, _Membership.isInputMatchBoxValue)(moneyBoxes, selectMoneyBuy, setAmountDonate, input);
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
  (0, _react.useEffect)(() => {
    regularGiving.moneybuys.map((moneyBuy, index) => {
      const box = "box".concat(index + 1);
      // eslint-disable-next-line no-shadow
      setMoneyBoxes(moneyBoxes => ({
        ...moneyBoxes,
        [box]: moneyBuy
      }));
      return isSelected && index === 1 && (setMoneyBuyCopy(moneyBuy.description), setAmountDonate(moneyBuy.value));
    });
  }, [isSelected, regularGiving.moneybuys]);
  const submitDonation = (event, amount, clientId, cartId, mbshipId, donateURL) => {
    event.preventDefault();
    if ((0, _Membership.isAmountValid)(amount) && !errorMsg) {
      (0, _Membership.handleDonateSubmission)(amount, clientId, cartId, mbshipId, donateURL);
    } else {
      setErrorMsg(true);
      setMoneyBuyCopy(false);
    }
  };

  // Create money buy boxes
  const MoneyBoxes = regularGiving.moneybuys.map((_ref2, index) => {
    let {
      value,
      description
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_MoneyBox.default, {
      isSelected: index === 1 && isSelected,
      boxBorderColor: boxBorderColor,
      isInputMatchBox: value,
      amount: value,
      description: "\xA3".concat(value),
      setOtherAmount: () => selectMoneyBuy(description, value),
      key: value,
      name: "".concat(mbshipID, "--moneyBuy").concat(index + 1),
      id: "".concat(mbshipID, "--moneyBuy-box").concat(index + 1)
    });
  });
  return /*#__PURE__*/_react.default.createElement(_Membership2.FormWrapper, null, /*#__PURE__*/_react.default.createElement(_Membership2.Form, {
    onSubmit: e => submitDonation(e, amountDonate, clientID, cartID, mbshipID, donateLink)
  }, /*#__PURE__*/_react.default.createElement(_Membership2.OuterFieldset, null, /*#__PURE__*/_react.default.createElement(_Membership2.Legend, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    tag: "h3"
  }, "Choose your monthly donation")), /*#__PURE__*/_react.default.createElement(_Membership2.MoneyBuys, null, MoneyBoxes), /*#__PURE__*/_react.default.createElement(_Membership2.FormFieldset, null, /*#__PURE__*/_react.default.createElement(_Membership2.Label, {
    size: "s",
    weight: "500"
  }, "Other amount"), /*#__PURE__*/_react.default.createElement(_Membership2.AmountField, Object.assign({
    step: "0.01",
    name: "membership_amount",
    type: "number",
    inputBorderColor: inputBorderColor,
    label: "\xA3",
    errorMsg: "",
    id: "".concat(mbshipID, "--MoneyBuy-userInput"),
    showLabel: true
  }, rest, {
    max: "25000",
    min: "1",
    value: userInput,
    pattern: "[^[0-9]+([,.][0-9]+)?$]" // this only applies on submit
    ,
    placeholder: "0.00",
    onChange: e => handleChange(e.target.value, otherDescription),
    onClick: e => hightlightInput(e.target.value, otherDescription),
    onKeyPress: e => (0, _Membership.onKeyPress)(e),
    "aria-label": "Input a different amount"
  }))), /*#__PURE__*/_react.default.createElement(_Membership2.Button, {
    as: "input",
    type: "submit",
    value: "Donate"
  }), errorMsg && /*#__PURE__*/_react.default.createElement(_Membership2.Error, {
    tag: "p",
    className: "error--amount"
  }, "Please enter a number between 1 and 25000, and up to 2 decimal places"), moneyBuyCopy && /*#__PURE__*/_react.default.createElement(_Membership2.Copy, {
    as: "p"
  }, moneyBuyCopy))));
};
var _default = exports.default = Signup;