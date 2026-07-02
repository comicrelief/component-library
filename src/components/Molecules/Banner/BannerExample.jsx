import React from 'react';
import Banner from './Banner';
import Text from '../../Atoms/Text/Text';

export default function BannerExample() {
  return (
    <Banner backgroundColor="purple_dark">
      <Text tag="p" color="white" size="m">
        Mental health issues affect 1 in 4 of us in the UK.
        Join now and with your help we can provide vital support for people like Jordan.
        You know what to do.
      </Text>
    </Banner>
  );
}
