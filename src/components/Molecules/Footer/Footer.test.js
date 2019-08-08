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
    .c8 {
      text-transform: inherit;
    }

    .c22 {
      color: #FFFFFF;
      text-transform: inherit;
    }

    .c20 {
      object-fit: cover;
      width: auto;
      display: block;
      height: auto;
    }

    .c19 {
      display: inline-block;
      width: 70px;
      height: 70px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
    }

    .c12 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c12:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: 700;
    }

    .c5 {
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
    }

    .c6 {
      width: 100%;
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      list-style-type: none;
    }

    .c4 {
      width: 80px;
      padding: 10px;
    }

    .c7 {
      display: block;
      width: 100%;
      text-align: left;
    }

    .c7 > h2 {
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

    .c13 > li a {
      display: none;
      font-size: 15px;
      font-weight: 500;
    }

    .c13 > li a:after {
      content: none;
    }

    .c16 {
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

    .c16 > li a {
      display: none;
      font-size: 15px;
      font-weight: 500;
    }

    .c16 > li a:after {
      content: none;
    }

    .c14 {
      height: 40px;
      width: 100%;
      background-color: inherit;
      padding: 8px 0;
    }

    .c17 {
      height: 40px;
      width: 100%;
      background-color: inherit;
      padding: 8px 0;
    }

    .c15 {
      border: 0;
      height: 46px;
      width: 100%;
      background-color: #2C0230;
      color: #FFFFFF;
      padding: 14px 21px;
      color: #FFFFFF;
      height: auto;
      position: relative;
    }

    .c15:hover,
    .c15:focus {
      color: #FFFFFF;
      border-bottom: none;
      font-weight: 500;
    }

    .c15:hover,
    .c15:focus {
      font-weight: 700;
    }

    .c9 {
      background-color: inherit list-style:none outside;
      padding: 0;
      margin: 0;
    }

    .c11 {
      border: 0;
      height: 46px;
      width: 100%;
      background-color: #2C0230;
      color: #FFFFFF;
    }

    .c11:hover,
    .c11:focus {
      color: #FFFFFF;
      border-bottom: none;
      font-weight: 500;
    }

    .c10 {
      position: relative;
      font-weight: 700;
      margin: 0 1.5% 45px;
    }

    .c10 a {
      width: auto;
      padding: 0;
      height: auto;
      position: relative;
      background-color: inherit;
      font-size: 19px;
      line-height: 40px;
      font-weight: 800;
    }

    .c10 a:focus,
    .c10 a:hover {
      font-weight: 800;
    }

    .c10 a:after {
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
      background: #000;
      padding: 4rem 1rem 2rem;
      position: relative;
    }

    .c1 {
      display: block;
      width: 100%;
      height: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .c18 {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 0 25px;
    }

    .c21 {
      display: block;
      width: 100%;
      height: 100%;
      text-align: left;
    }

    .c21 p {
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 5px;
    }

    .c2 ul {
      margin: 0 auto 2rem;
      padding: 0;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    .c2 ul li a {
      display: block;
      -webkit-transition: opacity 0.2s;
      transition: opacity 0.2s;
    }

    .c2 ul li a:hover,
    .c2 ul li a:focus {
      opacity: 0.6;
    }

    @media (min-width:740px) {
      .c19 {
        width: 70px;
        height: 70px;
      }
    }

    @media (min-width:740px) {
      .c13 {
        max-height: none;
        height: auto;
      }

      .c13 > li a {
        display: inline;
        line-height: 24px;
      }
    }

    @media (min-width:740px) {
      .c16 {
        max-height: none;
        height: auto;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .c16 > li a {
        display: inline;
        line-height: 24px;
      }
    }

    @media (min-width:740px) {
      .c14 {
        height: auto;
        margin-top: 12px;
        padding: 0;
      }

      .c14 a {
        background-color: inherit;
        height: auto;
      }

      .c14 a:after {
        content: none !important;
      }

      .c14 a:hover,
      .c14 a:focus {
        border-bottom: 2px solid #fff;
      }

      .c14 a:hover span,
      .c14 a:focus span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (min-width:740px) {
      .c17 {
        height: auto;
        margin-top: 12px;
        padding: 0;
        width: 50%;
      }

      .c17 a {
        background-color: inherit;
        height: auto;
      }

      .c17 a:after {
        content: none !important;
      }

      .c17 a:hover,
      .c17 a:focus {
        border-bottom: 2px solid #fff;
      }

      .c17 a:hover span,
      .c17 a:focus span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (min-width:740px) {
      .c9 {
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
      .c10 {
        width: calc((100% - 9%) / 3);
      }
    }

    @media (min-width:740px) {
      .c10 a {
        font-size: 20px;
        line-height: 40px;
      }
    }

    @media (min-width:740px) {
      .c10 a {
        cursor: default;
        display: inline;
      }

      .c10 a:after {
        content: none;
      }
    }

    @media (min-width:1024px) {
      .c0 {
        padding: 4rem 2rem 4rem;
      }
    }

    @media (min-width:1024px) {
      .c21 p {
        font-size: 16px;
        line-height: 27px;
      }
    }

    @media (min-width:740px) {
      .c2 ul {
        margin-bottom: 4rem;
      }
    }

    <footer
      className="c0"
      role="banner"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
        >
          <ul
            className="c3"
          >
            <li
              className="c4"
            >
              <a
                className="c5"
                href="https://www.facebook.com/comicrelief"
                target="_blank"
              >
                <img
                  alt="facebook"
                  className="c6"
                  src="mock.asset"
                />
              </a>
            </li>
            <li
              className="c4"
            >
              <a
                className="c5"
                href="https://twitter.com/comicrelief"
                target="_blank"
              >
                <img
                  alt="twitter"
                  className="c6"
                  src="mock.asset"
                />
              </a>
            </li>
            <li
              className="c4"
            >
              <a
                className="c5"
                href="https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw"
                target="_blank"
              >
                <img
                  alt="youtube"
                  className="c6"
                  src="mock.asset"
                />
              </a>
            </li>
            <li
              className="c4"
            >
              <a
                className="c5"
                href="https://www.instagram.com/comicrelief"
                target="_blank"
              >
                <img
                  alt="instagram"
                  className="c6"
                  src="mock.asset"
                />
              </a>
            </li>
          </ul>
        </div>
        <nav
          aria-labelledby="main-menu"
          className="c7"
          role="navigation"
        >
          <h2
            className="c8"
            color="inherit"
            id="footer-menu"
          >
            Footer navigation
          </h2>
          <ul
            className="c9"
            role="menubar"
          >
            <li
              className="c10"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c11 c12"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c8"
                  color="inherit"
                >
                  Hear from us
                </span>
              </a>
              <ul
                aria-label="Hear from us"
                className="c13"
                role="menu"
              >
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/#"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Get the newsletter
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/update-your-preferences"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      How we contact you
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c10"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c11 c12"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c8"
                  color="inherit"
                >
                  Get in touch
                </span>
              </a>
              <ul
                aria-label="Get in touch"
                className="c16"
                role="menu"
              >
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/contact-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Contact us
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://giftaid.comicrelief.com/update"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Your Gift Aid
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      FAQs
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/red-nose-days-frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Red Nose Day 2019 FAQs
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c10"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c11 c12"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c8"
                  color="inherit"
                >
                  About us
                </span>
              </a>
              <ul
                aria-label="About us"
                className="c16"
                role="menu"
              >
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Mission
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/history"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Our history
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/finances"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Finances
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/working-with-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Partners
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/meet-the-team"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Meet the team
                    </span>
                  </a>
                </li>
                <li
                  className="c17"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.sportrelief.com/"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Sport Relief
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c10"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c11 c12"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c8"
                  color="inherit"
                >
                  Careers
                </span>
              </a>
              <ul
                aria-label="Careers"
                className="c13"
                role="menu"
              >
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/careers"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Working at Comic Relief
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://app.beapplied.com/org/comic-relief"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Open roles
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c10"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c11 c12"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c8"
                  color="inherit"
                >
                  News
                </span>
              </a>
              <ul
                aria-label="News"
                className="c13"
                role="menu"
              >
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/news"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      News
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/press-releases"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Press area
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="c10"
              role="none"
            >
              <a
                aria-haspopup="true"
                className="c11 c12"
                color="red"
                href="/"
                onClick={[Function]}
                target="_self"
                type="standard"
              >
                <span
                  className="c8"
                  color="inherit"
                >
                  Legal
                </span>
              </a>
              <ul
                aria-label="Legal"
                className="c13"
                role="menu"
              >
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/privacy-notice"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Privacy policy
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.comicrelief.com/terms-of-use"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Terms of use
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="/test-internal-link"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Test internal link
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="https://www.sportrelief.com"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c8"
                      color="inherit"
                    >
                      Test whitelisted external link
                    </span>
                  </a>
                </li>
                <li
                  className="c14"
                >
                  <a
                    className="c15 c12"
                    color="red"
                    href="http://bing.com"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c8"
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
          className="c18"
        >
          <div
            aria-label="logo"
            className="c19"
            rotate={1}
          >
            <img
              alt="Comic Relief logo"
              aria-label="logo"
              className="c20"
              src="mock.asset"
            />
          </div>
        </div>
        <div
          className="c21"
        >
          <p
            className="c22"
            color="white"
          >
            Comic Relief is the trading name of Charity Projects, a registered charity in England and Wales (326568) and Scotland (SC039730), which is a company limited by guarantee registered in England and Wales (01806414). Registered address: 1st Floor, 89 Albert Embankment, London, SE1 7TP.
          </p>
        </div>
      </div>
    </footer>
  `);
});
