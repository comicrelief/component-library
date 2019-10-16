// this function prevent keyboard characters like  e, + , - to be pass on the input
const onKeyPress = event => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  if (/\+|-|e/.test(keyValue)) event.preventDefault();
};

const isAmountValid = input => {
  const reg = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g;
  const isValid = input * 1 > 0 && input * 1 <= 5000 && reg.test(input);
  return isValid;
};

const getUrlParameter = name => {
  const text = name.replace(/\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${text}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  const param =
    results === null
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
  return Object.keys(moneyBoxes).map(box => {
    return (
      moneyBoxes[box].value === inputToNum &&
      (selectMoneyBuy(moneyBoxes[box].description, moneyBoxes[box].value),
      setAmountDonate(input))
    );
  });
};

// This function is still in progress
const handleDonateSubmission = (amount, clientID, cartID, mbshipID) => {
  const donateLink = 'https://donation.comicrelief.com/';
  const affiliateValue = getUrlParameter(window.location.href);
  const currentpageUrl = window.location.href;
  const urlString =
    currentpageUrl.indexOf('?') > -1
      ? currentpageUrl.substring(0, currentpageUrl.indexOf('?'))
      : currentpageUrl;
  window.location.href = `${donateLink}?clientOverride=${clientID}&amount=${amount}&currency=GBP&givingType=monthly&cartId=${cartID}&affiliate=${affiliateValue}&siteurl=${urlString}&rowID=${mbshipID}`;
};

export {
  onKeyPress,
  isAmountValid,
  isInputMatchBoxValue,
  handleDonateSubmission
};
