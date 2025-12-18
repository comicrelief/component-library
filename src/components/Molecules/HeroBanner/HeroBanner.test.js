import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import HeroBanner from './HeroBanner';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

const defaultData = require('../../../styleguide/data/data').defaultData;
it('renders Promo correctly', () => {
  const tree = renderWithTheme(
    <HeroBanner
      backgroundColor="blue_dark"
      imageSet={defaultData.promoImage}
      image={defaultData.promoImage}
      imageAltText=""
      copyLeft={false}
    >
      <Text
        tag="h1"
        color="white"
        size="super"
        family="Anton"
        uppercase
        weight="normal"
      >
        Curabitur pretium tincidunt lacus
      </Text>
      <Text tag="p" color="white" size="s">
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
        turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
      </Text>
      <span>
        <Link href="/" type="button" color="white">
          Show me this
        </Link>
      </span>
    </HeroBanner>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Promo correctly end position', () => {
  const tree = renderWithTheme(
    <HeroBanner
      backgroundColor="blue_dark"
      imageSet={defaultData.promoImage}
      image={defaultData.promoImage}
      imageAltText=""
      copyLeft={false}
      position="end"
    >
      <Text
        tag="h1"
        color="white"
        size="super"
        family="Anton"
        uppercase
        weight="normal"
      >
        Curabitur pretium tincidunt lacus
      </Text>
      <Text tag="p" color="white" size="s">
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
        turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
      </Text>
      <span>
        <Link href="/" type="button" color="white">
          Show me this
        </Link>
      </span>
    </HeroBanner>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
