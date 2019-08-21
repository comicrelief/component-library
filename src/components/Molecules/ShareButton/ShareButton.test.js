import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import ShareButton from './ShareButton';

it('renders correctly', () => {
  const tree = renderWithTheme(<ShareButton />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c4 {
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      display: block;
      -webkit-transition: opacity 0.2s;
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
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    .c1 {
      width: auto;
      margin: 0 1rem 0 0;
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
            href="#"
            onClick={[Function]}
            rel="noopener noreferrer"
            role="button"
            target="__blank"
            title="Share on Facebook"
          >
            <img
              alt="comicrelief"
              className="c5"
              src="mock.asset"
            />
          </a>
        </li>
        <li
          className="c3"
        >
          <a
            className="c4"
            href="#"
            onClick={[Function]}
            rel="noopener noreferrer"
            role="button"
            target="__blank"
            title="Share on Twitter"
          >
            <img
              alt="comicrelief"
              className="c5"
              src="mock.asset"
            />
          </a>
        </li>
      </ul>
    </div>
  `);
});
