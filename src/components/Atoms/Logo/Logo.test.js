import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Logo from './Logo';

it('renders correctly', () => {
  const tree = renderWithTheme(<Logo rotate />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      object-fit: cover;
      width: auto;
      display: block;
      height: auto;
    }

    .c0 {
      display: inline-block;
      width: 50px;
      height: 50px;
      -webkit-transform: rotate(-14deg);
      -ms-transform: rotate(-14deg);
      transform: rotate(-14deg);
    }

    @media (min-width:740px) {
      .c0 {
        width: 60px;
        height: 60px;
      }
    }

    <div
      aria-label="logo"
      className="c0"
      rotate={1}
    >
      <img
        alt="Comic Relief logo"
        aria-label="logo"
        className="c1"
        src="mock.asset"
      />
    </div>
  `);
});
