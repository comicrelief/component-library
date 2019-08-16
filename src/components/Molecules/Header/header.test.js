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
      text-transform: inherit;
    }

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
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c3:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: 700;
    }

    .c22 {
      display: inline-block;
      padding: 11px 17px;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: pointer;
      background-color: #4ECD57;
      color: #2C0230;
    }

    .c22:hover {
      background-color: #62EF74;
      color: #2C0230;
    }

    .c18 {
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

    .c20 {
      background-color: #2C0230;
      width: 25px;
      margin: 0 auto;
      position: absolute;
      display: block;
      height: 3px;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }

    .c17 {
      top: 0;
      position: relative;
      width: 45px;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      height: 100%;
      text-indent: -9999px;
      border: none;
      background-color: transparent;
      padding: 2px 5px;
    }

    .c17:hover {
      border: none;
      font-weight: inherit;
    }

    .c17 .c19:nth-of-type(2) {
      top: 40%;
    }

    .c17 .c19:nth-of-type(3),
    .c17 .c19:nth-of-type(4) {
      top: 50%;
    }

    .c17 .c19:nth-of-type(5) {
      top: 61%;
    }

    .c6 {
      z-index: 3;
      display: none;
      width: 100%;
      position: absolute;
      top: 75px;
      left: 0;
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
      border: 0;
      padding: 17px 20px;
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
      border: 0;
      padding: 17px 20px;
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
      border: 0;
      padding: 17px 20px;
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
      z-index: 3;
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
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      height: 100%;
      padding: 0 15px;
      cursor: pointer;
      max-width: 1440px;
    }

    .c1 > span:nth-of-type(1) {
      z-index: 3;
    }

    .c1 > span:nth-of-type(2) {
      left: 2px;
      position: relative;
      height: 100%;
      cursor: pointer;
    }

    .c2 {
      z-index: 3;
      color: transparent;
      border: 0;
    }

    .c2:hover {
      border: 0;
    }

    .c21 {
      position: absolute;
      right: 60px;
    }

    .c21 a {
      margin-left: 0.69375rem;
    }

    @media (min-width:740px) {
      .c4 {
        width: 60px;
        height: 60px;
      }
    }

    @media (min-width:1440px) {
      .c22 {
        padding: 16px 30px;
      }
    }

    @media (min-width:1024px) {
      .c17 {
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

    @media (min-width:1024px) {
      .c6 {
        position: relative;
        top: 0;
        display: block;
        width: auto;
        height: 100%;
      }
    }

    @media (min-width:1024px) {
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

    @media (min-width:1024px) {
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

    @media (min-width:1024px) {
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
        -webkit-box-pack: space-around;
        -webkit-justify-content: space-around;
        -ms-flex-pack: space-around;
        justify-content: space-around;
        background-color: #FFFFFF;
      }
    }

    @media (min-width:1024px) {
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

    @media (min-width:1024px) {
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

    @media (min-width:1024px) {
      .c0 {
        height: auto;
      }
    }

    @media (min-width:1024px) {
      .c1 {
        margin-left: auto;
        margin-right: auto;
      }
    }

    @media (min-width:1024px) {
      .c21 {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
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
            rotate={1}
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
                className="c10 c11 c3"
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
                >
                  Fundraising
                </span>
              </a>
              <ul
                className="c12 c13"
                role="menu"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c15 c3"
                    color="red"
                    href="https://www.comicrelief.com/fundraising/pay-in-your-money"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Fundraising
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Red Nose Day
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/join"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Regular donations
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/squads"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Squads
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/fundraising/the-noseys"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      The Noseys
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/fundraising/free-downloads"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
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
                className="c10 c11 c3"
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
                >
                  What your money does
                </span>
              </a>
              <ul
                className="c12 c13"
                role="menu"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c15 c3"
                    color="red"
                    href="https://www.comicrelief.com/what-your-money-does"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      What your money does
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/What-we-do/our-legacy"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
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
                className="c10 c11 c3"
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
                >
                  Schools & youth
                </span>
              </a>
              <ul
                className="c12 c13"
                role="menu"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c15 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Schools & youth
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/primary-schools"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Primary schools
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/secondary-schools"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Secondary schools
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/nurseries"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Nurseries
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/youth"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Youth groups
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/rednoseday/schools/free-downloads"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
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
                className="c10 c11 c3"
                color="red"
                href="https://www.comicrelief.com/funding"
                onClick={[Function]}
                onKeyUp={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                >
                  Funding
                </span>
              </a>
              <ul
                className="c12 c13"
                role="menu"
              >
                <li
                  className="c14"
                  role="none"
                >
                  <a
                    className="c15 c3"
                    color="red"
                    href="https://www.comicrelief.com/funding"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Funding
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/funding/funding-opportunities"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Funding opportunities
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/funding/funding-strategy"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Our strategy
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/funding/eligibility-criteria"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Eligibility
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/funding/applying-for-funding"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Applying for funding
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c16 c3"
                    color="red"
                    href="https://www.comicrelief.com/funding/managing-your-funding"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                    >
                      Managing your funding
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
          className="c17 c3"
          color="red"
          href="#"
          onClick={[Function]}
          role="button"
          target="_self"
          type="standard"
        >
          <span
            className="c18 c7"
            color="inherit"
          >
            Open and close nav menu
          </span>
          <span
            className="c19 c20"
          />
          <span
            className="c19 c20"
          />
          <span
            className="c19 c20"
          />
          <span
            className="c19 c20"
          />
        </a>
        <div
          className="c21"
        >
          <a
            className="c22"
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
