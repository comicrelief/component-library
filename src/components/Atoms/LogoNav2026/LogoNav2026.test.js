import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import LogoNav2026 from './_LogoNav2026';

it('renders correctly', () => {
  const tree = renderWithTheme(<LogoNav2026 rotate />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 img {
      animation: k0 0.4s ease-in-out forwards;
      animation-name: k1;
    }

    .c0:hover img,
    .c0:focus img {
      animation: k0 0.4s ease-in-out forwards;
    }

    .c1 {
      display: block;
      width: auto;
      height: 100%;
      max-width: 100%;
    }

    .c2 {
      z-index: 3;
      width: 49px;
      height: 32px;
      display: block;
    }

    .c3 {
      z-index: 3;
      display: none;
    }

    @media (min-width: 320px) {
      .c2 {
        display: none;
      }
    }

    @media (min-width: 320px) {
      .c3 {
        display: block;
        width: 132px;
        height: 20px;
      }
    }

    @media (min-width: 740px) {
      .c3 {
        width: 162px;
        height: 25px;
      }
    }

    @media (min-width: 1024px) {
      .c3 {
        width: 162px;
        min-width: 162px;
        height: 46px;
      }
    }

    @keyframes k0 {
      from {
        transform: scale3d(1,1,1);
      }

      30% {
        transform: scale3d(1.04,1.04,1.04);
      }

      60% {
        transform: scale3d(1.03,1.03,1.03);
      }

      to {
        transform: scale3d(1.04,1.04,1.04);
      }
    }

    @keyframes k1 {
      from {
        transform: scale3d(1.03,1.03,1.03);
      }

      30% {
        transform: scale3d(0.99,0.99,0.99);
      }

      60% {
        transform: scale3d(1.01,1.01,1.01);
      }

      to {
        transform: scale3d(1,1,1);
      }
    }

    <a
      className="c0"
      data-testid="LogoLink"
      href="/"
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
