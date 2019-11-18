import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import EmailSignUp from './EmailSignUp';
import RichText from '../../Atoms/RichText/RichText';

it('renders correctly', () => {
  const top =
    '<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const success =
    '<h1> Success Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const privacy =
    'check <a href="https://www.comicrelief.com/privacy-notice">Privacy policy</a>';
  const tree = renderWithTheme(
    <>
      <EmailSignUp
        title="sign up letter"
        topCopy={<RichText markup={top} />}
        successCopy={<RichText markup={success} />}
        isSuccess={false}
        errorMsg=""
        buttonColor="teal"
        privacyCopy={<RichText markup={privacy} />}
        subscribe={() => 'Done'}
      />
      <EmailSignUp
        title="sign up letter"
        topCopy={<RichText markup={top} />}
        successCopy={<RichText markup={success} />}
        isSuccess
        errorMsg=""
        backgroundColor="red"
        privacyCopy={<RichText markup={privacy} />}
        subscribe={() => 'Done'}
      />
    </>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
