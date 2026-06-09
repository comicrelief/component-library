import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import ShareButton from './ShareButton';

it('renders correctly', () => {
  const tree = renderWithTheme(<ShareButton />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c4 {
      text-decoration: none;
      cursor: pointer;
      display: block;
      position: relative;
      transition: opacity 0.2s;
    }

    .c4:hover,
    .c4:focus {
      opacity: 0.6;
    }

    .c5 {
      width: 100%;
    }

    .c0 {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .c1 {
      width: auto;
      margin: 0 1rem 0 0;
    }

    .c1:first-child {
      margin-bottom: 0;
    }

    .c2 {
      width: auto;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .c3 {
      width: 40px;
      height: 40px;
      display: inline-block;
      margin: 0.5rem;
    }

    <div
      className="c0"
    >
      <p
        className="c1"
      >
        Share with:
      </p>
      <ul
        className="c2"
      >
        <li
          className="c3"
        >
          <a
            className="c4"
            data-test="icon-share-button-facebook"
            href="#"
            isHeader={false}
            newStyle={false}
            onClick={[Function]}
            rel="noopener noreferrer"
            role="button"
            target="__blank"
            title="Share on Facebook"
          >
            <img
              alt="comicrelief"
              className="c5"
              invertColor={false}
              src="mock.asset"
            />
          </a>
        </li>
        <li
          className="c3"
        >
          <a
            className="c4"
            data-test="icon-share-button-twitter"
            href="#"
            isHeader={false}
            newStyle={false}
            onClick={[Function]}
            rel="noopener noreferrer"
            role="button"
            target="__blank"
            title="Share on Twitter"
          >
            <img
              alt="comicrelief"
              className="c5"
              invertColor={false}
              src="mock.asset"
            />
          </a>
        </li>
      </ul>
    </div>
  `);
});
