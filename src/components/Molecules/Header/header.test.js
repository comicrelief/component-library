/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Header from './Header';

import data from './data/data';
import Link from '../../Atoms/Link/Link';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Header
      navItems={data}
      metaIcons={
        <Link color="green" href="/donation">
          Donate
        </Link>
      }
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c5 {
      object-fit: cover;
      width: auto;
      display: block;
      height: auto;
    }

    .c4 {
      display: inline-block;
      width: 50px;
      height: 50px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
    }

    .c3 {
      color: #000;
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      border-bottom: 2px solid;
      border-bottom-color: #000;
    }

    .c0 {
      position: relative;
      background-color: #FFFFFF;
      padding: 0;
      height: 75px;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      height: 100%;
      padding: 0 15px;
      cursor: pointer;
    }

    .c1 span:nth-child(3) {
      left: 2px;
      position: relative;
      height: 100%;
      cursor: pointer;
    }

    .c2 {
      color: transparent;
      border: 0;
    }

    @media (min-width:740px) {
      .c4 {
        width: 60px;
        height: 60px;
      }
    }

    @media (min-width:740px) {
      .c0 {
        height: 90px;
      }
    }

    @media (min-width:1024px) {
      .c1 {
        margin-left: auto;
        margin-right: auto;
      }
    }

    <header
      className="c0"
      role="Banner"
    >
      <div
        className="c1"
      >
        <span>
          <a
            className="c2 c3"
            color="red"
            href="/"
            rel="home"
            target="_self"
            title="Home"
          >
            <div
              className="c4"
              role="Logo"
              rotate={1}
            >
              <img
                alt="Comic Relief logo"
                className="c5"
                src="mock.asset"
              />
            </div>
          </a>
        </span>
      </div>
    </header>
  `);
});
