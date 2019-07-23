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
      color: #000;
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      border-bottom: 2px solid;
      border-bottom-color: #000;
    }

    .c18 {
      display: inline-block;
      padding: 11px 17px;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: point;
      background-color: #4ECD57;
      background: #4ECD57;
      color: #030e1a;
    }

    .c18:hover {
      background: #62EF74;
    }

    .c14 {
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

    .c16 {
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

    .c13 {
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

    .c13 .c15:nth-of-type(2) {
      top: 40%;
    }

    .c13 .c15:nth-of-type(3),
    .c13 .c15:nth-of-type(4) {
      top: 50%;
    }

    .c13 .c15:nth-of-type(5) {
      top: 61%;
    }

    .c10 {
      border: 0;
      padding: 17px 20px;
      height: 46px;
      width: 100%;
      color: #2C0230;
    }

    .c6 {
      display: none;
      width: 100%;
      position: absolute;
      top: 80px;
      left: 0;
    }

    .c6 > h2 {
      visibility: border:0;
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

    .c9 {
      position: relative;
      font-weight: 700;
    }

    .c9:hover {
      background-color: #86E4E9;
    }

    .c9 ul {
      display: none;
    }

    .c11 {
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

    .c12 {
      padding: 0;
      height: 100%;
      width: 100%;
    }

    .c12:first-child a {
      padding: 26px 21px;
      height: auto;
      position: relative;
    }

    .c12:first-child a::after {
      position: absolute;
      width: 14px;
      border-bottom: 2px solid #FFFFFF;
      left: 12px;
      top: auto;
      bottom: 10px;
      margin: 0 10px;
      content: '';
    }

    .c12 a {
      padding: 14px 21px;
      color: #FFFFFF;
    }

    .c12:hover {
      background-color: #3e1c43;
    }

    .c12:hover span {
      border-bottom: 0;
      padding-bottom: 2px;
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
      color: transparent;
      border: 0;
    }

    .c17 {
      position: absolute;
      right: 60px;
    }

    .c17 a {
      margin-left: 0.69375rem;
    }

    @media (min-width:740px) {
      .c4 {
        width: 60px;
        height: 60px;
      }
    }

    @media (min-width:1440px) {
      .c18 {
        padding: 16px 30px;
      }
    }

    @media (min-width:1024px) {
      .c13 {
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
      .c9 {
        margin: 0 4px;
        padding: 30px 0;
      }

      .c9 a {
        padding: 7px 5px;
        height: auto;
      }

      .c9 ul {
        display: none;
      }

      .c9:hover {
        background-color: transparent;
        z-index: 3;
      }

      .c9:hover span {
        border-bottom: 2px solid #030e1a;
        padding-bottom: 2px;
      }

      .c9:hover ul {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c9:hover ul span {
        color: #FFFFFF;
        border: 0;
      }
    }

    @media (min-width:1024px) {
      .c11 {
        top: 90px;
        position: absolute;
        padding: 0 0 20px;
        width: 250px;
        height: auto;
        -webkit-transition-property: max-height;
        transition-property: max-height;
        -webkit-transition-duration: 850ms;
        transition-duration: 850ms;
        -webkit-transition-timing-function: cubic-bezier(0.2,1,0.5,1);
        transition-timing-function: cubic-bezier(0.2,1,0.5,1);
      }
    }

    @media (min-width:1024px) {
      .c12:first-child:hover {
        background-color: #3e1c43;
      }

      .c12:first-child a::before {
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
    }

    @media (min-width:1024px) {
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

    @media (min-width:1024px) {
      .c17 {
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
        <nav
          aria-labelledby="block-comicrelief-main-menu-menu"
          className="c6"
          sizes={
            Object {
              "large": 1440,
              "medium": 1024,
              "small": 740,
            }
          }
        >
          <h2
            className="c7"
            color="inherit"
          >
            Main navigation
          </h2>
          <ul
            className="c8"
          >
            <li
              className="c9"
            >
              <span>
                <a
                  aria-expanded={false}
                  aria-haspopup="true"
                  className="c10 c3"
                  color="red"
                  href="https://www.comicrelief.com/fundraising/pay-in-your-money"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Fundraising
                  </span>
                </a>
              </span>
              <ul
                className="c11"
              >
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/fundraising/pay-in-your-money"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Fundraising
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Red Nose Day
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/join"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Regular donations
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/squads"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Squads
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/fundraising/the-noseys"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        The Noseys
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/fundraising/free-downloads"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Free downloads
                      </span>
                    </a>
                  </span>
                </li>
              </ul>
            </li>
            <li
              className="c9"
            >
              <span>
                <a
                  aria-expanded={false}
                  aria-haspopup="true"
                  className="c10 c3"
                  color="red"
                  href="https://www.comicrelief.com/what-your-money-does"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    What your money does
                  </span>
                </a>
              </span>
              <ul
                className="c11"
              >
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/what-your-money-does"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        What your money does
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/What-we-do/our-legacy"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        What your money does
                      </span>
                    </a>
                  </span>
                </li>
              </ul>
            </li>
            <li
              className="c9"
            >
              <span>
                <a
                  aria-expanded={false}
                  aria-haspopup="true"
                  className="c10 c3"
                  color="red"
                  href="https://www.comicrelief.com/rednoseday/schools"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Schools & youth
                  </span>
                </a>
              </span>
              <ul
                className="c11"
              >
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/schools"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Schools & youth
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/schools/primary-schools"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Primary schools
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/schools/secondary-schools"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Secondary schools
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/schools/nurseries"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Nurseries
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/youth"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Youth groups
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/rednoseday/schools/free-downloads"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Free downloads
                      </span>
                    </a>
                  </span>
                </li>
              </ul>
            </li>
            <li
              className="c9"
            >
              <span>
                <a
                  aria-expanded={false}
                  aria-haspopup="true"
                  className="c10 c3"
                  color="red"
                  href="https://www.comicrelief.com/funding"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Funding
                  </span>
                </a>
              </span>
              <ul
                className="c11"
              >
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/funding"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Funding
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/funding/funding-opportunities"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Funding opportunities
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/funding/funding-strategy"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Our strategy
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/funding/eligibility-criteria"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Eligibility
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/funding/applying-for-funding"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Applying for funding
                      </span>
                    </a>
                  </span>
                </li>
                <li
                  className="c12"
                >
                  <span>
                    <a
                      className="c10 c3"
                      color="red"
                      href="https://www.comicrelief.com/funding/managing-your-funding"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Managing your funding
                      </span>
                    </a>
                  </span>
                </li>
              </ul>
            </li>
            <li
              className="c9"
            >
              <span>
                <a
                  aria-expanded={false}
                  aria-haspopup="true"
                  className="c10 c3"
                  color="red"
                  href="https://www.comicrelief.com/fundraising/pay-in-your-money"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Pay in your fundraising money
                  </span>
                </a>
              </span>
            </li>
            <li
              className="c9"
            >
              <span>
                <a
                  aria-expanded={false}
                  aria-haspopup="true"
                  className="c10 c3"
                  color="red"
                  href="https://www.comicrelief.com/donate"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Donate
                  </span>
                </a>
              </span>
            </li>
          </ul>
        </nav>
        <span>
          <a
            aria-haspopup="true"
            aria-label="Open and close Navigation Menu"
            className="c13 c3"
            color="red"
            href="#"
            onClick={[Function]}
            role="button"
            target="_self"
          >
            <span
              className="c14 c7"
              color="inherit"
            >
              Open and close nav menu
            </span>
            <span
              className="c15 c16"
            />
            <span
              className="c15 c16"
            />
            <span
              className="c15 c16"
            />
            <span
              className="c15 c16"
            />
          </a>
        </span>
        <div
          className="c17"
        >
          <span>
            <a
              className="c18"
              color="green"
              href="/donation"
              target="_self"
            >
              Donate
            </a>
          </span>
        </div>
      </div>
    </header>
  `);
});
