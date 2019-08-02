import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import CookieBanner from './CookieBanner';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <CookieBanner
      acceptCookie={e => {
        e.preventDefault();
        return 'User accept';
      }}
      denyCookie={e => {
        e.preventDefault();
        return 'User does not accept cookies';
      }}
      cookiePolicyUrl="https://www.comicrelief.com/cookies-policy"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot();
});
