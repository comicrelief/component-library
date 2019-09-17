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
    .c7 {
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c21 {
      color: #FFFFFF;
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c19 {
      object-fit: cover;
      width: auto;
      display: block;
      height: auto;
    }

    .c18 {
      display: inline-block;
      z-index: 3;
      width: 70px;
      height: 70px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
    }

    .c11 {
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: normal;
    }

    .c11:hover {
      color: #2C0230;
      border-bottom: 2px solid #2C0230;
      font-weight: 700;
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

    .c6 {
      display: block;
      width: 100%;
      text-align: left;
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

    .c15 {
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

    .c15 > li a {
      display: none;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }

    .c15 > li a:after {
      content: none;
    }

    .c13 {
      height: 40px;
      width: 100%;
      background-color: inherit;
      padding: 8px 0;
    }

    .c16 {
      height: 40px;
      width: 100%;
      background-color: inherit;
      padding: 8px 0;
    }

    .c14 {
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

    .c14:hover,
    .c14:focus {
      color: #FFFFFF;
      border-bottom: none;
      font-weight: 500;
    }

    .c14:hover,
    .c14:focus {
      font-weight: 700;
    }

    .c8 {
      background-color: inherit list-style:none outside;
      padding: 0;
      margin: 0;
    }

    .c10 {
      border: 0;
      height: 46px;
      width: 100%;
      background-color: #2C0230;
      color: #FFFFFF;
    }

    .c10:hover,
    .c10:focus {
      color: #FFFFFF;
      border-bottom: none;
      font-weight: 500;
    }

    .c9 {
      position: relative;
      font-weight: 700;
      margin: 0 1.5% 45px;
    }

    .c9 a {
      width: auto;
      padding: 0;
      height: auto;
      position: relative;
      background-color: inherit;
      font-size: 19px;
      line-height: 40px;
      font-weight: 800;
    }

    .c9 a:focus,
    .c9 a:hover {
      font-weight: 800;
    }

    .c9 a:after {
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

    .c17 {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 0 25px;
    }

    .c20 {
      display: block;
      width: 100%;
      height: 100%;
      text-align: left;
    }

    .c20 p {
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 5px;
    }

    @media (min-width:740px) {
      .c18 {
        width: 70px;
        height: 70px;
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
      .c15 {
        max-height: none;
        height: auto;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .c15 > li a {
        display: inline;
        line-height: 24px;
      }
    }

    @media (min-width:740px) {
      .c13 {
        height: auto;
        margin-top: 12px;
        padding: 0;
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
      .c16 {
        height: auto;
        margin-top: 12px;
        padding: 0;
        width: 50%;
      }

      .c16 a {
        background-color: inherit;
        height: auto;
      }

      .c16 a:after {
        content: none !important;
      }

      .c16 a:hover,
      .c16 a:focus {
        border-bottom: 2px solid #fff;
      }

      .c16 a:hover span,
      .c16 a:focus span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }

    @media (min-width:740px) {
      .c8 {
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
      .c9 {
        width: calc((100% - 9%) / 3);
      }
    }

    @media (min-width:740px) {
      .c9 a {
        font-size: 20px;
        line-height: 40px;
      }
    }

    @media (min-width:740px) {
      .c9 a {
        cursor: default;
        display: inline;
      }

      .c9 a:after {
        content: none;
      }
    }

    @media (min-width:1024px) {
      .c0 {
        padding: 4rem 2rem 4rem;
      }
    }

    @media (min-width:1024px) {
      .c20 p {
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
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                className="c4"
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
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                className="c4"
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
              </a>
            </li>
            <li
              className="c3"
            >
              <a
                className="c4"
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
              </a>
            </li>
          </ul>
        </div>
        <nav
          aria-labelledby="main-menu"
          className="c6"
          role="navigation"
        >
          <h2
            className="c7"
            color="inherit"
            id="footer-menu"
            size="s"
          >
            Footer navigation
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
                className="c10 c11"
                color="red"
                href="#"
                onClick={[Function]}
                role="button"
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Hear from us
                </span>
              </a>
              <ul
                aria-label="Hear from us"
                className="c12"
                role="list"
              >
                <li
                  className="c13"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/#"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
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
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/update-your-preferences"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      How we contact you
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
                className="c10 c11"
                color="red"
                href="#"
                onClick={[Function]}
                role="button"
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Get in touch
                </span>
              </a>
              <ul
                aria-label="Get in touch"
                className="c15"
                role="list"
              >
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/contact-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Contact us
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://giftaid.comicrelief.com/update"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Your Gift Aid
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      FAQs
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/red-nose-days-frequently-asked-questions"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Red Nose Day 2019 FAQs
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
                className="c10 c11"
                color="red"
                href="#"
                onClick={[Function]}
                role="button"
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  About us
                </span>
              </a>
              <ul
                aria-label="About us"
                className="c15"
                role="list"
              >
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Mission
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/history"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Our history
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/finances"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Finances
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/working-with-us"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Partners
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/about-comic-relief/meet-the-team"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Meet the team
                    </span>
                  </a>
                </li>
                <li
                  className="c16"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.sportrelief.com/"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Sport Relief
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
                className="c10 c11"
                color="red"
                href="#"
                onClick={[Function]}
                role="button"
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Careers
                </span>
              </a>
              <ul
                aria-label="Careers"
                className="c12"
                role="list"
              >
                <li
                  className="c13"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/careers"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
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
                    className="c14 c11"
                    color="red"
                    href="https://app.beapplied.com/org/comic-relief"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Open roles
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
                className="c10 c11"
                color="red"
                href="#"
                onClick={[Function]}
                role="button"
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  News
                </span>
              </a>
              <ul
                aria-label="News"
                className="c12"
                role="list"
              >
                <li
                  className="c13"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/news"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
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
                    className="c14 c11"
                    color="red"
                    href="https://www.comicrelief.com/press-releases"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Press area
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
                className="c10 c11"
                color="red"
                href="#"
                onClick={[Function]}
                role="button"
                target="_self"
                type="standard"
              >
                <span
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Legal
                </span>
              </a>
              <ul
                aria-label="Legal"
                className="c12"
                role="list"
              >
                <li
                  className="c13"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="homepage"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Link comp with both URL and Ref
                    </span>
                  </a>
                </li>
                <li
                  className="c13"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="this-is-a-test"
                    role="menuitem"
                    target="_self"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Link comp with only Ref
                    </span>
                  </a>
                </li>
                <li
                  className="c13"
                >
                  <a
                    className="c14 c11"
                    color="red"
                    href="https://www.yahoo.com"
                    role="menuitem"
                    target="_blank"
                    type="standard"
                  >
                    <span
                      className="c7"
                      color="inherit"
                      size="s"
                    >
                      Link comp with only URL
                    </span>
                  </a>
                </li>
                <li
                  className="c13"
                >
                  <a
                    className="c14 c11"
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
                  className="c13"
                >
                  <a
                    className="c14 c11"
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
              </ul>
            </li>
          </ul>
        </nav>
        <div
          className="c17"
        >
          <div
            aria-label="logo"
            className="c18"
            rotate={1}
          >
            <img
              alt="Comic Relief logo"
              aria-label="logo"
              className="c19"
              src="mock.asset"
            />
          </div>
        </div>
        <div
          className="c20"
        >
          <p
            className="c21"
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
