import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import HeaderEsuWithIcon from './HeaderEsuWithIcon';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <div>
      <HeaderEsuWithIcon
        link="/search"
        iconType="Search"
        title="Click here to search"
      />
      <HeaderEsuWithIcon
        link="https://www.facebook.com"
        iconType="Email"
        title="Sign up for our emails"
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
          href="/search"
          onClick={[Function]}
          rel="noopener noreferrer"
          role="button"
          target="__blank"
          title="Click here to search"
        >
          <img
            alt="comicrelief"
            className="c2"
            src="mock.asset"
          />
        </a>
      </div>
      <div
        className="c0"
      >
        <a
          className="c1"
          href="https://www.facebook.com"
          onClick={[Function]}
          rel="noopener noreferrer"
          role="button"
          target="__blank"
          title="Sign up for our emails"
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
