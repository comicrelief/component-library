import Cookies from 'universal-cookie';

/* Add/remove the cookie used to track previous interaction */
const updateCookie = (thisRowID, btnPos, addOrRemove) => {
  const cookies = new Cookies();
  const thisDomain = window.location.hostname;
  let expireDate;

  if (addOrRemove === 'add') {
    expireDate = new Date(); // Current time
    expireDate.setTime(expireDate.getTime() + 0.5 * 60 * 60 * 1000); // Add 30m
  } else {
    // Effectively acts as a removal of the cookie by setting expiry in the past
    expireDate = new Date(1970, 1, 1, 0, 0, 0, 0);
  }

  cookies.set('mship-previous-amount', `${thisRowID}_${btnPos}`, {
    path: '/',
    expires: expireDate,
    domain: thisDomain
  });
};

const checkCookie = () => {
  /*   const cookies = new Cookies();
  const x = cookies.get(); */
  alert('checkCookie');
};

// Sets-up initial DataLayer values
const DataLayerInit = (
  thisRowID,
  thisClientID,
  thisCartID,
  theseMoneyBuys,
  thisDataLayer
) => {
  // Construct object to push to datalayer, staring with manual entry 'Other Amount' field
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

  // Iterate over all moneybuys
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

    return true;
  });

  // Push to the data layer
  thisDataLayer.push(ecommerceObj);
};

/* Call Datalayer events */
const DataLayerUpdate = (
  amount,
  updateType,
  currentMoneyBuyPosition,
  clientId,
  cartId,
  mbshipRowID,
  thisDataLayer
) => {
  const isManualEntry = currentMoneyBuyPosition === '0';

  const ecommerceObj = {
    ecommerce: { currencyCode: 'GBP' },
    event: updateType === 'add' ? 'addToBasket' : 'removeFromBasket'
  };

  const submitNameID = isManualEntry ? 'manual-entry' : `moneybuy-${amount}`;

  // Parse this to a 2-decimal place float and back to a string
  let thisAmount = parseFloat(amount);
  thisAmount = thisAmount.toFixed(2);

  ecommerceObj.ecommerce[updateType] = {
    actionField: { list: `${clientId}_${mbshipRowID}` },
    products: [
      {
        id: submitNameID,
        name: submitNameID,
        price: thisAmount,
        brand: 'membership-payment', // ** CURRENTLY MONTHLY ONLY, NEEDS UPDATE TO ALLOW SINGLE DONATION STUFF
        quantity: 1,
        dimenstion10: 'membership-payment' // ** CURRENTLY MONTHLY ONLY, NEEDS UPDATE TO ALLOW SINGLE DONATION STUFF
      }
    ]
  };

  // Update our 'previously submitted cookie
  if (updateType === 'add') {
    updateCookie(mbshipRowID, currentMoneyBuyPosition, updateType);
  }

  thisDataLayer.push(ecommerceObj);
  return true;
};

export { DataLayerInit, DataLayerUpdate, updateCookie, checkCookie };
