import React from 'react';
import Membership from './Membership';
import data from './dev-data/data';
import { defaultData } from '../../../data/data';

export default function MembershipExample() {
  return (
    <div>
      <h3>Form align right</h3>
      <Membership
        alt="Background image"
        backgroundColor="orange_light"
        formAligntRight
        imageLow={defaultData.imageLow}
        images={defaultData.images}
        data={data}
        mbshipID="mship-1"
        donateLink="https://donation.comicrelief.com/"
        cartID="refugee1-365"
        title="Help someone like Jordan see a better tomorrow"
        subtitle="Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Join now and help save lives."
        otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
      />

      <h3>Form align left</h3>
      <Membership
        backgroundColor="orange_light"
        formAligntRight={false}
        imageLow={defaultData.imageLow}
        images={defaultData.images}
        data={data}
        mbshipID="mship-1"
        donateLink="https://donation.comicrelief.com/"
        cartID="refugee1-365"
        title="Help someone like Jordan see a better tomorrow"
        subtitle="Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Join now and help save lives."
        otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
      />
    </div>
  );
}
