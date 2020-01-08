// this function prevent keyboard characters like  e, + , - to be passed on the input
const onKeyPress = event => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  if (/\+|-|e/.test(keyValue)) event.preventDefault();
};

const isAmountValid = input => {
  const reg = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g;
  const isValid = input * 1 >= 1 && input * 1 <= 5000 && reg.test(input);
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
const handleDonateSubmission = (
  amount,
  clientID,
  cartID,
  mbshipID,
  donateLink
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
  window.location.href = `${donateLink}?clientOverride=${clientID}&amount=${amount}&currency=GBP&givingType=monthly&cartId=${cartID}&affiliate=${affiliateValue}&siteurl=${currentpageUrl}&rowID=${mbshipID}`;
};

// Called by UseEffect later on first load
const DataLayerInit = (
  thisRowID,
  thisClientID,
  thisCartID,
  theseMoneyBuys,
  thisDataLayer
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
    console.log('DL:', ecommerceObj);
    return null;
  });

  // Push to the data layer
  alert('pushing to DL');
  thisDataLayer.push(ecommerceObj);
};

export {
  onKeyPress,
  isAmountValid,
  isInputMatchBoxValue,
  handleDonateSubmission,
  DataLayerInit
};
