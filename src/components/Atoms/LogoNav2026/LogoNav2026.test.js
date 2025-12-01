import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import LogoNav2026 from './LogoNav2026';

it('renders correctly', () => {
  const tree = renderWithTheme(<LogoNav2026 rotate />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      z-index: 3;
      width: 50px;
    }

    .c1 {
      display: block;
      width: auto;
      height: 100%;
      max-width: 100%;
    }

    .c2 {
      display: block;
    }

    .c3 {
      display: none;
    }

    @media (min-width:740px) {
      .c0 {
        width: 180px;
      }
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

    <div
      className="c0"
      data-testid="LogoWrapper"
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
    </div>
  `);
});
