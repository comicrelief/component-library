import React from 'react';
import CookieBanner from './CookieBanner';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function CookieBannerExample() {
  return (
    <ExampleContainer>
      <CookieBanner
        acceptCookie={e => {
          e.preventDefault();
          console.log('User accept');
        }}
        denyCookie={e => {
          e.preventDefault();
          console.log('User does not accept cookies');
        }}
        cookiePolicyUrl="https://www.comicrelief.com/cookies-policy"
      />
    </ExampleContainer>
  );
}
