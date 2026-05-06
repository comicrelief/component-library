import React from 'react';
import Membership from './Membership';
import data from './dev-data/data';

export default function MembershipExample() {
  return (
    <Membership
      data={data}
      mbshipID="mship-1"
      cartID={data.cartId}
      donateLink="https://donate.comicrelief.com/form/giftaid"
      title="Support our work"
      subtitle="Give a regular gift and help change lives."
      otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
    />
  );
}
