import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import SecurePaymentModal from './SecurePaymentModal';

it('renders default blue_light variant', () => {
  const renderer = renderWithTheme(<SecurePaymentModal />);
  expect(renderer.toJSON()).toMatchSnapshot();
});

it('renders coral_light variant', () => {
  const renderer = renderWithTheme(<SecurePaymentModal backgroundColor="coral_light" />);
  expect(renderer.toJSON()).toMatchSnapshot();
});

it('calls onClose when the close button is clicked', () => {
  const onClose = jest.fn();
  const renderer = renderWithTheme(<SecurePaymentModal onClose={onClose} />);
  renderer.root.findByProps({ 'aria-label': 'Close' }).props.onClick();
  expect(onClose).toHaveBeenCalledTimes(1);
});
