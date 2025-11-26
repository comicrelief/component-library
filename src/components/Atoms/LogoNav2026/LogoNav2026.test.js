import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import LogoNav2026 from './LogoNav2026';

it('renders correctly', () => {
  const tree = renderWithTheme(<LogoNav2026 rotate />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      display: block;
      width: auto;
      height: 100%;
      max-width: 100%;
    }

    .c0 {
      z-index: 3;
      width: 50px;
      width: 200px;
      border: 1px solid blue;
    }

    @media (min-width:1150px) {
      .c0 {
        width: 70px;
      }
    }

    <div
      className="c0"
      data-testid="LogoWrapper"
    >
      <img
        alt="Comic Relief logo"
        className="c1"
        data-testid="Image"
        src="mock.asset"
      />
    </div>
  `);
});
