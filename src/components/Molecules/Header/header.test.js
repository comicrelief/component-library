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

    .c14 {
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

    .c14:hover {
      background: #62EF74;
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
      padding: 0;
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

    .c13 {
      position: absolute;
      right: 60px;
    }

    .c13 a {
      margin-left: 0.69375rem;
    }

    @media (min-width:740px) {
      .c4 {
        width: 60px;
        height: 60px;
      }
    }

    @media (min-width:1440px) {
      .c14 {
        padding: 16px 30px;
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
      }
    }

    @media (min-width:1024px) {
      .c8 {
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
      }
    }

    @media (min-width:1024px) {
      .c9 {
        padding: 30px 0px;
        margin: 0 8px;
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
        top: 93px;
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

    @media (min-width:1024px) {
      .c13 {
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
                  href="/parent1"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Parent Item Title 1
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
                      href="/parent1"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Parent Item Title 1
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
                      href="/child-item-1-1"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Child Item Title 1-1
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
                      href="/child-item-1-2"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Child Item Title 1-2
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
                      href="/child-item-1-3"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Child Item Title 1-3
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
                  href="/parent2"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Parent Item Title 2
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
                      href="/parent2"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Parent Item Title 2
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
                      href="/child-item-2-1"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Child Item Title 2-1
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
                      href="/child-item-2-2"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Child Item Title 2-2
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
                      href="/child-item-2-3"
                      target="_self"
                    >
                      <span
                        className="c7"
                        color="inherit"
                      >
                        Child Item Title 2-3
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
                  href="/parent1"
                  onClick={[Function]}
                  target="_self"
                >
                  <span
                    className="c7"
                    color="inherit"
                  >
                    Parent Item Title 1
                  </span>
                </a>
              </span>
            </li>
          </ul>
        </nav>
        <div
          className="c13"
        >
          <span>
            <a
              className="c14"
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
