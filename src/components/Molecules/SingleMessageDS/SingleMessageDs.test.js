import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SingleMessageDs from './SingleMessageDs';
import Text from '../../Atoms/Text/Text';
import Download from '../../Atoms/Icons/Download';
import { defaultData } from '../../../styleguide/data/data';
it('renders correctly', () => {
  const tree = renderWithTheme(
    <SingleMessageDs
      target="_blank"
      link="/home"
      linkLabel="Check out the shop"
      ctaBgColor="blue_dark"
      backgroundColor="white"
      imageDirection="right"
      imageLow={defaultData.image}
      images={defaultData.images}
      imageAltText="Happy man going to work"
      subtitle="Subtitle"
      title="Heading Line 1 Heading Line 2"
      height="auto"
      imageLeft
      linkIcon={<Download />}
    >
      <Text tag="p">
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
