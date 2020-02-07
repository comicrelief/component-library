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
    .c6 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c8 {
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

    .c8:focus {
      border: 1px solid #666;
    }

    .c8:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c8:focus::-moz-placeholder {
      color: #666;
    }

    .c8:focus:-ms-input-placeholder {
      color: #666;
    }

    .c8:focus::placeholder {
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

    .c7 {
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
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: no-wrap;
      -ms-flex-wrap: no-wrap;
      flex-wrap: no-wrap;
      margin: 4rem auto;
      width: 100%;
      border-bottom: 4px solid #E52630;
      overflow: hidden;
    }

    .c3 {
      width: 90%;
      padding: 0 0.5rem;
    }

    .c5 {
      margin: 0;
      max-width: 100%;
      border: 0;
      outline: #E52630;
    }

    .c5:focus {
      border: 0;
    }

    .c9 {
      width: 90%;
      padding: 0 0.5rem;
      margin: 0;
      width: 60px;
    }

    .c10 {
      margin: 0;
      max-width: 100%;
      border: 0;
      outline: #E52630;
      text-indent: -9999px;
      background-color: #666;
      -webkit-mask: url(mock.asset) no-repeat right center;
      mask: url(mock.asset) no-repeat right center;
      -webkit-mask-size: 45%;
      mask-size: 45%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    .c10:focus {
      border: 0;
    }

    @media (min-width:740px) {
      .c8 {
        max-width: 290px;
      }
    }

    @media (min-width:740px) {
      .c2 {
        padding-bottom: 0.5rem;
      }
    }

    @media (min-width:740px) {
      .c5 {
        height: 100px;
        font-size: 3rem;
      }
    }

    @media (min-width:740px) {
      .c9 {
        width: 70px;
      }
    }

    @media (min-width:740px) {
      .c10 {
        height: 100px;
        font-size: 3rem;
      }
    }

    @media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
      .c10 {
        background: url(mock.asset) no-repeat right center;
      }
    }

    @media (min-width:740px) {
      .c10 {
        -webkit-mask-size: 100%;
        mask-size: 100%;
      }
    }

    <div
      className="c0"
    >
      <div
        className="c1"
      >
        <form
          className="c2"
          onSubmit={[Function]}
        >
          <div
            className="c3"
          >
            <label
              className="c4 c5"
              htmlFor="search"
              onChange={[Function]}
            >
              <span
                className="c6 c7"
                color="inherit"
                size="s"
              >
                Search
              </span>
              <input
                aria-describedby="search"
                className="c8 c5"
                id="search"
                name="search"
                onChange={[Function]}
                placeholder=""
                type="text"
                value=""
              />
              
            </label>
          </div>
          <div
            className="c9"
          >
            <label
              className="c4 c10"
              disabled="disabled"
              htmlFor=""
            >
              <span
                className="c6 c7"
                color="inherit"
                size="s"
              >
                
              </span>
              <input
                aria-describedby=""
                className="c8 c10"
                disabled="disabled"
                id=""
                name="action"
                placeholder=""
                type="submit"
              />
              
            </label>
          </div>
        </form>
      </div>
    </div>
  `);
});
