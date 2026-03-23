import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import InfoMessage from './InfoMessage';
import Link from '../Link/Link';

it('renders default blue_light variant', () => {
  const renderer = renderWithTheme(
    <InfoMessage
      title="Are you trying to pay in your fundraising money?"
      message="If you are, please select the ‘Pay in Fundraising’ tab above. If not, please continue with your donation."
    />
  );
  expect(renderer.toJSON()).toMatchSnapshot();
});

it('renders coral_light variant with message containing a link', () => {
  const renderer = renderWithTheme(
    <InfoMessage
      title="Please check your donation"
      backgroundColor="coral_light"
      message={
        <>
          You can only donate between £1.00 and £25,000.00 at a time. If you need help,{' '}
          <Link href="/contact" type="standard">
            contact us
          </Link>
          .
        </>
      }
    />
  );
  expect(renderer.toJSON()).toMatchSnapshot();
});
