import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SearchInput from './SearchInput';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <SearchInput
      onChange={e => {
        e.preventDefault();
        return e.target.value;
      }}
      value=""
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c5 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: inherit;
    }

    .c7 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding: 13px;
      font-size: 1.25rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-color: #000000;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
    }

    .c7:focus {
      border: 1px solid #666;
    }

    .c7:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c7:focus::-moz-placeholder {
      color: #666;
    }

    .c7:focus:-ms-input-placeholder {
      color: #666;
    }

    .c7:focus::placeholder {
      color: #666;
    }

    .c4 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c6 {
      visibility: border:0;
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

    .c0 {
      width: 100%;
      max-width: 1440px;
      margin: auto;
    }

    .c1 {
      margin: 1rem auto;
      padding: 0 calc((4 * 0.25rem));
    }

    .c2 {
      margin: 4rem auto;
      width: 100%;
      border-bottom: 4px solid #E52630;
      overflow: hidden;
    }

    .c3 {
      width: 100%;
      padding: 0 0.5rem;
    }

    .c8 {
      padding: 13px 0;
      margin: 0;
      max-width: 100%;
      border: 0;
      outline: #E52630;
    }

    .c8:focus {
      border: 0;
    }

    @media (min-width:740px) {
      .c7 {
        max-width: 290px;
      }
    }

    @media (min-width:740px) {
      .c8 {
        height: 100px;
        font-size: 3rem;
      }
    }

    <div
      className="c0"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
          role="search"
        >
          <div
            className="c3"
          >
            <label
              className="c4"
              htmlFor="search"
            >
              <span
                className="c5 c6"
                color="inherit"
                size="s"
              >
                Search
              </span>
              <input
                aria-describedby="search"
                className="c7 c8"
                id="search"
                name="search"
                onChange={[Function]}
                placeholder=""
                role="searchbox"
                type="text"
                value=""
              />
              
            </label>
          </div>
        </div>
      </div>
    </div>
  `);
});
