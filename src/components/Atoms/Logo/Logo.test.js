import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Logo from './Logo';

it('renders correctly', () => {
  const tree = renderWithTheme(<Logo rotate />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      display: inline-block;
      z-index: 3;
      width: 100%;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
      vertical-align: bottom;
    }

    .c1 {
      color: #E52630;
      font-size: 1.5rem;
      -webkit-letter-spacing: 1.5px;
      -moz-letter-spacing: 1.5px;
      -ms-letter-spacing: 1.5px;
      letter-spacing: 1.5px;
    }

    @media (min-width:1150px) {
      .c0 {
        width: 70px;
      }
    }

    <div
      className="c0"
      rotate={1}
    >
      <h1
        className="c1"
      >
        Comic Relief
      </h1>
    </div>
  `);
});
