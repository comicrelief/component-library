import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Text from '../../Atoms/Text/Text';

it('renders Single Message with Image correctly', () => {
  const tree = renderWithTheme(
    <Text tag="h1" color="white" size="xxl">
      title
    </Text>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
