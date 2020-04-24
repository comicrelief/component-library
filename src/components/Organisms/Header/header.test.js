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
        <Link color="green" type="button" href="/donation">
          Donate
        </Link>
      }
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c7 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c12 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c5 {
      object-fit: cover;
      width: auto;
      display: block;
      height: auto;
    }

    .c4 {
      display: inline-block;
      z-index: 3;
      width: 50px;
      height: 50px;
      -webkit-transform: inherit;
      -ms-transform: inherit;
      transform: inherit;
    }

    .c2 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #000000;
      border-bottom: 2px solid #000000;
      font-weight: normal;
    }

    .c2:hover {
      color: #000000;
      border-bottom: 2px solid #000000;
    }

    .c13 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #000000;
      font-weight: normal;
    }

    .c13:hover {
      color: #000000;
    }

    .c19 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      position: relative;
      padding: 0.5rem 1.25rem;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      font-size: 1rem;
      border-radius: 2rem;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      height: 3.125rem;
      width: 100%;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      cursor: pointer;
      background-color: #49D267;
      color: #000000;
    }

    .c19:hover {
      background-color: #F4F2F4;
      color: #000000;
    }

    .c15 {
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

    .c17 {
      background-color: #2C0230;
      margin: 0 auto;
    }

    .c14 {
      z-index: 2;
      -webkit-order: 50;
      -ms-flex-order: 50;
      order: 50;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      text-indent: -9999px;
      background-color: transparent;
      height: 100%;
      width: 45px;
      left: 5px;
      cursor: pointer;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    .c14:hover {
      border: none;
      font-weight: inherit;
    }

    .c14 .c16 {
      position: relative;
    }

    .c14 .c16,
    .c14 .c16::before,
    .c14 .c16::after {
      width: 25px;
      height: 3px;
      display: inline-block;
    }

    .c14 .c16::before,
    .c14 .c16::after {
      content: '';
      position: absolute;
      left: 0;
      background-color: currentColor;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    .c14 .c16::before {
      top: -0.5rem;
    }

    .c14 .c16::after {
      top: 0.5rem;
    }

    .c14:hover .c16,
    .c14:hover .c16::before,
    .c14:hover .c16::after {
      background-color: #969598;
    }

    .c14:hover .c16::before {
      top: -0.6rem;
    }

    .c14:hover .c16::after {
      top: 0.6rem;
    }

    .c6 {
      display: none;
      width: 100%;
      position: absolute;
      top: 75px;
      left: 0;
      z-index: 4;
    }

    .c6 > h2 {
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

    .c8 {
      background-color: #f0f0f0;
      list-style: none outside;
      padding: 0;
      margin: 0;
    }

    .c11 {
      display: inline-block;
      border: 0;
      padding: 17px 20px;
      line-height: 1.3rem;
      height: 46px;
      font-weight: 700;
      width: 100%;
      color: #2C0230;
    }

    .c11:hover {
      border: 0;
      color: #2C0230;
      font-weight: inherit;
    }

    .c9 {
      z-index: 2;
      position: relative;
      font-weight: 700;
    }

    .c9:hover {
      background-color: #86E4E9;
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
      height: 100%;
      padding: 0 12px;
      cursor: pointer;
      max-width: 1440px;
    }

    .c3 {
      z-index: 3;
      color: transparent;
      margin-right: auto;
      border: 0;
    }

    .c3:hover {
      border: 0;
    }

    .c18 {
      width: auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c18 > div {
      height: 35px;
      width: auto;
      display: inline-block;
    }

    .c18 > div > a {
      height: inherit;
      width: inherit;
      margin-left: 0.6875rem;
    }

    .c18 > div > a img {
      padding: 5px;
      height: inherit;
      width: inherit;
    }

    @media (min-width:1150px) {
      .c4 {
        width: 60px;
        height: 60px;
      }
    }

    @media (min-width:740px) {
      .c19 {
        width: auto;
      }
    }

    @media (min-width:1150px) {
      .c14 {
        display: none;
      }
    }

    @media (min-width:740px) {
      .c6 {
        width: 50%;
        right: 0;
        left: inherit;
      }
    }

    @media (min-width:1150px) {
      .c6 {
        z-index: 2;
        position: relative;
        top: 0;
        display: block;
        margin: 0 10px;
        width: auto;
        height: 100%;
      }
    }

    @media (min-width:1150px) {
      .c8 {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        background-color: #FFFFFF;
      }
    }

    @media (min-width:1150px) {
      .c11 {
        padding: 10px 5px;
        height: auto;
      }

      .c11:focus + .Navstyle__SubNavMenu-sc-1ss3uk2-2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }
    }

    @media (min-width:1150px) {
      .c9 {
        margin: 0 4px;
        padding: 25px 0;
      }

      .c9:hover > .Navstyle__SubNavMenu-sc-1ss3uk2-2,
      .c9:focus-within > .Navstyle__SubNavMenu-sc-1ss3uk2-2 {
        visibility: visible;
        opacity: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c9:hover {
        background-color: transparent;
        z-index: 3;
      }

      .c9:hover .c10 span {
        border-bottom: 2px solid #000000;
        padding-bottom: 2px;
      }

      .c9:hover .Navstyle__SubNavMenu-sc-1ss3uk2-2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }
    }

    @media (min-width:1150px) {
      .c0 {
        height: auto;
      }
    }

    @media (min-width:1150px) {
      .c1 {
        margin: 0 auto;
      }
    }

    @media (min-width:1150px) {
      .c18 {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #FFFFFF;
        margin-right: 0px;
        right: 0px;
      }
    }

    <header
      className="c0"
      role="banner"
    >
      <div
        className="c1"
      >
        <a
          className="c2 c3"
          color="red"
          href="/"
          target="_self"
          title="Go to Comic Relief homepage"
          type="standard"
        >
          <div
            className="c4"
            rotate={0}
          >
            <img
              alt="Comic Relief logo"
              className="c5"
              src="mock.asset"
            />
          </div>
        </a>
        <nav
          aria-label="main-menu"
          className="c6"
          role="navigation"
        >
          <h2
            className="c7"
            color="inherit"
            id="main-menu"
            size="s"
          >
            Main navigation
          </h2>
          <ul
            className="c8"
            role="menubar"
          >
            <li
              className="c9"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c2 c10 c11"
                color="red"
                href="https://www.comicrelief.com/fundraising/pay-in-your-money"
                onKeyUp={[Function]}
                rel={false}
                target="_self"
                type="standard"
              >
                <span
                  className="c12"
                  color="inherit"
                  size="s"
                >
                  Fundraising
                </span>
              </a>
            </li>
            <li
              className="c9"
              role="none"
            >
              <a
                aria-haspopup={null}
                className="c2 c10 c11"
                color="red"
                href="https://www.comicrelief.com/rednoseday/schools"
                onKeyUp={[Function]}
                rel={false}
                target="_self"
                type="standard"
              >
                <span
                  className="c12"
                  color="inherit"
                  size="s"
                >
                  Single menu link
                </span>
              </a>
            </li>
            <li
              className="c9"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c2 c10 c11"
                color="red"
                href="https://www.comicrelief.com/what-your-money-does"
                onKeyUp={[Function]}
                rel={false}
                target="_self"
                type="standard"
              >
                <span
                  className="c12"
                  color="inherit"
                  size="s"
                >
                  What your money does
                </span>
              </a>
            </li>
            <li
              className="c9"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c2 c10 c11"
                color="red"
                href="https://www.comicrelief.com/rednoseday/schools"
                onKeyUp={[Function]}
                rel={false}
                target="_self"
                type="standard"
              >
                <span
                  className="c12"
                  color="inherit"
                  size="s"
                >
                  Schools & youth
                </span>
              </a>
            </li>
            <li
              className="c9"
              role="none"
            >
              <a
                aria-haspopup={null}
                className="c2 c10 c11"
                color="red"
                href="https://shop.comicrelief.com"
                onKeyUp={[Function]}
                rel="noopener"
                target="_blank"
                type="standard"
              >
                <span
                  className="c12"
                  color="inherit"
                  size="s"
                >
                  Shop
                </span>
              </a>
            </li>
            <li
              className="c9"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c2 c10 c11"
                color="red"
                href="https://www.sportrelief.com"
                onKeyUp={[Function]}
                rel={false}
                target="_self"
                type="standard"
              >
                <span
                  className="c12"
                  color="inherit"
                  size="s"
                >
                  Test whitelisted external link
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <a
          aria-haspopup="true"
          aria-label="Open and close Navigation Menu"
          className="c13 c14"
          color="red"
          href="#"
          onClick={[Function]}
          role="button"
          target="_self"
          type="standard"
        >
          <span
            className="c12 c15"
            color="inherit"
            size="s"
          >
            Open and close nav menu
          </span>
          <span
            className="c16 c17"
          />
        </a>
        <div
          className="c18"
        >
          <a
            className="c19"
            color="green"
            href="/donation"
            target="_self"
            type="button"
          >
            Donate
          </a>
        </div>
      </div>
    </header>
  `);
});
