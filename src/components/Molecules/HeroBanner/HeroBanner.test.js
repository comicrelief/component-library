import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import HeroBanner from './HeroBanner';
import Text from '../../Atoms/Text/Text';
import variants from './_variants';

const defaultData = require('../../../styleguide/data/data').defaultData;

it('renders "Full Height Media" Hero Banner correctly', () => {
  const tree = renderWithTheme(
    <HeroBanner
      pageBackgroundColour="teal_light"
      imageSet={defaultData.heroBannerImage}
      image={defaultData.heroBannerImage}
      imageLow={defaultData.heroBannerImage}
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
      imageSet={defaultData.heroBannerImage}
      image={defaultData.heroBannerImage}
      imageLow={defaultData.heroBannerImage}
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

it('renders "Text Banner" Hero Banner correctly', () => {
  const tree = renderWithTheme(
    <HeroBanner
      pageBackgroundColour="teal_light"
      imageSet={defaultData.heroBannerImage}
      image={defaultData.heroBannerImage}
      imageLow={defaultData.heroBannerImage}
      imageAltText="Image alt text"
      variant={variants.FULL_HEIGHT}
      copyLeft
      paddingTop="2rem"
      logoImage={defaultData.heroBannerLogoImageSquare}
    >
      <Text tag="h1">
        Full Height: Copy Left w/Logo (Right on L+)
      </Text>
      <Text tag="p">
        SQUARE-ISH logo shown top-right on Small and Medium breakpoints by design; images for those contexts will be picked to suit. However, as the image change logic happens at CRcom integration level (to avoid loading huge, unused images), we have a simpler, more
        overlappy example here.
      </Text>
    </HeroBanner>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
