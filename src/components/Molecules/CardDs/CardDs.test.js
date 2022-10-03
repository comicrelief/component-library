import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import CardDs from './CardDs';
import { desktopImages }  from '../../../styleguide/data/data';import { Internal } from '../../Atoms/Icons/index';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <CardDs
      target="_blank"
      link="/home"
      linkLabel="Find out more"
      imageLow={desktopImages.image}
      images={desktopImages.images}
      backgroundColor="white"
      height="auto"
      icon={<Internal colour="white" />}
    >
      Text body copy description
    </CardDs>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
