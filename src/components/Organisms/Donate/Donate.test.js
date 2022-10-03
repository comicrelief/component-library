import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Donate from './Donate';
import data from './dev-data/data';
import singleData from './dev-data/data-single';

const defaultData = require('../../../styleguide/data/data').defaultData;

it('Monthly donation renders correctly', () => {
  const tree = renderWithTheme(
    <Donate
      alt="Background image"
      backgroundColor="blue_dark"
      formAlignRight
      imageLow={defaultData.pictures.imageLow}
      images={defaultData.pictures.images}
      data={data}
      mbshipID="mship-1"
      donateLink="https://donation.comicrelief.com/"
      clientID="donate"
      cartID="default-comicrelief"
      title="Donate Now"
      subtitle="Please help us fund life-changing projects in the UK and around the world."
      otherDescription="will help us fund amazing projects in the UK and around the world."
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Single donation renders correctly', () => {
  const tree = renderWithTheme(
    <Donate
      backgroundColor="blue_dark"
      formAlignRight={false}
      imageLow={defaultData.pictures.imageLow}
      images={defaultData.pictures.images}
      data={singleData}
      mbshipID="mship-1"
      donateLink="https://donation.comicrelief.com/"
      clientID="donate"
      cartID="default-comicrelief"
      title="Donate Now"
      subtitle="Please help us fund life-changing projects in the UK and around the world."
      otherDescription="will help us fund amazing projects in the UK and around the world."
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Single donation with no Money Buys renders correctly', () => {
  const tree = renderWithTheme(
    <Donate
      backgroundColor="blue_dark"
      formAlignRight={false}
      imageLow={defaultData.pictures.imageLow}
      images={defaultData.pictures.images}
      data={singleData}
      mbshipID="mship-1"
      donateLink="https://donation.comicrelief.com/"
      clientID="donate"
      cartID="default-comicrelief"
      title="Donate Now"
      noMoneyBuys
      subtitle="Please help us fund life-changing projects in the UK and around the world."
      otherDescription="will help us fund amazing projects in the UK and around the world."
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
