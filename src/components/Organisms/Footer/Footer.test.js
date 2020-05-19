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
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-family: inherit;
    }

    .c11 {
      color: #FFFFFF;
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: inherit;
    }

    .c16 {
      color: #FFFFFF;
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      line-height: normal;
      font-family: inherit;
    }

    .c22 {
      object-fit: cover;
      width: auto;
      display: block;
      height: auto;
      margin-right: 1rem;
    }

    .c21 {
      display: inline-block;
      z-index: 3;
      width: 70px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
    }

    .c14 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline;
      line-height: 1.5rem;
      color: #000000;
      border-bottom: 2px solid #000000;
      font-weight: normal;
    }

    .c14:hover {
      color: #000000;
      border-bottom: 2px solid #000000;
    }

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

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      list-style-type: none;
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

    .c3 {
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

    .c12 {
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

    .c12 > li a {
      display: none;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }

    .c12 > li a:after {
      content: none;
    }

    .c17 {
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

    .c17 > li a {
      display: none;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }

    .c17 > li a:after {
      content: none;
    }

    .c13 {
      height: 40px;
      width: 100%;
      background-color: inherit;
      padding: 8px 0;
    }

    .c18 {
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
      padding: 14px 21px;
      height: auto;
      position: relative;
    }

    .c15:hover,
    .c15:focus {
      border-bottom: none;
      font-weight: 500;
    }

    .c15:hover,
    .c15:focus {
      font-weight: 700;
    }

    .c9 {
      background-color: inherit;
      list-style: none outside;
      padding: 0;
      margin: 0;
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
      color: #FFFFFF;
      font-weight: 100;
      -webkit-transition: -webkit-transform 0.2s ease;
      -webkit-transition: transform 0.2s ease;
      transition: transform 0.2s ease;
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
      top: 0;
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

    .c19 {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 0 25px;
    }

    .c23 {
      display: block;
      width: 100%;
      height: 100%;
      text-align: left;
    }

    .c23 p {
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 5px;
    }

    .c20 {
      color: transparent;
      margin-right: auto;
      border: 0;
    }

    .c20:hover {
      border: 0;
    }

    @media (min-width:1150px) {
      .c21 {
        width: 70px;
      }
    }

    @media (min-width:740px) {
      .c2 {
        margin-bottom: 4rem;
      }
    }

    @media (min-width:740px) {
      .c12 {
        max-height: none;
        height: auto;
      }

      .c12 > li a {
        display: inline;
        line-height: 24px;
      }
    }

    @media (min-width:740px) {
      .c17 {
        max-height: none;
        height: auto;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .c17 > li a {
        display: inline;
        line-height: 24px;
      }
    }

    @media (min-width:740px) {
      .c13 {
        height: auto;
        margin-top: 12px;
        padding: 0 2%;
      }

      .c13 a {
        background-color: inherit;
        height: auto;
      }

      .c13 a:after {
        content: none !important;
      }

      .c13 a:hover,
      .c13 a:focus {
        border-bottom: 2px solid #fff;
      }

      .c13 a:hover span,
      .c13 a:focus span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (min-width:740px) {
      .c18 {
        height: auto;
        margin-top: 12px;
        padding: 0 2%;
        -webkit-flex: 0 0 44%;
        -ms-flex: 0 0 44%;
        flex: 0 0 44%;
      }

      .c18 a {
        background-color: inherit;
        height: auto;
      }

      .c18 a:after {
        content: none !important;
      }

      .c18 a:hover,
      .c18 a:focus {
        border-bottom: 2px solid #fff;
      }

      .c18 a:hover span,
      .c18 a:focus span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (min-width:1024px) {
      .c18 {
        -webkit-flex: 0 0 46%;
        -ms-flex: 0 0 46%;
        flex: 0 0 46%;
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
        -webkit-flex: 0 0 30%;
        -ms-flex: 0 0 30%;
        flex: 0 0 30%;
      }

      .c10 > span {
        padding: 0 2%;
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
      .c23 p {
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
        <div
          className=""
        >
          <ul
            className="c2"
          >
            <li
              className="c3"
            >
              <a
                className="c4"
                data-test="header-esu-icon"
                href="https://www.facebook.com/comicrelief"
                rel="noopener noreferrer"
                target="_blank"
                title="Check out our Facebook page"
              >
                <img
                  alt="facebook"
                  className="c5"
                  src="mock.asset"
                />
                <span
                  className="c6"
                >
                  (opens in new window)
                </span>
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                className="c4"
                data-test="header-esu-icon"
                href="https://twitter.com/comicrelief"
                rel="noopener noreferrer"
                target="_blank"
                title="Check out our Twitter account"
              >
                <img
                  alt="twitter"
                  className="c5"
                  src="mock.asset"
                />
                <span
                  className="c6"
                >
                  (opens in new window)
                </span>
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                className="c4"
                data-test="header-esu-icon"
                href="https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw"
                rel="noopener noreferrer"
                target="_blank"
                title="Check out our YouTube channel"
              >
                <img
                  alt="youtube"
                  className="c5"
                  src="mock.asset"
                />
                <span
                  className="c6"
                >
                  (opens in new window)
                </span>
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                className="c4"
                data-test="header-esu-icon"
                href="https://www.instagram.com/comicrelief"
                rel="noopener noreferrer"
                target="_blank"
                title="Check out our Instagram account"
              >
                <img
                  alt="instagram"
                  className="c5"
                  src="mock.asset"
                />
                <span
                  className="c6"
                >
                  (opens in new window)
                </span>
              </a>
            </li>
          </ul>
        </div>
        <nav
          aria-label="main-menu"
          className="c7"
          role="navigation"
        >
          <h2
            className="c8"
            color="inherit"
            id="footer-menu"
            size="s"
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
              <span
                className="c11"
                color="white"
                size="s"
              >
                Hear from us
              </span>
              <ul
                aria-label="Hear from us"
                className="c12"
                role="list"
              >
                <li
                  className="c13"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/#"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Get the newsletter
                    </span>
                  </a>
                </li>
                <li
                  className="c13"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/update-your-preferences"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
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
              <span
                className="c11"
                color="white"
                size="s"
              >
                Get in touch
              </span>
              <ul
                aria-label="Get in touch"
                className="c17"
                role="list"
              >
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="/contact-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Contact us
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://giftaid.comicrelief.com/update"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Your Gift Aid
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      FAQs
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/red-nose-days-frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
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
              <span
                className="c11"
                color="white"
                size="s"
              >
                About us
              </span>
              <ul
                aria-label="About us"
                className="c17"
                role="list"
              >
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Mission
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/history"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Our history
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/finances"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Finances
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/working-with-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Partners
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/meet-the-team"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Meet the team
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.sportrelief.com/"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
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
              <span
                className="c11"
                color="white"
                size="s"
              >
                Careers
              </span>
              <ul
                aria-label="Careers"
                className="c12"
                role="list"
              >
                <li
                  className="c13"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/careers"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Working at Comic Relief
                    </span>
                  </a>
                </li>
                <li
                  className="c13"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://app.beapplied.com/org/comic-relief"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
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
              <span
                className="c11"
                color="white"
                size="s"
              >
                News
              </span>
              <ul
                aria-label="News"
                className="c12"
                role="list"
              >
                <li
                  className="c13"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/news"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      News
                    </span>
                  </a>
                </li>
                <li
                  className="c13"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.comicrelief.com/press-releases"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
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
              <span
                className="c11"
                color="white"
                size="s"
              >
                Legal
              </span>
              <ul
                aria-label="Legal"
                className="c17"
                role="list"
              >
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="/homepage"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Link comp with both URL and Ref
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="/this-is-a-test"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Link comp with only Ref
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.yahoo.com"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Link comp with only URL
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://www.sportrelief.com"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Test whitelisted external link
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://bing.com"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
                    >
                      Test non-whitelisted external link
                    </span>
                  </a>
                </li>
                <li
                  className="c18"
                >
                  <a
                    className="c14 c15"
                    color="red"
                    href="https://bing.com"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c16"
                      color="white"
                      size="s"
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
          className="c19"
        >
          <a
            className="c14 c20"
            color="red"
            href="/"
            target="_self"
            title="Go to Comic Relief homepage"
            type="standard"
          >
            <div
              className="c21"
              rotate={1}
            >
              <img
                alt="Comic Relief logo"
                className="c22"
                src="mock.asset"
              />
            </div>
          </a>
        </div>
        <div
          className="c23"
        >
          <p
            className="c16"
            color="white"
            size="s"
          >
            Comic Relief is the trading name of Charity Projects, a registered charity in England and Wales (326568) and Scotland (SC039730), which is a company limited by guarantee registered in England and Wales (01806414). Registered address: 1st Floor, 89 Albert Embankment, London, SE1 7TP.
          </p>
        </div>
      </div>
    </footer>
  `);
});
