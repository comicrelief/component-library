import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import ExpandedButton from './ExpandedButton';

const options = [
  {
    id: 'option-one',
    title: 'Option one',
    description: 'The first option description',
    icon: 'https://example.com/icon.svg'
  },
  {
    id: 'option-two',
    title: 'Option two',
    description: 'The second option description'
  }
];

it('renders correctly', () => {
  const tree = renderWithTheme(
    <ExpandedButton options={options} selectedId="option-one" onSelect={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
