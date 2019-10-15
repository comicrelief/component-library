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
    markup={'<p>Thanks! Your first email will be with you shortly</p>'}
  />
);

it('renders correctly', () => {
  const tree = renderWithTheme(
    <div>
      <HeaderEsuWithIcon
        title={title}
        topCopy={topCopy}
        privacyCopy={privacyCopy}
        successCopy={successCopy}
      />
    </div>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      display: block;
      -webkit-transition: opacity 0.2s;
      transition: opacity 0.2s;
    }

    .c1:hover,
    .c1:focus {
      opacity: 0.6;
    }

    .c2 {
      width: 100%;
    }

    .c0 {
      width: 35px;
      height: 35px;
      display: inline-block;
    }

    <div>
      <div
        className="c0"
      >
        <a
          className="c1"
          href="#"
          onClick={[Function]}
          rel="noopener noreferrer"
          role="button"
          target="__blank"
          title="Sign up for emails"
        >
          <img
            alt="comicrelief"
            className="c2"
            src="mock.asset"
          />
        </a>
      </div>
    </div>
  `);
});
