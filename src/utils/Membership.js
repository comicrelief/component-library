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

const donate = (e, amount) => {
  e.preventDefault();
  const donateLink = 'https://donation.comicrelief.com/';
  const affiliateValue = getUrlParameter(window.location.href);
  const currentpageUrl = window.location.href;
  const urlString =
    currentpageUrl.indexOf('?') > -1
      ? currentpageUrl.substring(0, currentpageUrl.indexOf('?'))
      : currentpageUrl;
  // window.location.href = (donationLink + "?clientOverride=" + clientId + "&amount=" + amount + "&currency=" + currency + "&givingType=" + givingType + "&cartId=" + cartId + "&affiliate=" + affiliateValue + "&siteurl=" + url_string + '&rowID=' + rowID + '&moneybuy=' + submitNameID
  console.log(urlString, affiliateValue, amount);
  window.location.href = `${donateLink}?clientOverride=67888&amount=${amount}&currency=£&givingType=monthly&cartId=00000&affiliate=${affiliateValue}&siteurl=${urlString}`;
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
export { onKeyPress, isAmountValid, isInputMatchBoxValue, donate };
