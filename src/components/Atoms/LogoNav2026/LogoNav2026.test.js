import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import LogoNav2026 from './LogoNav2026';

it('renders correctly', () => {
  const tree = renderWithTheme(<LogoNav2026 rotate />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 img {
      -webkit-animation: jaJSCW 0.4s ease-in-out forwards;
      animation: jaJSCW 0.4s ease-in-out forwards;
      -webkit-animation-name: blCpAO;
      animation-name: blCpAO;
    }

    .c0:hover img,
    .c0:focus img {
      -webkit-animation: jaJSCW 0.4s ease-in-out forwards;
      animation: jaJSCW 0.4s ease-in-out forwards;
    }

    .c1 {
      display: block;
      width: auto;
      height: 100%;
      max-width: 100%;
    }

    .c2 {
      z-index: 3;
      width: 50px;
      display: block;
    }

    .c3 {
      z-index: 3;
      width: 115px;
      display: none;
    }

    @media (min-width:320px) {
      .c2 {
        display: none;
      }
    }

    @media (min-width:320px) {
      .c3 {
        display: block;
      }
    }

    @media (min-width:740px) {
      .c3 {
        width: 162px;
      }
    }

    <a
      className="c0"
      data-testid="LogoLink"
      href="https://www.comicrelief.com/"
      title="Go to Comic Relief homepage"
    >
      <img
        alt="Comic Relief logo"
        className="c1 c2"
        data-testid="MobileImage"
        src="mock.asset"
      />
      <img
        alt="Comic Relief logo"
        className="c1 c3"
        data-testid="DesktopImage"
        src="mock.asset"
      />
    </a>
  `);
});
