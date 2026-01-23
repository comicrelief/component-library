import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import DonateBanner from './DonateBanner';
import data from './dev-data/data';
import singleData from './dev-data/data-single';

const defaultData = require('../../../styleguide/data/data').defaultData;

it('Monthly donation renders correctly', () => {
  const imageL = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageM = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageS = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };

  const tree = renderWithTheme(
    <DonateBanner
      pageBackgroundColour="grey_light"
      paddingAbove="0rem"
      paddingBelow="2rem"
      donateOrientation="right"
      imageL={imageL}
      imageM={imageM}
      imageS={imageS}
      data={data}
      mbshipID="mbship-1"
      donateLink="https://donation.comicrelief.com/"
      clientID="donate"
      cartID="default-comicrelief"
      title="Donate Now"
      subtitle="Please help us fund life-changing projects in the UK and around the world."
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Single donation renders correctly', () => {
  const imageL = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageM = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageS = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };

  const tree = renderWithTheme(
    <DonateBanner
      pageBackgroundColour="grey_light"
      paddingAbove="2rem"
      paddingBelow="2rem"
      donateOrientation="left"
      imageL={imageL}
      imageM={imageM}
      imageS={imageS}
      data={singleData}
      mbshipID="mbship-1"
      donateLink="https://donation.comicrelief.com/"
      clientID="donate"
      cartID="default-comicrelief"
      title="Donate Now"
      subtitle="Please help us fund life-changing projects in the UK and around the world."
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Single donation with no Money Buys renders correctly', () => {
  const imageL = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageM = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageS = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };

  const tree = renderWithTheme(
    <DonateBanner
      pageBackgroundColour="grey_light"
      paddingAbove="0rem"
      paddingBelow="0rem"
      donateOrientation="right"
      imageL={imageL}
      imageM={imageM}
      imageS={imageS}
      data={singleData}
      mbshipID="mbship-1"
      donateLink="https://donation.comicrelief.com/"
      clientID="donate"
      cartID="default-comicrelief"
      title="Donate Now"
      noMoneyBuys
      subtitle="Please help us fund life-changing projects in the UK and around the world."
      chooseAmountText="Overridden choose amount text"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Text-only donate widget renders correctly', () => {
  const tree = renderWithTheme(
    <DonateBanner
      donateWidgetIsTextOnly
      pageBackgroundColour="grey_light"
      componentBackgroundColour="deep_violet_dark"
      textColor="white"
      paddingAbove="2rem"
      paddingBelow="2rem"
      donateOrientation="right"
      data={data}
      mbshipID="mbship-4"
      donateLink="https://donation.comicrelief.com/"
      clientID="donate"
      cartID="default-comicrelief"
      title="Donate Now"
      noMoneyBuys
      subtitle="Please help us fund life-changing projects in the UK and around the world."
      chooseAmountText="Enter an amount to give"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
