import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import PartnerLink from './PartnerLink';
import logo from '../../../styleguide/assets/picture-2.jpg';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <PartnerLink slug="" link={logo} title="partner's name" />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c7 {
      text-transform: inherit;
    }

    .c3 {
      position: relative;
      width: 100%;
      height: auto;
    }

    .c4 {
      display: block;
      width: 100%;
      height: auto;
      object-fit: none;
    }

    .c2 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c2:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: 700;
    }

    .c0 {
      list-style: none;
    }

    .c6 {
      border: 0;
      -webkit-clip: rect(0 0 0 0);
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    .c1 {
      position: relative;
      border: none;
    }

    .c1:hover {
      border: none;
    }

    .c1:hover .c5 {
      font-size: 1.2rem;
      color: #FFFFFF;
      overflow: inherit;
      -webkit-clip-path: none;
      clip-path: none;
      margin: 0;
      text-align: center;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      -webkit-clip: auto;
      clip: auto;
      top: 50%;
      left: 0;
      width: 100%;
      z-index: 2;
    }

    .c1:hover::after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #E52630;
    }

    <li
      className="c0"
    >
      <a
        className="c1 c2"
        color="red"
        href=""
        target="_self"
        type="standard"
      >
        <div
          className="c3"
          height="auto"
          width="100%"
        >
          <img
            alt="partner's name"
            className="lazyload c4"
            data-src="mock.asset"
            height="auto"
            width="100%"
          />
        </div>
        <span
          className="c5 c6 c7"
          color="inherit"
        >
          Find out more
        </span>
      </a>
    </li>
  `);
});
