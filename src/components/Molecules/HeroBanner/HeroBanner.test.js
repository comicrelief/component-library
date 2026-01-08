import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import HeroBanner from './HeroBanner';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import variants from './_variants';

const defaultData = require('../../../styleguide/data/data').defaultData;

it('renders "Full Height Media" Hero Banner correctly', () => {
  const tree = renderWithTheme(
    <HeroBanner
      pageBackgroundColour="teal_light"
      imageSet={defaultData.headerBannerLG}
      image={defaultData.headerBannerLG}
      imageLow={defaultData.headerBannerLG}
      imageAltText="Image alt text"
      variant={variants.FULL_HEIGHT}
      ctaText="Test CTA Label"
      ctaLink="http://www.google.com"
      copyLeft
    >
    <Text
      tag="h1"
      color="black"
    >
        Curabitur pretium tincidunt lacus
      </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </HeroBanner>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders "Half Height Media" Hero Banner correctly', () => {
  const tree = renderWithTheme(
    <HeroBanner
      pageBackgroundColour="teal_light"
      imageSet={defaultData.headerBannerLG}
      image={defaultData.headerBannerLG}
      imageLow={defaultData.headerBannerLG}
      imageAltText="Image alt text"
      variant={variants.HALF_HEIGHT}
      ctaText="Test CTA Label"
      ctaLink="http://www.google.com"
      copyLeft={false}
    >
    <Text
      tag="h1"
      color="black"
    >
        Curabitur pretium tincidunt lacus
      </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </HeroBanner>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders "Text Banner" Hero Banner correctly', () => {
  const tree = renderWithTheme(
    <HeroBanner
      pageBackgroundColour="teal_light"
      variant={variants.TEXT_BANNER}
      ctaText="Test CTA Label"
      ctaLink="http://www.google.com"
      copyLeft={false}
    >
    <Text
      tag="h1"
      color="black"
    >
        Curabitur pretium tincidunt lacus
      </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    </HeroBanner>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
