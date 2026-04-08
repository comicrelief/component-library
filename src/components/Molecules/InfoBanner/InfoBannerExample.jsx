import React from 'react';
import InfoBanner from './InfoBanner';

export default function InfoBannerExample() {
  return (
    <InfoBanner
      title="Hello There"
      amount="£ 2,000,000"
      theme="Be happy"
      themeLink="cr.com"
      startDate="1st June 2010"
      endDate="1st June 2020"
      country="Uk"
    />
  );
}
