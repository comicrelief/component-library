import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import CardDs from './CardDs';
import { defaultData }  from '../../../styleguide/data/data';import { Internal } from '../../Atoms/Icons/index';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <CardDs
      target="_blank"
      link="/home"
      linkLabel="Find out more"
      imageLow={defaultData.image}
      images={defaultData.images}
      backgroundColor="white"
      height="auto"
      icon={<Internal colour="white" />}
    >
      Text body copy description
    </CardDs>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Column view correctly', () => {
  const tree = renderWithTheme(
    <CardDs
      target="_blank"
      link="/home"
      linkLabel="find out more"
      imageLow={defaultData.image}
      images={defaultData.images}
      imageAltText="Happy man going to work"
      backgroundColor="white"
      height="auto"
      icon={<Internal colour="white" />}
      isCarousel={true}
  >
    Column view
  </CardDs>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
