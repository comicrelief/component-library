import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import TextInputWithDropdown from './TextInputWithDropdown';
import { Dropdown, Container } from './TextInputWithDropdown.style';

it('renders correctly with no value and no options', () => {
  const renderer = renderWithTheme(
    <TextInputWithDropdown
      value=""
      id="text-input-with-dropdown"
      label="Search for bikes"
      name="query"
      onChange={() => {}}
      onSelect={() => {}}
      options={[]}
    />
  );

  expect(renderer.toJSON()).toMatchSnapshot();
  expect(() => renderer.root.findByType(Container).findByType(Dropdown)).toThrow();
});

it('renders correctly with value and no options', () => {
  const renderer = renderWithTheme(
    <TextInputWithDropdown
      value="bikes"
      id="text-input-with-dropdown"
      label="Search for bikes"
      name="query"
      onChange={() => {}}
      onSelect={() => {}}
      options={[]}
    />
  );

  expect(renderer.toJSON()).toMatchSnapshot();
  expect(() => renderer.root.findByType(Container).findByType(Dropdown)).toThrow();
});

it('renders correctly with value and options', () => {
  const renderer = renderWithTheme(
    <TextInputWithDropdown
      value="c"
      id="text-input-with-dropdown"
      label="Search for bikes"
      name="query"
      onChange={() => {}}
      onSelect={() => {}}
      options={['Canyon', 'Cannondale', 'Condor', 'Cube']}
    />
  );

  expect(renderer.toJSON()).toMatchSnapshot();
  expect(renderer.root.findByType(Container).findByType(Dropdown)).toBeTruthy();
});
