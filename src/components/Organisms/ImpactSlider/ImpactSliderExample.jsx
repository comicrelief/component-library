import React from 'react';
import ImpactSlider from './ImpactSlider';
import Text from '../../Atoms/Text/Text';
import { testImpactSliderItems } from '../../../styleguide/data/data';

export default function ImpactSliderExample() {
  return (
    <>
      <h3>With opacity animation</h3>
      <ImpactSlider
        heading="Your donations will change lives"
        donateLink="https://donation-staging.spa.comicrelief.com"
        rowID="c7ba23a5-0594-5da4-a14b-8ea87f41db43"
        cartID="to-also-come-from-the-cms"
        items={testImpactSliderItems}
        step={5}
        max={100}
        opacityAnimation={true}
      >
        <Text tag="p" color="black">
          Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.
        </Text>
      </ImpactSlider>

      <h3>Without opacity animation, with default value</h3>
      <ImpactSlider
        heading="Your donations will change lives"
        donateLink="https://donation-staging.spa.comicrelief.com"
        rowID="d7ba23a5-0594-5da4-a14b-8ea87f41db43"
        cartID="to-also-come-from-the-cms"
        items={testImpactSliderItems}
        step={5}
        max={100}
        defaultSliderValue={45}
        backgroundColour="white"
      >
        <Text tag="p" color="black">
          Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.
        </Text>
      </ImpactSlider>
    </>
  );
}
