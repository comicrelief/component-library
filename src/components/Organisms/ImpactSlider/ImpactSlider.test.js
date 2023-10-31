import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import ImpactSlider from './ImpactSlider';
import Text from '../../Atoms/Text/Text';

const { testImpactSliderItems} = require('../../../styleguide/data/data');

it('renders Impact Slider correctly', () => {

  const tree = renderWithTheme(
  <ImpactSlider
    heading="Your donations will change lives"
    donateLink="https://donation-staging.spa.comicrelief.com"
    rowID="to-come-from-the-cms"
    cartID="to-also-come-from-the-cms"
    items={testImpactSliderItems}
    step={5}
    max={100}
    >
      <Text tag="p" color="black">
        Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.
      </Text>
    </ImpactSlider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

