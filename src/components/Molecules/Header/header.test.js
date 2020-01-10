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
      text-transform: inherit;
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
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c2:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
    }

    .c17 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #2C0230;
      font-weight: normal;
    }

    .c17:hover {
      color: #2C0230;
    }

    .c23 {
      display: inline-block;
      padding: 1rem 1.5rem;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 2rem;
      cursor: pointer;
      background-color: #4ECD57;
      color: #2C0230;
    }

    .c23:hover {
      background-color: #62EF74;
      color: #2C0230;
    }

    .c19 {
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

    .c21 {
      background-color: #2C0230;
      margin: 0 auto;
    }

    .c18 {
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

    .c18:hover {
      border: none;
      font-weight: inherit;
    }

    .c18 .c20 {
      position: relative;
    }

    .c18 .c20,
    .c18 .c20::before,
    .c18 .c20::after {
      width: 25px;
      height: 3px;
      display: inline-block;
    }

    .c18 .c20::before,
    .c18 .c20::after {
      content: '';
      position: absolute;
      left: 0;
      background-color: currentColor;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    .c18 .c20::before {
      top: -0.5rem;
    }

    .c18 .c20::after {
      top: 0.5rem;
    }

    .c18:hover .c20,
    .c18:hover .c20::before,
    .c18:hover .c20::after {
      background-color: #918791;
    }

    .c18:hover .c20::before {
      top: -0.6rem;
    }

    .c18:hover .c20::after {
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

    .c13 {
      display: none;
      padding: 0;
      position: relative;
      list-style: none outside;
      left: 0;
      top: 0;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      max-height: 400px;
      background-color: #2C0230;
    }

    .c14 {
      padding: 0;
      height: 100%;
      width: 100%;
    }

    .c14:hover {
      background-color: #3e1c43;
    }

    .c14:hover span {
      border-bottom: 0;
      padding-bottom: 2px;
      color: #FFFFFF;
    }

    .c16 {
      display: inline-block;
      border: 0;
      padding: 17px 20px;
      line-height: 1.3rem;
      height: 46px;
      font-weight: 700;
      width: 100%;
      color: #2C0230;
      padding: 14px 21px;
      color: #FFFFFF;
      height: auto;
      position: relative;
    }

    .c16:hover {
      border: 0;
      color: #2C0230;
      font-weight: inherit;
    }

    .c15 {
      display: inline-block;
      border: 0;
      padding: 17px 20px;
      line-height: 1.3rem;
      height: 46px;
      font-weight: 700;
      width: 100%;
      color: #2C0230;
      padding: 14px 21px;
      color: #FFFFFF;
      height: auto;
      position: relative;
      padding: 26px 21px;
    }

    .c15:hover {
      border: 0;
      color: #2C0230;
      font-weight: inherit;
    }

    .c15::after {
      content: '';
      position: absolute;
      width: 14px;
      border-bottom: 2px solid #FFFFFF;
      left: 12px;
      top: auto;
      bottom: 10px;
      margin: 0 10px;
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

    .c22 {
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

    .c22 > div {
      height: 35px;
      width: auto;
      display: inline-block;
    }

    .c22 > div > a {
      height: inherit;
      width: inherit;
      margin-left: 0.6875rem;
    }

    .c22 > div > a img {
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

    @media (min-width:1150px) {
      .c18 {
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
      .c13 {
        display: none;
        display: none;
        top: 90px;
        position: absolute;
        padding: 0 0 20px;
        width: 250px;
        height: auto;
      }
    }

    @media (min-width:1150px) {
      .c15::before {
        display: block;
        position: absolute;
        content: '';
        left: 34px;
        width: 10px;
        height: 10px;
        border: 11px solid transparent;
        border-bottom-color: #2C0230;
        top: -22px;
      }

      .c15:hover::before {
        border-bottom-color: #3e1c43;
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

      .c11:focus + .c12 {
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

      .c9:hover > .c12,
      .c9:focus-within > .c12 {
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
        border-bottom: 2px solid #2C0230;
        padding-bottom: 2px;
      }

      .c9:hover .c12 {
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
      .c22 {
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
          title="Home"
          type="standard"
        >
          <div
            aria-label="logo"
            className="c4"
            rotate={0}
          >
            <img
              alt="Comic Relief logo"
              aria-label="logo"
              className="c5"
              src="mock.asset"
            />
          </div>
        </a>
        <nav
          aria-labelledby="main-menu"
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
                onClick={[Function]}
                onKeyUp={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Fundraising
                </span>
              </a>
              <ul
                className="c12 c13"
                role="list"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c2 c15"
                    color="red"
                    href="https://www.comicrelief.com/fundraising/pay-in-your-money"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Fundraising
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Red Nose Day
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/join"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Regular donations
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/squads"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Squads
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/fundraising/the-noseys"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      The Noseys
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/fundraising/free-downloads"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Free downloads
                    </span>
                  </a>
                </li>
              </ul>
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
                onClick={[Function]}
                onKeyUp={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
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
                onClick={[Function]}
                onKeyUp={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  What your money does
                </span>
              </a>
              <ul
                className="c12 c13"
                role="list"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c2 c15"
                    color="red"
                    href="https://www.comicrelief.com/what-your-money-does"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      What your money does
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/What-we-do/our-legacy"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Our legacy
                    </span>
                  </a>
                </li>
              </ul>
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
                onClick={[Function]}
                onKeyUp={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Schools & youth
                </span>
              </a>
              <ul
                className="c12 c13"
                role="list"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c2 c15"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Schools & youth
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/primary-schools"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Primary schools
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/secondary-schools"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Secondary schools
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/nurseries"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Nurseries
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/youth"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Youth groups
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/free-downloads"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Free downloads
                    </span>
                  </a>
                </li>
              </ul>
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
                onClick={[Function]}
                onKeyUp={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  I am single menu link
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
                onClick={[Function]}
                onKeyUp={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Test whitelisted external link
                </span>
              </a>
              <ul
                className="c12 c13"
                role="list"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c2 c15"
                    color="red"
                    href="https://www.sportrelief.com"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Test whitelisted external link
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="https://bing.com"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Test non-whitelisted external link
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="/test-ref-path-1"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Link comp: URL and Ref
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="/test-ref-path-2"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Link comp: only Ref
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c2 c16"
                    color="red"
                    href="/test-url"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Link comp: only URL
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <a
          aria-haspopup="true"
          aria-label="Open and close Navigation Menu"
          className="c17 c18"
          color="red"
          href="#"
          onClick={[Function]}
          role="button"
          target="_self"
          type="standard"
        >
          <span
            className="c7 c19"
            color="inherit"
            size="s"
          >
            Open and close nav menu
          </span>
          <span
            className="c20 c21"
          />
        </a>
        <div
          className="c22"
        >
          <a
            className="c23"
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
