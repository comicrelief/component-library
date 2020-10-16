import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import HeaderEsuWithIcon from './HeaderEsuWithIcon';
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={"<p>Get regular email updates and info on what we're up to!</p>"}
  />
);
const privacyCopy = (
  <RichText
    markup={
      '<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>'
    }
  />
);
const successCopy = (
  <RichText
    markup="<p>Thanks! Your first email will be with you shortly</p>"
  />
);

it('renders correctly with modal closed', () => {
  const tree = renderWithTheme(
    <div>
      <HeaderEsuWithIcon
        title={title}
        topCopy={topCopy}
        privacyCopy={privacyCopy}
        successCopy={successCopy}
        isSuccess={false}
        errorMsg=""
        subscribe={() => 'Done'}
        validate={() => true}
      />
    </div>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with modal open', () => {
  const tree = renderWithTheme(
    <div>
      <HeaderEsuWithIcon
        title={title}
        topCopy={topCopy}
        privacyCopy={privacyCopy}
        successCopy={successCopy}
        isESUOpen
        isSuccess={false}
        errorMsg=""
        subscribe={() => 'Done'}
        validate={() => true}
      />
    </div>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with error message', () => {
  const tree = renderWithTheme(
    <div>
      <HeaderEsuWithIcon
        title={title}
        topCopy={topCopy}
        privacyCopy={privacyCopy}
        successCopy={successCopy}
        isESUOpen
        isSuccess={false}
        errorMsg="invalid email"
        subscribe={() => 'Done'}
        validate={() => true}
      />
    </div>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with success message', () => {
  const tree = renderWithTheme(
    <div>
      <HeaderEsuWithIcon
        title={title}
        topCopy={topCopy}
        privacyCopy={privacyCopy}
        successCopy={successCopy}
        isESUOpen
        isSuccess
        errorMsg=""
        subscribe={() => 'Done'}
        validate={() => true}
      />
    </div>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
