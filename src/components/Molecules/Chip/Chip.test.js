import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Chip from './Chip';

it('renders article teaser correctly', () => {
  const handleToggle = e => {
    return e.target.value;
  };
  const tree = renderWithTheme(
    <Chip category="Gender Justice" handleToggle={handleToggle} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: auto;
      height: 48px;
      border-radius: 2rem;
      background-color: #d5d5d5;
      margin: 0.5rem 0.5rem 0 0;
      padding: 4px;
      padding-right: 1rem;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      position: relative;
    }

    .c0 (min-width:740px) {
      margin: 1rem 1rem 0 0;
    }

    .c2 {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      border-radius: 2rem;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    .c2:hover {
      background: #E1E2E3;
    }

    .c1 {
      display: block;
      box-sizing: border-box;
      opacity: 0;
      position: absolute;
      left: 0px;
      width: 40px;
      height: 40px;
      margin: 0;
      border: 1px solid #666;
    }

    .c1 + span {
      background: url(mock.asset) no-repeat center;
      background-size: 24px;
      margin-right: 1rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #969598;
      float: left;
      z-index: 2;
    }

    .c1:checked ~ span {
      background-size: 24px;
      background-color: #6F3AAB;
    }

    .c1:focus + span {
      border-color: #666;
      border-width: 3px;
    }

    .c1:focus + span {
      border-color: #666;
      border-width: 3px;
    }

    <label
      className="c0"
    >
      <input
        checked={false}
        className="c1"
        color="purple"
        onChange={[Function]}
        type="checkbox"
        value="Gender Justice"
      />
      <span />
      <span
        className="c2"
      />
      Gender Justice
    </label>
  `);
});
