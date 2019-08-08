/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Footer from './Footer';

import data from './data/data';
import footerCopy from './data/footerCopy';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Footer navItems={data} footerCopy={footerCopy.copy} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      text-transform: inherit;
    }

    .c20 {
      color: #FFFFFF;
      text-transform: inherit;
    }

    .c18 {
      object-fit: cover;
      width: auto;
      display: block;
      height: auto;
    }

    .c17 {
      display: inline-block;
      width: 70px;
      height: 70px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
    }

    .c10 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c10:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: 700;
    }

    .c2 {
      width: 100%;
      margin: 0 0 50px;
      padding: 0;
    }

    .c3 {
      width: auto;
      height: auto;
      display: inline-block;
      margin: 5px 10px 0;
    }

    .c3 a {
      display: block;
      -webkit-transition: 0.5s opacity;
      transition: 0.5s opacity;
    }

    .c3 a:focus,
    .c3 a:hover {
      opacity: 0.6;
    }

    .c4 {
      width: 58px;
      height: auto;
    }

    .c5 {
      display: block;
      width: 100%;
      text-align: left;
    }

    .c5 > h2 {
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

    .c11 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-transition: max-height 0.5s ease;
      transition: max-height 0.5s ease;
      max-height: 0px;
      overflow: hidden;
      padding: 0;
      position: relative;
      list-style: none outside;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c11 > li a {
      display: none;
      font-size: 15px;
      font-weight: 500;
    }

    .c14 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-transition: max-height 0.5s ease;
      transition: max-height 0.5s ease;
      max-height: 0px;
      overflow: hidden;
      padding: 0;
      position: relative;
      list-style: none outside;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c14 > li a {
      display: none;
      font-size: 15px;
      font-weight: 500;
    }

    .c12 {
      height: 40px;
      width: 100%;
      background-color: inherit;
      padding: 8px 0;
    }

    .c15 {
      height: 40px;
      width: 100%;
      background-color: inherit;
      padding: 8px 0;
    }

    .c13 {
      border: 0;
      padding: 17px 20px;
      height: 46px;
      width: 100%;
      background-color: #2C0230;
      color: #FFFFFF;
      padding: 14px 21px;
      color: #FFFFFF;
      height: auto;
      position: relative;
    }

    .c13:hover,
    .c13:focus {
      color: #FFFFFF;
      border-bottom: none;
      font-weight: 500;
    }

    .c13:hover,
    .c13:focus {
      font-weight: 700;
    }

    .c7 {
      background-color: inherit list-style:none outside;
      padding: 0;
      margin: 0;
    }

    .c9 {
      border: 0;
      padding: 17px 20px;
      height: 46px;
      width: 100%;
      background-color: #2C0230;
      color: #FFFFFF;
    }

    .c9:hover,
    .c9:focus {
      color: #FFFFFF;
      border-bottom: none;
      font-weight: 500;
    }

    .c8 {
      position: relative;
      font-weight: 700;
      margin: 0 1.5% 45px;
    }

    .c8 a {
      width: auto;
      padding: 0;
      height: auto;
      position: relative;
      background-color: inherit;
      font-size: 19px;
      line-height: 40px;
      font-weight: 800;
    }

    .c8 a:focus,
    .c8 a:hover {
      font-weight: 800;
    }

    .c8 a:after {
      content: '\\2303';
      position: absolute;
      font-family: Arial;
      margin-left: 4px;
      overflow: hidden;
      line-height: 19px;
      font-size: 23px;
      color: inherit;
      font-weight: 100;
      -webkit-transition: -webkit-transform 0.2s ease;
      -webkit-transition: transform 0.2s ease;
      transition: transform 0.2s ease;
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
      top: 6px;
      right: -25px;
    }

    .c0 {
      text-align: center;
      line-height: initial;
      background: #2C0230;
      padding: 65px 10px 40px;
      position: relative;
    }

    .c1 {
      display: block;
      width: 100%;
      height: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .c16 {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 0 25px;
    }

    .c19 {
      display: block;
      width: 100%;
      height: 100%;
      text-align: left;
    }

    .c19 p {
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 5px;
    }

    @media (min-width:740px) {
      .c17 {
        width: 70px;
        height: 70px;
      }
    }

    @media (min-width:1024px) {
      .c2 {
        margin: 0 0 90px;
      }
    }

    @media (min-width:740px) {
      .c11 {
        max-height: none;
        height: auto;
      }

      .c11 > li a {
        display: inline;
        line-height: 24px;
      }
    }

    @media (min-width:740px) {
      .c14 {
        max-height: none;
        height: auto;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .c14 > li a {
        display: inline;
        line-height: 24px;
      }
    }

    @media (min-width:740px) {
      .c12 {
        height: auto;
        margin-top: 12px;
        padding: 0;
      }

      .c12 a {
        background-color: inherit;
        height: auto;
      }

      .c12 a:after {
        content: none !important;
      }

      .c12 a:hover,
      .c12 a:focus {
        border-bottom: 2px solid #fff;
      }

      .c12 a:hover span,
      .c12 a:focus span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (min-width:740px) {
      .c15 {
        height: auto;
        margin-top: 12px;
        padding: 0;
        width: 50%;
      }

      .c15 a {
        background-color: inherit;
        height: auto;
      }

      .c15 a:after {
        content: none !important;
      }

      .c15 a:hover,
      .c15 a:focus {
        border-bottom: 2px solid #fff;
      }

      .c15 a:hover span,
      .c15 a:focus span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (min-width:740px) {
      .c7 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
    }

    @media (min-width:740px) {
      .c8 {
        width: calc((100% - 9%) / 3);
      }
    }

    @media (min-width:740px) {
      .c8 a {
        font-size: 20px;
        line-height: 40px;
      }
    }

    @media (min-width:740px) {
      .c8 a {
        cursor: default;
        display: inline;
      }

      .c8 a:after {
        content: none;
      }
    }

    @media (min-width:1024px) {
      .c0 {
        padding: 79px 35px 60px;
      }
    }

    @media (min-width:1024px) {
      .c19 p {
        font-size: 16px;
        line-height: 27px;
      }
    }

    <footer
      className="c0"
      role="banner"
    >
      <div
        className="c1"
      >
        <div>
          <ul
            className="c2"
          >
            <li
              className="c3"
            >
              <a
                href="https://www.facebook.com/comicrelief"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="c4"
                  src="mock.asset"
                  title="FB"
                />
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                href="https://twitter.com/comicrelief"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="c4"
                  src="mock.asset"
                  title="Twitter"
                />
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                href="https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="c4"
                  src="mock.asset"
                  title="Youtube"
                />
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                href="https://www.instagram.com/comicrelief/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="c4"
                  src="mock.asset"
                  title="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
        <nav
          aria-labelledby="main-menu"
          className="c5"
          role="navigation"
        >
          <h2
            className="c6"
            color="inherit"
            id="footer-menu"
          >
            Footer navigation
          </h2>
          <ul
            className="c7"
            role="menubar"
          >
            <li
              className="c8"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c9 c10"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c6"
                  color="inherit"
                >
                  Hear from us
                </span>
              </a>
              <ul
                aria-label="Hear from us"
                className="c11"
                role="menu"
              >
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/#"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Get the newsletter
                    </span>
                  </a>
                </li>
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/update-your-preferences"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      How we contact you
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c8"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c9 c10"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c6"
                  color="inherit"
                >
                  Get in touch
                </span>
              </a>
              <ul
                aria-label="Get in touch"
                className="c14"
                role="menu"
              >
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/contact-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Contact us
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://giftaid.comicrelief.com/update"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Your Gift Aid
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      FAQs
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/red-nose-days-frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Red Nose Day 2019 FAQs
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c8"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c9 c10"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c6"
                  color="inherit"
                >
                  About us
                </span>
              </a>
              <ul
                aria-label="About us"
                className="c14"
                role="menu"
              >
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Mission
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/history"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Our history
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/finances"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Finances
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/working-with-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Partners
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/meet-the-team"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Meet the team
                    </span>
                  </a>
                </li>
                <li
                  className="c15"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.sportrelief.com/"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Sport Relief
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c8"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c9 c10"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c6"
                  color="inherit"
                >
                  Careers
                </span>
              </a>
              <ul
                aria-label="Careers"
                className="c11"
                role="menu"
              >
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/careers"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Working at Comic Relief
                    </span>
                  </a>
                </li>
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://app.beapplied.com/org/comic-relief"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Open roles
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c8"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c9 c10"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c6"
                  color="inherit"
                >
                  News
                </span>
              </a>
              <ul
                aria-label="News"
                className="c11"
                role="menu"
              >
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/news"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      News
                    </span>
                  </a>
                </li>
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/press-releases"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Press area
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c8"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c9 c10"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c6"
                  color="inherit"
                >
                  Legal
                </span>
              </a>
              <ul
                aria-label="Legal"
                className="c11"
                role="menu"
              >
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/privacy-notice"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Privacy policy
                    </span>
                  </a>
                </li>
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.comicrelief.com/terms-of-use"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Terms of use
                    </span>
                  </a>
                </li>
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="/test-internal-link"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Test internal link
                    </span>
                  </a>
                </li>
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="https://www.sportrelief.com"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Test whitelisted external link
                    </span>
                  </a>
                </li>
                <li
                  className="c12"
                >
                  <a
                    className="c13 c10"
                    color="red"
                    href="http://bing.com"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c6"
                      color="inherit"
                    >
                      Test non-whitelisted external link
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          className="c16"
        >
          <div
            aria-label="logo"
            className="c17"
            rotate={1}
          >
            <img
              alt="Comic Relief logo"
              aria-label="logo"
              className="c18"
              src="mock.asset"
            />
          </div>
        </div>
        <div
          className="c19"
        >
          <p
            className="c20"
            color="white"
          >
            Comic Relief is the trading name of Charity Projects, a registered charity in England and Wales (326568) and Scotland (SC039730), which is a company limited by guarantee registered in England and Wales (01806414). Registered address: 1st Floor, 89 Albert Embankment, London, SE1 7TP.
          </p>
        </div>
      </div>
    </footer>
  `);
});
