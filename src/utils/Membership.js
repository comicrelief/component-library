/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// this function prevent keyboard characters like  e, + , - to be passed on the input
const onKeyPress = event => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  if (/\+|-|e/.test(keyValue)) event.preventDefault();
};

const isAmountValid = input => {
  const reg = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g;
  const isValid = input * 1 >= 1 && input * 1 <= 20000 && reg.test(input);
  return isValid;
};

const getUrlParameter = name => {
  const text = name.replace(/\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${text}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  const param = results === null
    ? 'generic'
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
  return param;
};

const isInputMatchBoxValue = (
  moneyBoxes,
  selectMoneyBuy,
  setAmountDonate,
  input
) => {
  const inputToNum = input * 1;
  return Object.keys(moneyBoxes).map(box => (
    moneyBoxes[box].value === inputToNum
      && (selectMoneyBuy(moneyBoxes[box].description, moneyBoxes[box].value),
      setAmountDonate(input))
  ));
};

// This function is still in progress
const handleDonateSubmission = (
  amount,
  clientID,
  cartID,
  mbshipID,
  donateLink,
  givingType = 'monthly'
) => {
  let currentpageUrl = window.location.href;
  const affiliateValue = getUrlParameter(currentpageUrl);
  const reg = /[#?|[\]\\]/g;
  if (currentpageUrl.match(reg) !== null) {
    const thisMatch = currentpageUrl.match(reg)[0];
    currentpageUrl = currentpageUrl.substring(
      0,
      currentpageUrl.indexOf(thisMatch)
    );
  }
  const givingTypeUrl = givingType === 'single' ? 'single' : 'monthly';

  console.log('UPDATE 6', currentpageUrl, 'affiliateValue', affiliateValue);

  const forwardingURL = `${donateLink}?clientOverride=${clientID}&amount=${amount}&currency=GBP&givingType=${givingTypeUrl}&cartId=${cartID}&affiliate=${affiliateValue}&siteurl=${currentpageUrl}&rowID=${mbshipID}`;

  window.location.replace(forwardingURL);
};

export {
  onKeyPress,
  isAmountValid,
  isInputMatchBoxValue,
  handleDonateSubmission
};
