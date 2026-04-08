import React from 'react';
import CookieBanner from './CookieBanner';

export default function CookieBannerExample() {
  return (
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
  );
}
