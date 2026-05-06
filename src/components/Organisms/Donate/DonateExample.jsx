import React from 'react';
import Donate from './Donate';
import data from './dev-data/data';
import dataHighValue from './dev-data/data-high-value';
import dataSingle from './dev-data/data-single';

const DONATE_LINK = 'https://donation-staging.spa.comicrelief.com';
const CLIENT_ID = 'comicrelief_2019';

export function DonateExample1() {
  return (
    <Donate
      data={data}
      donateLink={DONATE_LINK}
      cartID={data.cartId}
      clientID={CLIENT_ID}
      mbshipID="mship-1"
    />
  );
}

export function DonateExample3() {
  return (
    <Donate
      data={dataHighValue}
      donateLink={DONATE_LINK}
      cartID={dataHighValue.cartId}
      clientID={CLIENT_ID}
      mbshipID="mship-3"
    />
  );
}

export function DonateExample5() {
  return (
    <Donate
      data={dataSingle}
      donateLink={DONATE_LINK}
      cartID={dataSingle.cartId}
      clientID={CLIENT_ID}
      mbshipID="mship-5"
    />
  );
}

export function DonateExample7() {
  return (
    <Donate
      data={data}
      donateLink={DONATE_LINK}
      cartID={data.cartId}
      clientID={CLIENT_ID}
      mbshipID="mship-7"
      noMoneyBuys
    />
  );
}

export function DonateExample9() {
  return (
    <Donate
      data={data}
      donateLink={DONATE_LINK}
      cartID={data.cartId}
      clientID={CLIENT_ID}
      mbshipID="mship-9"
      noMoneyBuys
      otherAmountValue={567.89}
    />
  );
}
