import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Checkbox from './Checkbox';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <>
      <Checkbox name="sport" value="Tenis" label="Tenis" />
      <Checkbox name="sport" value="Handball" label="Handball" />
    </>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot();
});
