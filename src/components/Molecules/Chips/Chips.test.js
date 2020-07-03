import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Chips from './Chips';

it('renders article teaser correctly', () => {
  const group = [
    { fieldValue: 'Gender Justice' },
    { fieldValue: 'How we Fund' },
    { fieldValue: 'Partnerships' },
    { fieldValue: 'Red Shed' },
    { fieldValue: 'Social Tech' },
    { fieldValue: 'Sport for Change' }
  ];

  let newGroup = group.map((cats, index) => ({
    id: index,
    ...cats,
    checked: false
  }));

  const handleToggle = e => {
    const result = newGroup.map(cat => {
      const newCat = { ...cat };
      if (newCat.fieldValue === e.target.value) {
        newCat.checked = !newCat.checked;
      }
      return newCat;
    });
    newGroup = result;
  };

  const resetSelection = () => {
    return newGroup;
  };
  const tree = renderWithTheme(
    <Chips
      categories={newGroup}
      handleToggle={handleToggle}
      selected
      resetSelection={resetSelection}
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c5 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .c1 {
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

    .c1 (min-width:740px) {
      margin: 1rem 1rem 0 0;
    }

    .c3 {
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

    .c3:hover {
      background: #E1E2E3;
    }

    .c2 {
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

    .c2 + span {
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

    .c2:checked ~ span {
      background-size: 24px;
      background-color: #6F3AAB;
    }

    .c2:focus + span {
      border-color: #666;
      border-width: 3px;
    }

    .c2:focus + span {
      border-color: #666;
      border-width: 3px;
    }

    .c4 {
      border-radius: 2rem;
      background: none;
      padding: 0.5rem 1rem;
      margin: 1rem 0 0 0;
      border: 1px solid #E1E2E3;
      outline: none;
      padding-left: 3rem;
      position: relative;
      height: 48px;
    }

    .c4:focus {
      border-color: #666;
    }

    .c4:before {
      content: '';
      background: url(mock.asset) no-repeat center;
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      left: 1rem;
    }

    <div
      className="c0"
    >
      <label
        className="c1"
      >
        <input
          checked={false}
          className="c2"
          onChange={[Function]}
          type="checkbox"
          value="Gender Justice"
        />
        <span />
        <span
          className="c3"
        />
        Gender Justice
      </label>
      <label
        className="c1"
      >
        <input
          checked={false}
          className="c2"
          onChange={[Function]}
          type="checkbox"
          value="How we Fund"
        />
        <span />
        <span
          className="c3"
        />
        How we Fund
      </label>
      <label
        className="c1"
      >
        <input
          checked={false}
          className="c2"
          onChange={[Function]}
          type="checkbox"
          value="Partnerships"
        />
        <span />
        <span
          className="c3"
        />
        Partnerships
      </label>
      <label
        className="c1"
      >
        <input
          checked={false}
          className="c2"
          onChange={[Function]}
          type="checkbox"
          value="Red Shed"
        />
        <span />
        <span
          className="c3"
        />
        Red Shed
      </label>
      <label
        className="c1"
      >
        <input
          checked={false}
          className="c2"
          onChange={[Function]}
          type="checkbox"
          value="Social Tech"
        />
        <span />
        <span
          className="c3"
        />
        Social Tech
      </label>
      <label
        className="c1"
      >
        <input
          checked={false}
          className="c2"
          onChange={[Function]}
          type="checkbox"
          value="Sport for Change"
        />
        <span />
        <span
          className="c3"
        />
        Sport for Change
      </label>
      <button
        className="c4"
        onClick={[Function]}
        type="button"
      >
        <span
          className="c5"
          color="inherit"
          size="s"
        >
          Clear selection
        </span>
      </button>
    </div>
  `);
});
