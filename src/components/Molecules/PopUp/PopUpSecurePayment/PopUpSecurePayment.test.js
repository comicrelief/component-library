import React from 'react';
import 'jest-styled-components';
import { act } from 'react-test-renderer';

import renderWithTheme from '../../../../../tests/hoc/shallowWithTheme';
import PopUpSecurePayment from './PopUpSecurePayment';

it('renders default blue_light variant', () => {
  const renderer = renderWithTheme(<PopUpSecurePayment />);
  expect(renderer.toJSON()).toMatchSnapshot();
});

it('renders coral_light variant', () => {
  const renderer = renderWithTheme(<PopUpSecurePayment backgroundColor="coral_light" />);
  expect(renderer.toJSON()).toMatchSnapshot();
});

it('starts collapsed, opens on row click and closes again with the cross', () => {
  jest.useFakeTimers();
  const renderer = renderWithTheme(<PopUpSecurePayment />);
  expect(renderer.root.findAll(node => node.type === 'button' && node.props['aria-label'] === 'Close')).toHaveLength(0);

  act(() => {
    renderer.root.find(node => node.type === 'button' && node.props['aria-expanded'] === 'false').props.onClick();
  });
  expect(renderer.root.findAll(node => node.type === 'button' && node.props['aria-label'] === 'Close')).toHaveLength(1);

  act(() => {
    renderer.root.find(node => node.type === 'button' && node.props['aria-label'] === 'Close').props.onClick();
  });

  // Wait for the 200ms exit animation before the popup unmounts
  act(() => {
    jest.advanceTimersByTime(200);
  });
  expect(renderer.root.findAll(node => node.type === 'button' && node.props['aria-label'] === 'Close')).toHaveLength(0);
  expect(renderer.root.find(node => node.type === 'button' && node.props['aria-expanded'] === 'false')).toBeTruthy();
});
